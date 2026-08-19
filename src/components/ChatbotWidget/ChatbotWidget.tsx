import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Bot, User, RotateCcw, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

interface Message {
  id: string;
  sender: "bot" | "user";
  text: string;
  isLink?: boolean;
  linkPath?: string;
}

interface ChipItem {
  text: string;
  reply: string;
  linkPath?: string;
}

const QUICK_CHIPS: ChipItem[] = [
  // Products
  { text: "What steel products do you offer?", reply: "We supply Coils, Slit Coils, Sheets, Hot Rolled Plates, Seamless & Welded Pipes, Round/Hex/Square Bars, Angles, Circles, and Rings.", linkPath: "/products" },
  { text: "Do you supply SS coils?", reply: "Yes! We supply SS Coils in various widths and thicknesses, including specialized Slit Coils tailored to your industrial specifications.", linkPath: "/products" },
  { text: "Do you offer custom slitting?", reply: "Absolutely. We provide custom length shearing, coil slitting, and surface finishes (2B, No. 1, No. 4, BA, Mirror finish).", linkPath: "/products" },
  { text: "Do you export pipes globally?", reply: "Yes! We export high-pressure seamless and welded pipes along with standard fittings globally.", linkPath: "/products" },
  // Grades
  { text: "What steel grades do you supply?", reply: "We supply Austenitic (SS 304, 304L, 316, 316L, 321, 310S), Duplex, Super Duplex, and Martensitic alloys.", linkPath: "/grades" },
  { text: "Difference between SS 304 and 316?", reply: "SS 304 is the standard 18/8 stainless steel, while SS 316 contains Molybdenum for superior marine and chemical corrosion resistance.", linkPath: "/grades" },
  { text: "Do you supply Duplex steel?", reply: "Yes, we supply Duplex (UNS S31803 / S32205) and Super Duplex (UNS S32750) for demanding structural environments.", linkPath: "/grades" },
  { text: "Austenitic steel properties?", reply: "Austenitic steels are non-magnetic, highly corrosion-resistant, and possess excellent formability and toughness.", linkPath: "/grades" },
  // Quality & Certs
  { text: "Are test certificates provided?", reply: "Yes! All shipments come with official Material Test Certificates (MTC) conforming to EN 10204 3.1.", linkPath: "/certificates" },
  { text: "What testing do you perform?", reply: "We conduct Ultrasonic tests, PMI, Tensile & Yield tests, Hardness tests, and Hydrostatic testing.", linkPath: "/certificates" },
  { text: "Do you offer NABL lab results?", reply: "Yes, all our steel is verified in NABL accredited testing laboratories for compliance.", linkPath: "/certificates" },
  { text: "Can I inspect before delivery?", reply: "Absolutely. We facilitate third-party inspection (TPI) by SGS, TUV, BV, or LLOYDS.", linkPath: "/certificates" },
  { text: "What standards do you comply with?", reply: "Our products conform to ASTM, ASME, EN, DIN, JIS, and BS international standards.", linkPath: "/certificates" },
  // Contact & Offices
  { text: "Where are your offices?", reply: "Our offices are in Mumbai, New Delhi, and Faridabad.", linkPath: "/contact" },
  { text: "Mumbai office address?", reply: "Mumbai: 27, Gurjar Building, Office No. 1, Sadashiv Cross Lane, Girgaum, Mumbai - 400004." },
  { text: "Delhi office address?", reply: "Delhi: UG-30, Palika Place, R.K. Ashram Marg Metro Station, New Delhi - 110001." },
  { text: "Faridabad office address?", reply: "Faridabad: Plot No. 688, Sector -59, Lohamandi, Ballabgarh, Faridabad - 121004." },
  { text: "How to get a custom quote?", reply: "Submit an enquiry on our Contact page or email your RFQ to info.bhartiyasteel@gmail.com.", linkPath: "/contact" },
  { text: "What sheets & plates do you stock?", reply: "We stock standard sheets and hot rolled plates in Austenitic and Duplex grades.", linkPath: "/products" },
  { text: "Grade specifications page?", reply: "Chemical compositions and mechanical properties are available on our Material Grades page.", linkPath: "/grades" },
];

const CHIPS_PER_PAGE = 4;

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      sender: "bot",
      text: "Hello! Welcome to Bhartiya Steel & Alloys. I am SteelAI, your industrial sourcing assistant. How can I help you today?"
    }
  ]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [chipPage, setChipPage] = useState(0);
  const [showEndPrompt, setShowEndPrompt] = useState(false);
  
  const chatEndRef = useRef<HTMLDivElement>(null);
  const inactivityTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const totalChipPages = Math.ceil(QUICK_CHIPS.length / CHIPS_PER_PAGE);
  const currentChips = QUICK_CHIPS.slice(chipPage * CHIPS_PER_PAGE, (chipPage + 1) * CHIPS_PER_PAGE);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: "welcome",
        sender: "bot",
        text: "Hello! Welcome to Bhartiya Steel & Alloys. I am SteelAI, your industrial sourcing assistant. How can I help you today?"
      }
    ]);
    setInputText("");
    setIsTyping(false);
    setChipPage(0);
    setShowEndPrompt(false);
  };

  const resetInactivityTimer = () => {
    if (inactivityTimer.current) clearTimeout(inactivityTimer.current);
    setShowEndPrompt(false);
    inactivityTimer.current = setTimeout(() => {
      setShowEndPrompt(true);
    }, 15000);
  };

  const handleEndChat = () => {
    setShowEndPrompt(false);
    if (inactivityTimer.current) clearTimeout(inactivityTimer.current);
    setIsOpen(false);
    handleResetChat();
  };

  const handleContinueChat = () => {
    setShowEndPrompt(false);
    resetInactivityTimer();
    // Pick 2 random suggestions
    const shuffled = [...QUICK_CHIPS].sort(() => 0.5 - Math.random());
    const picks = shuffled.slice(0, 2);
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        sender: "bot",
        text: `Here are some questions you can ask:\n• ${picks[0].text}\n• ${picks[1].text}`
      }
    ]);
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, showEndPrompt]);

  // Start 15s inactivity timer after each message
  useEffect(() => {
    if (isOpen && messages.length > 1) {
      resetInactivityTimer();
    }
    if (!isOpen) {
      if (inactivityTimer.current) clearTimeout(inactivityTimer.current);
      setShowEndPrompt(false);
    }
    return () => {
      if (inactivityTimer.current) clearTimeout(inactivityTimer.current);
    };
  }, [messages, isOpen]);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener("open-steelai", handleOpen);
    return () => window.removeEventListener("open-steelai", handleOpen);
  }, []);

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;

    const userMsgId = Date.now().toString();
    setMessages((prev) => [...prev, { id: userMsgId, sender: "user", text }]);
    setInputText("");

    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      let replyText = "";
      let path: string | undefined = undefined;

      const lowerText = text.toLowerCase();
      
      // Check for contact me / phone numbers first
      if (lowerText.includes("contact me") || lowerText.includes("call me") || lowerText.includes("phone") || lowerText.includes("number") || lowerText.includes("call") || lowerText.includes("mobile")) {
        replyText = "You can contact us directly at: +91 88269 60316 or +91 11 2358 0741.";
        path = "/contact";
      } else if (lowerText.includes("address") || lowerText.includes("office") || lowerText.includes("location") || lowerText.includes("where")) {
        replyText = "Our office is located at: UG-30, Palika Place, R.K. Ashram Marg Metro Station, New Delhi - 110001.";
        path = "/contact";
      } else if (lowerText.includes("product") || lowerText.includes("item") || lowerText.includes("material") || lowerText.includes("coil") || lowerText.includes("sheet") || lowerText.includes("pipe") || lowerText.includes("ring")) {
        replyText = "We offer Coils, Sheets, Plates, Pipes, Round Bars, Angles, Circles, and Rings.";
        path = "/products";
      } else if (lowerText.includes("quote") || lowerText.includes("price") || lowerText.includes("cost") || lowerText.includes("rate")) {
        replyText = "For pricing, submit an enquiry on our Contact page or email info.bhartiyasteel@gmail.com.";
        path = "/contact";
      } else if (lowerText.includes("grade") || lowerText.includes("304") || lowerText.includes("316")) {
        replyText = "We supply SS 304/304L, 316/316L, 321, 310S, and Duplex alloys.";
        path = "/grades";
      } else if (lowerText.includes("cert") || lowerText.includes("quality") || lowerText.includes("test")) {
        replyText = "We offer MTC (EN 10204 3.1), NABL lab tests, and third-party inspection (SGS, TUV, BV).";
        path = "/certificates";
      } else {
        replyText = "Thank you! Our sales team will review your query. Call +91 88269 60316 or email info.bhartiyasteel@gmail.com for immediate help.";
      }

      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: "bot",
          text: replyText,
          isLink: !!path,
          linkPath: path
        }
      ]);
    }, 1200);
  };

  const handleChipClick = (chip: ChipItem) => {
    const userMsgId = Date.now().toString();
    setMessages((prev) => [...prev, { id: userMsgId, sender: "user", text: chip.text }]);

    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: "bot",
          text: chip.reply,
          isLink: !!chip.linkPath,
          linkPath: chip.linkPath
        }
      ]);
    }, 1000);
  };

  return (
    <>
      {/* Floating Chat Trigger Button */}
      <div className="fixed bottom-6 right-6 z-50 pointer-events-auto flex items-center gap-3">
        {/* Ask SteelAI Side Label Tooltip */}
        <AnimatePresence>
          {!isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 20, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.8 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="bg-[#0b1329]/95 backdrop-blur-md border border-white/10 dark:border-slate-800/80 text-white font-extrabold text-[11px] uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.3)] select-none whitespace-nowrap"
            >
              Ask SteelAI
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="w-11 h-11 rounded-full bg-gradient-to-tr from-[#ff5722] to-amber-500 text-white flex items-center justify-center shadow-[0_4px_25px_rgba(255,87,34,0.45)] hover:shadow-[0_4px_30px_rgba(255,87,34,0.6)] focus:outline-none relative"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={18} />
              </motion.div>
            ) : (
              <motion.div
                key="chat"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <MessageSquare size={18} />
              </motion.div>
            )}
          </AnimatePresence>
          <span className="absolute top-0.5 right-0.5 w-2.5 h-2.5 bg-green-500 rounded-full border-[1.5px] border-[#020b16] animate-ping" />
          <span className="absolute top-0.5 right-0.5 w-2.5 h-2.5 bg-green-500 rounded-full border-[1.5px] border-[#020b16]" />
        </motion.button>
      </div>

      {/* Chat Window Popup Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.85 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.85 }}
            transition={{ type: "spring", damping: 25, stiffness: 220 }}
            className="fixed bottom-[4.5rem] right-6 w-[310px] sm:w-[340px] h-[440px] rounded-2xl bg-[#0b1329]/95 backdrop-blur-xl border border-white/10 dark:border-slate-800/80 shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-50 flex flex-col overflow-hidden pointer-events-auto"
          >
            {/* Header — compact */}
            <div className="bg-gradient-to-r from-slate-900 via-[#0b1329] to-slate-900 px-4 py-2.5 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#ff5722]/20 to-amber-500/20 border border-[#ff5722]/50 flex items-center justify-center shadow-inner">
                  <Bot className="text-[#ff5722]" size={16} />
                </div>
                <div className="text-left">
                  <h3 className="text-white font-extrabold text-[11px] uppercase tracking-wider leading-none">Ask SteelAI</h3>
                  <span className="text-[9px] text-green-400 font-bold flex items-center gap-1 mt-0.5 leading-none">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                    Online
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button 
                  onClick={handleResetChat}
                  title="Reset Conversation"
                  className="text-slate-400 hover:text-[#ff5722] transition-colors p-1 hover:bg-white/5 rounded-full"
                >
                  <RotateCcw size={14} />
                </button>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="text-slate-400 hover:text-white transition-colors p-1 hover:bg-white/5 rounded-full"
                >
                  <X size={15} />
                </button>
              </div>
            </div>

            {/* Chat Messages Log */}
            <div 
              data-lenis-prevent
              className="flex-1 overflow-y-auto overscroll-contain px-3 py-3 space-y-3 select-text scrollbar-thin scrollbar-thumb-slate-800"
            >
              {messages.map((msg) => (
                <div 
                  key={msg.id}
                  className={`flex gap-2 max-w-[88%] ${msg.sender === "user" ? "ml-auto flex-row-reverse" : "mr-auto"}`}
                >
                  <div className={`w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center border ${
                    msg.sender === "user" 
                      ? "bg-slate-800 border-slate-700" 
                      : "bg-[#ff5722]/10 border-[#ff5722]/30"
                  }`}>
                    {msg.sender === "user" ? (
                      <User size={11} className="text-slate-300" />
                    ) : (
                      <Bot size={11} className="text-[#ff5722]" />
                    )}
                  </div>
                  
                  <div className="flex flex-col gap-0.5 text-left">
                    <div className={`px-2.5 py-2 rounded-xl text-[11.5px] leading-[1.5] font-semibold whitespace-pre-line ${
                      msg.sender === "user"
                        ? "bg-gradient-to-tr from-[#ff5722] to-amber-600 text-white rounded-tr-none shadow-md"
                        : "bg-white/5 border border-white/10 text-slate-100 rounded-tl-none shadow-inner"
                    }`}>
                      {msg.text}
                      
                      {msg.isLink && msg.linkPath && (
                        <div className="mt-1.5 pt-1.5 border-t border-white/10">
                          <Link 
                            to={msg.linkPath} 
                            onClick={() => setIsOpen(false)}
                            className="inline-flex items-center gap-1 text-amber-400 hover:text-[#ff5722] font-black underline tracking-wide uppercase text-[9px]"
                          >
                            Explore Page <ArrowRightIcon />
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              {/* Bot Typing Indicator */}
              {isTyping && (
                <div className="flex gap-2 max-w-[88%] mr-auto">
                  <div className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center bg-[#ff5722]/10 border border-[#ff5722]/30">
                    <Bot size={11} className="text-[#ff5722]" />
                  </div>
                  <div className="bg-white/5 border border-white/10 px-2.5 py-2 rounded-xl rounded-tl-none flex items-center gap-1">
                    <span className="w-1 h-1 bg-[#ff5722] rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></span>
                    <span className="w-1 h-1 bg-[#ff5722] rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></span>
                    <span className="w-1 h-1 bg-[#ff5722] rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></span>
                  </div>
                </div>
              )}

              {/* Inactivity End Prompt */}
              {showEndPrompt && (
                <div className="flex gap-2 max-w-[88%] mr-auto">
                  <div className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center bg-[#ff5722]/10 border border-[#ff5722]/30">
                    <Bot size={11} className="text-[#ff5722]" />
                  </div>
                  <div className="bg-white/5 border border-white/10 px-2.5 py-2 rounded-xl rounded-tl-none text-left">
                    <p className="text-[11px] text-slate-100 font-semibold mb-2">Do you want to end the chat?</p>
                    <div className="flex gap-2">
                      <button
                        onClick={handleEndChat}
                        className="px-3 py-1 rounded-full bg-red-500/20 border border-red-500/40 text-red-400 text-[10px] font-bold hover:bg-red-500/30 transition-all"
                      >
                        End
                      </button>
                      <button
                        onClick={handleContinueChat}
                        className="px-3 py-1 rounded-full bg-green-500/20 border border-green-500/40 text-green-400 text-[10px] font-bold hover:bg-green-500/30 transition-all"
                      >
                        Continue
                      </button>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={chatEndRef} />
            </div>

            {/* Quick chips — flat 4 at a time with pagination arrow */}
            <div 
              data-lenis-prevent
              className="px-3 py-1.5 bg-slate-900/50 border-t border-white/5 flex items-center gap-1.5 overscroll-contain"
            >
              <div className="flex-1 flex gap-1.5 overflow-x-auto whitespace-nowrap scrollbar-none">
                {currentChips.map((chip, idx) => (
                  <button
                    key={chipPage * CHIPS_PER_PAGE + idx}
                    onClick={() => handleChipClick(chip)}
                    className="px-2.5 py-1 bg-white/5 hover:bg-[#ff5722]/15 border border-white/10 hover:border-[#ff5722]/50 text-slate-300 hover:text-white rounded-full text-[9.5px] font-bold tracking-wide transition-all shadow-sm shrink-0"
                  >
                    {chip.text}
                  </button>
                ))}
              </div>
              <button
                onClick={() => setChipPage((prev) => (prev + 1) % totalChipPages)}
                className="w-6 h-6 rounded-full bg-white/5 hover:bg-[#ff5722]/20 border border-white/10 hover:border-[#ff5722]/40 flex items-center justify-center shrink-0 transition-all"
                title="More questions"
              >
                <ChevronRight size={12} className="text-slate-400" />
              </button>
            </div>

            {/* Input Bar — compact */}
            <div className="px-3 py-2.5 bg-slate-900 border-t border-white/10 flex items-center gap-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSendMessage(inputText)}
                placeholder="Ask SteelAI..."
                className="flex-1 bg-white/5 border border-white/10 focus:border-[#ff5722]/50 rounded-full px-3 py-2 text-[10.5px] text-white placeholder-slate-400 focus:outline-none font-medium leading-none"
              />
              <button
                onClick={() => handleSendMessage(inputText)}
                className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#ff5722] to-amber-500 text-white flex items-center justify-center shadow-md shadow-[#ff5722]/20 hover:scale-105 transition-transform"
              >
                <Send size={12} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function ArrowRightIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-3 h-3 fill-none stroke-current" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

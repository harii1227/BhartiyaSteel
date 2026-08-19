import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence, type Variants } from "framer-motion";

const STEEL_PRODUCTS = [
  { 
    name: "Standard Coils", 
    key: "std-coil", 
    imageUrl: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=300&q=80",
    icon: (
      <svg viewBox="0 0 120 120" className="w-24 h-24 text-slate-300 drop-shadow-[0_0_15px_rgba(255,87,34,0.2)]">
        <path d="M 30,45 C 30,15 90,15 90,45 L 90,75 C 90,105 30,105 30,75 Z" fill="url(#metalGrad)" stroke="#475569" strokeWidth="1" />
        <circle cx="60" cy="45" r="24" fill="none" stroke="url(#orangeMetal)" strokeWidth="3" opacity="0.9" />
        <circle cx="60" cy="45" r="16" fill="none" stroke="#64748b" strokeWidth="2" />
        <circle cx="60" cy="45" r="9" fill="none" stroke="#475569" strokeWidth="1.5" />
        <circle cx="60" cy="45" r="4" fill="#ff5722" />
      </svg>
    )
  },
  { 
    name: "Stainless Sheets", 
    key: "std-sheets", 
    imageUrl: "https://images.unsplash.com/photo-1504917595217-d4ce5eb922cb?auto=format&fit=crop&w=300&q=80",
    icon: (
      <svg viewBox="0 0 120 120" className="w-24 h-24 text-slate-300 drop-shadow-[0_0_15px_rgba(34,211,238,0.2)]">
        <path d="M 60,25 L 95,43 L 60,61 L 25,43 Z" fill="url(#metalGrad)" stroke="#475569" strokeWidth="1" transform="translate(0, 18)" />
        <path d="M 60,25 L 95,43 L 60,61 L 25,43 Z" fill="url(#metalGrad)" stroke="url(#orangeMetal)" strokeWidth="1.5" />
      </svg>
    )
  },
  { 
    name: "Seamless Pipes", 
    key: "seamless-pipes", 
    imageUrl: "https://images.unsplash.com/photo-1542244547-2413c9e3a6a4?auto=format&fit=crop&w=300&q=80",
    icon: (
      <svg viewBox="0 0 120 120" className="w-24 h-24 text-slate-300 drop-shadow-[0_0_15px_rgba(59,130,246,0.2)]">
        <g transform="translate(0, 5)">
          <circle cx="42" cy="50" r="14" fill="none" stroke="url(#metalGrad)" strokeWidth="4" />
          <circle cx="42" cy="50" r="8" fill="none" stroke="url(#orangeMetal)" strokeWidth="2" />
        </g>
        <g transform="translate(36, -10)">
          <circle cx="42" cy="50" r="14" fill="none" stroke="url(#metalGrad)" strokeWidth="4" />
          <circle cx="42" cy="50" r="8" fill="none" stroke="url(#orangeMetal)" strokeWidth="2" />
        </g>
      </svg>
    )
  },
  { 
    name: "SS Round Bars", 
    key: "round-bars", 
    imageUrl: "https://images.unsplash.com/photo-1535813547-99c456a41d4a?auto=format&fit=crop&w=300&q=80",
    icon: (
      <svg viewBox="0 0 120 120" className="w-24 h-24 text-slate-300 drop-shadow-[0_0_15px_rgba(99,102,241,0.2)]">
        <g transform="translate(0, 5)">
          <path d="M 25,35 L 85,85 A 6,3 0 0,0 91,82 L 31,32 A 6,3 0 0,0 25,35 Z" fill="url(#metalGrad)" stroke="#475569" strokeWidth="1" />
          <ellipse cx="88" cy="83.5" rx="3" ry="6" fill="url(#orangeMetal)" />
        </g>
        <g transform="translate(14, -10)">
          <path d="M 25,35 L 85,85 A 6,3 0 0,0 91,82 L 31,32 A 6,3 0 0,0 25,35 Z" fill="url(#metalGrad)" stroke="#475569" strokeWidth="1" />
          <ellipse cx="88" cy="83.5" rx="3" ry="6" fill="url(#orangeMetal)" />
        </g>
        <g transform="translate(-10, 15)">
          <path d="M 25,35 L 85,85 A 6,3 0 0,0 91,82 L 31,32 A 6,3 0 0,0 25,35 Z" fill="url(#metalGrad)" stroke="#475569" strokeWidth="1" />
          <ellipse cx="88" cy="83.5" rx="3" ry="6" fill="url(#orangeMetal)" />
        </g>
      </svg>
    )
  },
  { 
    name: "SS Circles", 
    key: "circles", 
    imageUrl: "https://images.unsplash.com/photo-1629904853716-f0bc54efa488?auto=format&fit=crop&w=300&q=80",
    icon: (
      <svg viewBox="0 0 120 120" className="w-24 h-24 text-slate-300 drop-shadow-[0_0_15px_rgba(16,185,129,0.2)]">
        <circle cx="60" cy="50" r="26" fill="url(#metalGrad)" opacity="0.4" stroke="#475569" strokeWidth="1.5" />
        <circle cx="54" cy="44" r="26" fill="url(#metalGrad)" stroke="url(#orangeMetal)" strokeWidth="2.5" />
      </svg>
    )
  },
  { 
    name: "Slit Coils", 
    key: "slit-coils", 
    imageUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=300&q=80",
    icon: (
      <svg viewBox="0 0 120 120" className="w-24 h-24 text-slate-300 drop-shadow-[0_0_15px_rgba(251,191,36,0.2)]">
        <path d="M 30,45 C 30,15 90,15 90,45 L 90,75 C 90,105 30,105 30,75 Z" fill="url(#metalGrad)" stroke="#475569" strokeWidth="1" />
        <circle cx="60" cy="45" r="24" fill="none" stroke="url(#orangeMetal)" strokeWidth="2" strokeDasharray="5 3" />
        <line x1="30" y1="45" x2="90" y2="45" stroke="#ff5722" strokeWidth="2" />
      </svg>
    )
  },
  { 
    name: "Hot Rolled Plates", 
    key: "hr-plates", 
    imageUrl: "https://images.unsplash.com/photo-1513828742140-ccaa34f3be09?auto=format&fit=crop&w=300&q=80",
    icon: (
      <svg viewBox="0 0 120 120" className="w-24 h-24 text-slate-300 drop-shadow-[0_0_15px_rgba(244,63,94,0.2)]">
        <path d="M 60,25 L 95,43 L 60,61 L 25,43 Z" fill="url(#metalGrad)" stroke="#475569" strokeWidth="1" transform="translate(0, 24)" />
        <path d="M 60,25 L 95,43 L 60,61 L 25,43 Z" fill="url(#metalGrad)" stroke="#64748b" strokeWidth="1" transform="translate(0, 12)" />
        <path d="M 60,25 L 95,43 L 60,61 L 25,43 Z" fill="url(#metalGrad)" stroke="url(#orangeMetal)" strokeWidth="1.5" />
      </svg>
    )
  },
  { 
    name: "Welded Pipes", 
    key: "welded-pipes", 
    imageUrl: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=300&q=80",
    icon: (
      <svg viewBox="0 0 120 120" className="w-24 h-24 text-slate-300 drop-shadow-[0_0_15px_rgba(59,130,246,0.2)]">
        <circle cx="60" cy="50" r="24" fill="url(#metalGrad)" stroke="#475569" strokeWidth="2" />
        <line x1="60" y1="26" x2="60" y2="74" stroke="url(#orangeMetal)" strokeWidth="3" />
      </svg>
    )
  },
  { 
    name: "SS Angles", 
    key: "angles", 
    imageUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=300&q=80",
    icon: (
      <svg viewBox="0 0 120 120" className="w-24 h-24 text-slate-300 drop-shadow-[0_0_15px_rgba(99,102,241,0.2)]">
        <path d="M 35,25 L 35,80 L 85,80" fill="none" stroke="url(#orangeMetal)" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M 40,30 L 40,75 L 80,75" fill="none" stroke="url(#metalGrad)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  { 
    name: "SS Rings", 
    key: "rings", 
    imageUrl: "https://images.unsplash.com/photo-1629904853716-f0bc54efa488?auto=format&fit=crop&w=300&q=80",
    icon: (
      <svg viewBox="0 0 120 120" className="w-24 h-24 text-slate-300 drop-shadow-[0_0_15px_rgba(16,185,129,0.2)]">
        <circle cx="60" cy="50" r="25" fill="none" stroke="url(#metalGrad)" strokeWidth="6.5" />
        <circle cx="60" cy="50" r="25" fill="none" stroke="url(#orangeMetal)" strokeWidth="2.5" />
      </svg>
    )
  }
];

export default function InteractiveMetalHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeSteelProduct, setActiveSteelProduct] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Framer Motion Animation Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 20 }
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    let time = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    let mouseX = -9999, mouseY = -9999;
    let smoothMouseX = -9999, smoothMouseY = -9999;
    let prevRawX = -9999, prevRawY = -9999;
    let velX = 0, velY = 0;
    let smoothVelX = 0, smoothVelY = 0;
    let isHovering = false;
    let hoverIntensity = 0;
    let windPower = 0;

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const nx = e.clientX - rect.left;
      const ny = e.clientY - rect.top;
      if (smoothMouseX === -9999) {
        smoothMouseX = nx;
        smoothMouseY = ny;
      }
      velX = prevRawX === -9999 ? 0 : nx - prevRawX;
      velY = prevRawY === -9999 ? 0 : ny - prevRawY;
      mouseX = nx;
      mouseY = ny;
      prevRawX = nx;
      prevRawY = ny;
    };

    const onMouseEnter = () => { isHovering = true; };
    const onMouseLeave = () => { isHovering = false; };

    const container = containerRef.current;
    if (!container) return;

    resize();
    window.addEventListener("resize", resize);
    container.addEventListener("mousemove", onMouseMove);
    container.addEventListener("mouseenter", onMouseEnter);
    container.addEventListener("mouseleave", onMouseLeave);

    const render = () => {
      time += 0.004;
      smoothMouseX += (mouseX - smoothMouseX) * 0.08;
      smoothMouseY += (mouseY - smoothMouseY) * 0.08;
      smoothVelX += (velX - smoothVelX) * 0.22;
      smoothVelY += (velY - smoothVelY) * 0.22;
      velX *= 0.75;
      velY *= 0.75;

      const speed = Math.sqrt(smoothVelX * smoothVelX + smoothVelY * smoothVelY);
      const targetWindPower = Math.min(speed / 14, 1.0);
      windPower += (targetWindPower - windPower) * 0.14;
      hoverIntensity += ((isHovering ? 1 : 0) - hoverIntensity) * 0.06;

      ctx.clearRect(0, 0, width, height);

      const numLines = 75;
      const sigma = Math.min(width, height) * 0.38;
      const maxAmplitude = height * 0.10;

      // Determine theme style in real-time
      const isDark = document.documentElement.classList.contains("dark");

      for (let i = 0; i < numLines; i++) {
        const t = i / (numLines - 1);
        const yBase = height * (-0.2 + 1.4 * t);
        const linePhase = t * Math.PI * 2.2;
        ctx.beginPath();
        let first = true;

        for (let x = -20; x <= width + 20; x += 12) {
          const px = x / width;
          const w1 = Math.sin(px * Math.PI * 2.8 - time * 1.1 + linePhase) * 0.58;
          const w2 = Math.sin(px * Math.PI * 5.6 - time * 2.2 + linePhase * 2.0) * 0.24;
          const w3 = Math.sin(px * Math.PI * 1.3 + time * 0.6 + linePhase * 0.55) * 0.18;
          const baseY = yBase + (w1 + w2 + w3) * maxAmplitude;

          const dx = x - smoothMouseX;
          const dy = baseY - smoothMouseY;
          const dist2 = dx * dx + dy * dy;
          const gaussian = Math.exp(-dist2 / (2 * sigma * sigma));
          const dist = Math.sqrt(dist2);

          const swell1 = Math.sin(dist / 210 - time * 1.4 + linePhase * 0.5) * gaussian * hoverIntensity * maxAmplitude * 0.75;
          const swell2 = Math.sin(dist / 370 - time * 0.8 + linePhase * 0.9) * gaussian * hoverIntensity * maxAmplitude * 0.35;
          const wake = Math.sin(dist / 110 - time * 2.8 + linePhase * 0.3) * gaussian * windPower * hoverIntensity * maxAmplitude * 0.65;
          
          const velMag = Math.sqrt(smoothVelX * smoothVelX + smoothVelY * smoothVelY) || 1;
          const windDirY = smoothVelY / velMag;
          const push = windDirY * gaussian * windPower * hoverIntensity * maxAmplitude * 0.55;

          const y = baseY + swell1 + swell2 + wake + push;

          if (first) {
            ctx.moveTo(x, y);
            first = false;
          } else {
            ctx.lineTo(x, y);
          }
        }

        const dyLine = yBase - smoothMouseY;
        const lineGaussian = Math.exp(-(dyLine * dyLine) / (2 * sigma * sigma));
        const hoverGlow = hoverIntensity * lineGaussian * (0.18 + 0.14 * windPower);
        const opacity = Math.min(0.12 + 0.38 * Math.sin(t * Math.PI) + hoverGlow, 0.85);

        // Cyber Cyan/Blue in Dark mode, Premium Bronze/Orange in Light mode
        ctx.strokeStyle = isDark 
          ? `rgba(6, 182, 212, ${opacity * 0.6})` 
          : `rgba(255, 87, 34, ${opacity * 0.45})`;

        ctx.lineWidth = 1.0 + hoverGlow * 2.2;
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
      if (container) {
        container.removeEventListener("mousemove", onMouseMove);
        container.removeEventListener("mouseenter", onMouseEnter);
        container.removeEventListener("mouseleave", onMouseLeave);
      }
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSteelProduct(prev => (prev + 1) % 10);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-[95vh] flex items-center pt-20 overflow-hidden pb-16 bg-[#020B16]">
      {/* Permanent Global SVG Definitions for gradients */}
      <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
        <defs>
          <linearGradient id="metalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="35%" stopColor="#cbd5e1" />
            <stop offset="70%" stopColor="#64748b" />
            <stop offset="100%" stopColor="#1e293b" />
          </linearGradient>
          <linearGradient id="orangeMetal" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fff7ed" />
            <stop offset="50%" stopColor="#ff5722" />
            <stop offset="100%" stopColor="#ea580c" />
          </linearGradient>
        </defs>
      </svg>
      {/* Background Metal Image with Parallax & Dark Vignette */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-[0.28] pointer-events-none transition-all duration-300"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1513828742140-ccaa34f3be09?auto=format&fit=crop&w=2000&q=80')"
        }}
      />
      
      {/* Vignette Overlay for Contrast & Readability */}
      <div className="absolute inset-0 z-1 bg-gradient-to-r from-[#020b16] via-[#020b16]/90 to-transparent pointer-events-none" />
      <div className="absolute inset-0 z-1 bg-gradient-to-t from-[#020b16] via-transparent to-transparent pointer-events-none" />
      
      {/* Interactive Waves Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full z-10 pointer-events-auto block"
      />

      {/* Hero Content Column Layout */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-20 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-center lg:text-left pt-6 pb-12"
      >
        {/* Column 1: Hero Text & CTAs */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start select-text">
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 dark:bg-slate-900/40 backdrop-blur-md border border-white/10 dark:border-slate-800 shadow-lg text-[#ffffff] text-sm font-bold mb-8 transition-colors">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            Global Leader in Alloy Steel Manufacturing
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tight leading-tight drop-shadow-md">
            Engineering the Future with <span className="text-[#ff5722] drop-shadow-[0_0_15px_rgba(255,87,34,0.3)]">Premium Steel</span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className="mt-6 text-lg md:text-xl text-slate-200 font-medium max-w-2xl leading-relaxed drop-shadow-sm">
            Bhartiya Steel & Alloys Pvt. Ltd. delivers uncompromising quality, precision engineering, and reliable supply chains to power global industrial growth.
          </motion.p>
          
          <motion.div variants={itemVariants} className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start w-full pointer-events-auto">
            <Link to="/products" className="bg-[#ff5722] hover:bg-[#e64a19] text-white font-bold py-4 px-8 rounded-full flex items-center justify-center gap-2 shadow-xl shadow-[#ff5722]/30 transition-all hover:-translate-y-1 group">
              Explore Catalog <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link to="/contact" className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/20 font-bold py-4 px-8 rounded-full transition-all flex items-center justify-center backdrop-blur-sm">
              Request a Quote
            </Link>
          </motion.div>
        </div>

        {/* Column 2: Interactive 3D Orbiting Steel Rings */}
        <div className="hidden lg:flex lg:col-span-5 w-full justify-center items-center pointer-events-none relative h-[450px]">
          <div className="absolute w-[400px] h-[400px] flex justify-center items-center" style={{ perspective: '1200px' }}>
            {/* Outer Ring */}
            <motion.div 
              animate={{ rotateY: 360, rotateZ: 45 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute w-80 h-80 rounded-full border-2 border-dashed border-[#ff5722]/30 shadow-[0_0_50px_rgba(255,87,34,0.08)]"
              style={{ transformStyle: "preserve-3d" }}
            />
            {/* Middle Ring */}
            <motion.div 
              animate={{ rotateX: 360, rotateZ: -45 }}
              transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
              className="absolute w-64 h-64 rounded-full border-2 border-double border-blue-500/25 shadow-[0_0_40px_rgba(59,130,246,0.08)]"
              style={{ transformStyle: "preserve-3d" }}
            />
            {/* Inner Ring */}
            <motion.div 
              animate={{ rotateY: -360, rotateX: 180 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              className="absolute w-48 h-48 rounded-full border border-cyan-400/30 shadow-[0_0_30px_rgba(34,211,238,0.06)]"
              style={{ transformStyle: "preserve-3d" }}
            />
            {/* Hover Product Image Preview Tooltip */}
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0, y: 15, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 15, scale: 0.8 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="absolute -top-[135px] z-50 pointer-events-none flex flex-col items-center"
                >
                  <div className="bg-[#0b1329]/95 backdrop-blur-md border-2 border-[#ff5722] p-4 rounded-full flex flex-col items-center justify-center shadow-[0_10px_35px_rgba(255,87,34,0.55)] relative w-32 h-32">
                    <div className="transform scale-[1.3] drop-shadow-[0_0_15px_rgba(255,87,34,0.4)]">
                      {STEEL_PRODUCTS[activeSteelProduct].icon}
                    </div>
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#0b1329] border-r-2 border-b-2 border-[#ff5722] rotate-45" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Core Steel Sphere */}
            <motion.div 
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              animate={{ scale: isHovered ? 1.15 : [1, 1.04, 0.96, 1] }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute w-48 h-48 rounded-full border-2 border-[#ff5722] bg-[#0b1329]/95 backdrop-blur-md flex flex-col items-center justify-center shadow-[0_0_50px_rgba(255,87,34,0.45)] overflow-hidden cursor-help pointer-events-auto transition-shadow duration-300"
              style={{ transformStyle: "preserve-3d" }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={STEEL_PRODUCTS[activeSteelProduct].key}
                  initial={{ opacity: 0, scale: 0.8, rotate: -15, y: 10 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, rotate: 15, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col items-center justify-center pointer-events-auto"
                >
                  <div className="transform scale-[1.05] drop-shadow-[0_0_12px_rgba(255,87,34,0.3)]">
                    {STEEL_PRODUCTS[activeSteelProduct].icon}
                  </div>
                  <span className="text-white font-black text-[11px] uppercase tracking-wider text-center max-w-[135px] mt-2 bg-[#ff5722] px-3 py-1 rounded-full shadow-[0_2px_10px_rgba(255,87,34,0.35)] leading-none border border-[#ff5722]/50">
                    {STEEL_PRODUCTS[activeSteelProduct].name}
                  </span>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

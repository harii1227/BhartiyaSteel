import { ArrowRight, ShieldCheck, Factory, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, animate, useInView, AnimatePresence } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';


interface AnimatedCounterProps {
  from?: number;
  to?: number;
  suffix?: string;
  text?: string;
}

const AnimatedCounter = ({ from = 0, to, suffix = "", text = "" }: AnimatedCounterProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (isInView && to !== undefined) {
      const controls = animate(from, to, {
        duration: 2.5,
        ease: "easeOut",
        onUpdate(value) {
          setCount(Math.round(value));
        }
      });
      return () => controls.stop();
    }
  }, [isInView, from, to]);

  if (text) {
    return (
      <motion.span 
        ref={ref}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.8, type: "spring" }}
      >
        {text}
      </motion.span>
    );
  }

  return <span ref={ref}>{count}{suffix}</span>;
};

const chunkArray = <T,>(arr: T[], size: number): T[][] => {
  const result: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

const GRADES = [
  { title: "201", sub: "201 Stainless Steel" },
  { title: "202", sub: "202 Stainless Steel" },
  { title: "303", sub: "303 Stainless Steel" },
  { title: "304", sub: "304 Stainless Steel" },
  { title: "304L", sub: "304L Stainless Steel" },
  { title: "310", sub: "310 Stainless Steel" },
  { title: "310S", sub: "310S Stainless Steel" },
  { title: "316", sub: "316 Stainless Steel" },
  { title: "316L", sub: "316L Stainless Steel" },
  { title: "409", sub: "409 Stainless Steel" },
  { title: "409L", sub: "409L Stainless Steel" },
  { title: "410", sub: "410 Stainless Steel" },
  { title: "430", sub: "430 Stainless Steel" }
];

const INDUSTRIES = [
  { title: 'Dairy Plant', desc: 'Hygienic stainless steel solutions for milk processing', img: 'https://images.unsplash.com/photo-1587523171352-7f99ee3c44db?auto=format&fit=crop&w=800&q=80' },
  { title: 'Sugar Industry', desc: 'Corrosion-resistant equipment for sugar production', img: 'https://images.unsplash.com/photo-1611270418597-a6c77f4b9ec4?auto=format&fit=crop&w=800&q=80' },
  { title: 'Distillery Plant', desc: 'Durable materials for alcohol production', img: 'https://images.unsplash.com/photo-1574585189745-f095111b1567?auto=format&fit=crop&w=800&q=80' },
  { title: 'Food Industry', desc: 'Food-grade stainless steel equipment', img: 'https://images.unsplash.com/photo-1621213076161-00277bd2e0c2?auto=format&fit=crop&w=800&q=80' },
  { title: 'Pharma Industry', desc: 'Sanitary solutions for drug manufacturing', img: 'https://images.unsplash.com/photo-1532187863486-abf9db514867?auto=format&fit=crop&w=800&q=80' },
  { title: 'Automation', desc: 'Precision components for automated systems', img: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5e8d?auto=format&fit=crop&w=800&q=80' },
  { title: 'Chemical Industry', desc: 'Corrosion-resistant chemical equipment', img: 'https://images.unsplash.com/photo-1605370211624-91b65b161741?auto=format&fit=crop&w=800&q=80' },
  { title: 'Railway', desc: 'Durable materials for rail infrastructure', img: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=800&q=80' },
  { title: 'Oil & Gas', desc: 'High-performance materials for extreme conditions', img: 'https://images.unsplash.com/photo-1580983546083-fcf138e4a9e2?auto=format&fit=crop&w=800&q=80' }
];

const GRADE_PAGES = chunkArray(GRADES, 4);
const INDUSTRY_PAGES = chunkArray(INDUSTRIES, 1);

const TESTIMONIALS = [
  { name: "Ayush Mishra", quote: "Bhartiya Steel & Alloys has completely transformed our supply chain. Their materials are top-notch and always delivered on time. A highly dependable partner!" },
  { name: "Raman Rajput", quote: "The level of precision and quality control they maintain is outstanding. We've sourced various grades from them, and the consistency is always perfect." },
  { name: "Nayab Sekh", quote: "Exceptional customer support and highly competitive pricing without any compromise on the quality of the steel. I highly recommend them for any large-scale project." }
];

const Home = () => {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 800], [0, 250]);
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0]);

  const containerVariants: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 }
    }
  } as const;

  const [activeGradePage, setActiveGradePage] = useState(0);
  const [activeIndustryPage, setActiveIndustryPage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveGradePage(prev => (prev + 1) % GRADE_PAGES.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [activeGradePage]);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndustryPage(prev => (prev + 1) % INDUSTRY_PAGES.length);
    }, 2800);
    return () => clearInterval(timer);
  }, [activeIndustryPage]);

  return (
    <div className="flex flex-col w-full bg-transparent overflow-x-clip transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden pb-16">
        {/* Background Image with Parallax */}
        <motion.div 
          style={{ y: heroY, opacity: heroOpacity, backgroundImage: 'url(/hero.png)' }}
          className="absolute inset-0 z-0 bg-cover bg-center"
        ></motion.div>
        
        {/* Overlay */}
        <div className="absolute inset-0 z-10 bg-white/60 dark:bg-slate-950/80 backdrop-blur-[3px] transition-colors duration-300"></div>
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-white dark:from-slate-950 via-transparent to-white/50 dark:to-slate-950/50 transition-colors duration-300"></div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-20 max-w-7xl mx-auto px-6 w-full flex flex-col items-center text-center pb-12"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm text-slate-800 dark:text-slate-200 text-sm font-bold mb-8 transition-colors duration-300">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Global Leader in Alloy Steel Manufacturing
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white tracking-tight leading-tight max-w-4xl drop-shadow-sm transition-colors duration-300">
            Engineering the Future with <span className="text-[#ff5722]">Premium Steel</span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className="mt-6 text-xl text-slate-800 dark:text-slate-300 font-medium max-w-2xl leading-relaxed drop-shadow-sm transition-colors duration-300">
            Bhartiya Steel & Alloys Pvt. Ltd. delivers uncompromising quality, precision engineering, and reliable supply chains to power global industrial growth.
          </motion.p>
          
          <motion.div variants={itemVariants} className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products" className="bg-[#ff5722] hover:bg-[#e64a19] text-white font-bold py-4 px-8 rounded-full flex items-center justify-center gap-2 shadow-xl shadow-[#ff5722]/30 transition-all hover:-translate-y-1 group">
              Explore Catalog <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link to="/contact" className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-900 dark:text-white border-2 border-slate-200 dark:border-slate-800 font-bold py-4 px-8 rounded-full transition-all flex items-center justify-center">
              Request a Quote
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Why Choose Us Section (5 Columns) */}
      <section className="py-24 bg-transparent relative z-30 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-[#ff5722] text-sm font-bold tracking-wider uppercase mb-2">Our Advantages</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white transition-colors">Why Choose <span className="text-[#ff5722]">Bhartiya Steel</span></h2>
            <div className="w-16 h-1 bg-[#ff5722] mx-auto mt-4 mb-6"></div>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto transition-colors">We combine industry expertise with exceptional service to deliver premium stainless steel solutions</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { icon: ShieldCheck, title: "Trusted Supplier", desc: "A proven track record of excellence in the alloy and steel manufacturing sector." },
              { icon: Factory, title: "Quality Assurance", desc: "100% certified materials, rigorously tested to meet global industrial standards." },
              { icon: Globe, title: "Competitive Pricing", desc: "Optimized production allows us to offer premium steel at highly competitive rates." },
              { icon: Globe, title: "Timely Delivery", desc: "Robust logistics network ensuring your materials arrive precisely when needed." },
              { icon: ShieldCheck, title: "Personalized Support", desc: "Expert guidance from our metallurgical specialists for your specific requirements." }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-md p-6 rounded-2xl shadow-sm border border-slate-100/60 dark:border-slate-800/80 hover:shadow-xl dark:hover:shadow-slate-900 transition-all duration-300 flex flex-col relative overflow-hidden group"
              >
                <div className="text-[#ff5722] mb-6">
                  <feature.icon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 transition-colors">{feature.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed transition-colors">{feature.desc}</p>
                <div className="absolute bottom-6 left-6 w-8 h-0.5 bg-[#ff5722] transition-all duration-300 group-hover:w-16"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Bar (Floating Premium Design) */}
      <section className="relative z-40 py-16 px-6 bg-transparent transition-colors duration-300">
        <div className="w-full max-w-7xl mx-auto">
          <div className="bg-slate-900/90 dark:bg-slate-900/80 backdrop-blur-md rounded-3xl shadow-2xl p-10 md:p-14 border border-slate-800">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center divide-x-0 md:divide-x divide-slate-800">
              <div className="flex flex-col items-center">
                <h3 className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tight">
                  <AnimatedCounter to={200} suffix="+" />
                </h3>
                <p className="text-[#ff5722] font-semibold text-sm uppercase tracking-wider">Satisfied Clients</p>
              </div>
              <div className="flex flex-col items-center">
                <h3 className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tight">
                  <AnimatedCounter to={1000} suffix="+" />
                </h3>
                <p className="text-[#ff5722] font-semibold text-sm uppercase tracking-wider">Products Available</p>
              </div>
              <div className="flex flex-col items-center">
                <h3 className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tight">
                  <AnimatedCounter text="24/7" />
                </h3>
                <p className="text-[#ff5722] font-semibold text-sm uppercase tracking-wider">Customer Support</p>
              </div>
              <div className="flex flex-col items-center">
                <h3 className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tight">
                  <AnimatedCounter to={98} suffix="%" />
                </h3>
                <p className="text-[#ff5722] font-semibold text-sm uppercase tracking-wider">On-Time Delivery</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Available Material Grades Section */}
      <section className="py-16 bg-transparent relative z-30 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white transition-colors">Available <span className="text-[#ff5722]">Material Grades</span></h2>
            <Link to="/grades" className="text-[#ff5722] font-semibold flex items-center gap-2 hover:gap-3 transition-all">
              View All Grades <ArrowRight size={18} />
            </Link>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/60 dark:bg-slate-950/40 backdrop-blur-md border border-slate-200/50 dark:border-slate-800/80 rounded-3xl p-5 sm:p-8 transition-colors duration-300"
          >
            {/* Mobile View: Carousel */}
            <div className="block sm:hidden relative overflow-hidden">
              <div className="min-h-[220px] flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeGradePage}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.2}
                    onDragEnd={(_, info) => {
                      const swipeThreshold = 50;
                      if (info.offset.x < -swipeThreshold && activeGradePage < GRADE_PAGES.length - 1) {
                        setActiveGradePage(prev => prev + 1);
                      } else if (info.offset.x > swipeThreshold && activeGradePage > 0) {
                        setActiveGradePage(prev => prev - 1);
                      }
                    }}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.2 }}
                    className="grid grid-cols-2 gap-4 w-full cursor-grab active:cursor-grabbing"
                  >
                    {GRADE_PAGES[activeGradePage].map((grade, idx) => (
                      <div key={idx} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 flex flex-col hover:border-[#ff5722] dark:hover:border-[#ff5722] hover:shadow-md transition-all cursor-pointer">
                        <span className="font-bold text-slate-900 dark:text-white text-lg transition-colors">{grade.title}</span>
                        <span className="text-xs text-slate-500 dark:text-slate-400 transition-colors">{grade.sub}</span>
                      </div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>
              
              {/* Pagination Dots */}
              <div className="flex justify-center gap-2 mt-6">
                {GRADE_PAGES.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveGradePage(idx)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${activeGradePage === idx ? 'bg-[#ff5722] w-6' : 'bg-slate-300 dark:bg-slate-700'}`}
                    aria-label={`Go to page ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Desktop/Tablet View: Grid */}
            <div className="hidden sm:grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {GRADES.map((grade, idx) => (
                <div key={idx} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 flex flex-col hover:border-[#ff5722] dark:hover:border-[#ff5722] hover:shadow-md transition-all cursor-pointer">
                  <span className="font-bold text-slate-900 dark:text-white text-lg transition-colors">{grade.title}</span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 transition-colors">{grade.sub}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Working Process Section */}
      <section className="py-24 bg-transparent relative z-30 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white transition-colors">Working Process <span className="text-slate-900 dark:text-white">in 3 Steps</span></h2>
            <div className="flex justify-center items-center gap-4 md:gap-12 mt-6 text-[#ff5722] font-semibold text-sm md:text-base">
              <span className="border-b-2 border-[#ff5722] pb-1">Discovery</span>
              <span className="border-b-2 border-[#ff5722] pb-1">Design & Customization</span>
              <span className="border-b-2 border-[#ff5722] pb-1">Delivery & Satisfaction</span>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Understanding Your Needs", desc: "We start by deeply analyzing your technical requirements, project scale, and exact material specifications to recommend the optimal steel grade." },
              { step: "02", title: "Tailored Solutions", desc: "Our advanced facilities process and manufacture your order with strict adherence to the agreed-upon tolerances and quality metrics." },
              { step: "03", title: "On-Time & Reliable", desc: "Your finished products are securely packaged and dispatched through our trusted logistics network for prompt and safe arrival." }
            ].map((process, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-md p-8 rounded-2xl shadow-sm border border-slate-100/60 dark:border-slate-800 flex flex-col relative transition-colors duration-300"
              >
                <div className="flex items-center gap-2 text-slate-400 dark:text-slate-500 font-bold text-xs tracking-widest mb-6 uppercase">
                  <span className="w-2 h-2 rounded-full bg-[#ff5722]"></span> STEP {process.step}
                </div>
                <div className="w-12 h-12 bg-[#ff5722]/10 dark:bg-[#ff5722]/20 text-[#ff5722] rounded-full flex items-center justify-center mb-6">
                  <ShieldCheck size={20} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 transition-colors">{process.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 transition-colors">{process.desc}</p>
                <div className="mt-auto pt-4 w-full flex">
                  <div className="h-1 w-1/3 bg-[#ff5722]"></div>
                  <div className="h-1 w-2/3 bg-slate-100 dark:bg-slate-800"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-12 md:py-24 bg-transparent relative z-30 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-0 sm:px-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 md:mb-16 px-6 sm:px-0"
          >
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white transition-colors">Industry <span className="text-[#ff5722]">we served</span></h2>
            <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto transition-colors">Our stainless steel products serve diverse industries with unmatched durability</p>
          </motion.div>
          
          {/* Mobile View: Carousel */}
          <div className="block md:hidden relative overflow-hidden">
            <div className="min-h-0 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndustryPage}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={(_, info) => {
                    const swipeThreshold = 50;
                    if (info.offset.x < -swipeThreshold && activeIndustryPage < INDUSTRY_PAGES.length - 1) {
                      setActiveIndustryPage(prev => prev + 1);
                    } else if (info.offset.x > swipeThreshold && activeIndustryPage > 0) {
                      setActiveIndustryPage(prev => prev - 1);
                    }
                  }}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.2 }}
                  className="w-full px-0 cursor-grab active:cursor-grabbing"
                >
                  {INDUSTRY_PAGES[activeIndustryPage].map((industry, idx) => (
                    <div 
                      key={idx} 
                      className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-md rounded-none shadow-md border-y border-slate-100 dark:border-slate-700 overflow-hidden hover:shadow-xl dark:hover:shadow-slate-900 transition-all duration-300 flex flex-col group cursor-pointer"
                    >
                      <div className="h-48 overflow-hidden relative">
                        <div 
                          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
                          style={{ backgroundImage: `url(${industry.img})` }}
                        ></div>
                      </div>
                      <div className="p-6 flex flex-col flex-1">
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-[#ff5722] dark:group-hover:text-[#ff5722] transition-colors">{industry.title}</h3>
                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed transition-colors">{industry.desc}</p>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
            
            {/* Pagination Dots */}
            <div className="flex justify-center gap-1.5 mt-4 flex-wrap px-6">
              {INDUSTRY_PAGES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndustryPage(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${activeIndustryPage === idx ? 'bg-[#ff5722] w-6' : 'bg-slate-300 dark:bg-slate-700'}`}
                  aria-label={`Go to page ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Desktop/Tablet View: Grid */}
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
            {INDUSTRIES.map((industry, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (idx % 4) * 0.1 }}
                className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-md rounded-2xl shadow-sm border border-slate-100/60 dark:border-slate-800/80 overflow-hidden hover:shadow-xl dark:hover:shadow-slate-900 transition-all duration-300 flex flex-col group cursor-pointer"
              >
                <div className="h-48 overflow-hidden relative">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
                    style={{ backgroundImage: `url(${industry.img})` }}
                  ></div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-[#ff5722] dark:group-hover:text-[#ff5722] transition-colors">{industry.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed transition-colors">{industry.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 md:py-24 bg-transparent relative z-30 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 transition-colors">What Our <span className="text-[#ff5722]">Clients Say</span></h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg transition-colors">Trusted by businesses across industries for quality steel solutions</p>
          </motion.div>

          {/* Mobile View: Sticky Stacked Cards */}
          <div className="block md:hidden space-y-8 pb-16">
            {TESTIMONIALS.map((testimonial, idx) => (
              <div 
                key={idx}
                className="bg-white/95 dark:bg-slate-900/95 border border-slate-200/60 dark:border-slate-800 border-t-4 border-t-[#ff5722] rounded-3xl p-8 flex flex-col transition-all duration-300 sticky shadow-2xl backdrop-blur-md"
                style={{
                  top: `${96 + idx * 24}px`,
                  zIndex: idx + 1,
                  transform: `scale(${0.94 + idx * 0.03})`,
                  transformOrigin: "top center"
                }}
              >
                <div className="flex gap-1 text-[#ff5722] mb-5">
                  {[1,2,3,4,5].map(star => <span key={star} className="text-lg">★</span>)}
                </div>
                <p className="text-slate-700 dark:text-slate-300 italic mb-6 flex-1 text-base leading-relaxed transition-colors">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#ff5722]/10 text-[#ff5722] rounded-full flex items-center justify-center border border-[#ff5722]/20">
                    <Globe size={18} />
                  </div>
                  <span className="font-bold text-slate-900 dark:text-white transition-colors">{testimonial.name}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop/Tablet View: Grid */}
          <div className="hidden md:grid grid-cols-3 gap-6">
            {TESTIMONIALS.map((testimonial, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="bg-white/95 dark:bg-slate-900/95 border border-slate-200/60 dark:border-slate-800 border-t-4 border-t-[#ff5722] rounded-3xl p-8 flex flex-col transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 backdrop-blur-md"
              >
                <div className="flex gap-1 text-[#ff5722] mb-5">
                  {[1,2,3,4,5].map(star => <span key={star} className="text-lg">★</span>)}
                </div>
                <p className="text-slate-700 dark:text-slate-300 italic mb-6 flex-1 text-base leading-relaxed transition-colors">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#ff5722]/10 text-[#ff5722] rounded-full flex items-center justify-center border border-[#ff5722]/20">
                    <Globe size={18} />
                  </div>
                  <span className="font-bold text-slate-900 dark:text-white transition-colors">{testimonial.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

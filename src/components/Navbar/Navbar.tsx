import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, ChevronDown, ChevronUp } from 'lucide-react';
import { megaMenuData } from '../../data/productsData';
import { useTheme } from '../../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobileActiveSubcategory, setMobileActiveSubcategory] = useState<number | null>(null);
  const [megaMenuHoverable, setMegaMenuHoverable] = useState(true);
  const location = useLocation();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileProductsOpen(false);
    setMobileActiveSubcategory(null);
  }, [location]);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleProductClick = () => {
    setMegaMenuHoverable(false);
    setMobileMenuOpen(false);
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 dark:bg-slate-950/90 backdrop-blur-md shadow-md py-2' : 'bg-white dark:bg-slate-950 py-3 border-b border-transparent dark:border-slate-800'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <img src="/logo.jpeg" alt="Bhartiya Steel Logo" className="h-10 w-auto object-contain rounded-sm" />
          <div className="flex flex-col">
            <span className="text-lg font-black tracking-tight text-slate-900 dark:text-white leading-none">Bhartiya Steel & Alloys</span>
            <span className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-0.5">Pvt. Ltd.</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link to="/" className={`text-base font-bold transition-colors ${location.pathname === '/' ? 'text-[#ff5722]' : 'text-slate-600 dark:text-slate-300 hover:text-[#ff5722] dark:hover:text-[#ff5722]'}`}>Home</Link>
          <Link to="/about" className={`text-base font-bold transition-colors ${location.pathname === '/about' ? 'text-[#ff5722]' : 'text-slate-600 dark:text-slate-300 hover:text-[#ff5722] dark:hover:text-[#ff5722]'}`}>About</Link>
          
          {/* Mega Menu Dropdown */}
          <div 
            className="group py-4"
            onMouseLeave={() => setMegaMenuHoverable(true)}
            onMouseEnter={() => setMegaMenuHoverable(true)}
          >
            <Link to="/products" className={`text-base font-bold flex items-center gap-1.5 transition-colors ${location.pathname.includes('/products') ? 'text-[#ff5722]' : 'text-slate-600 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white'}`}>
              Products
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7"></path></svg>
            </Link>
            
            {/* Dropdown Container */}
            <div className={`absolute top-full left-0 w-full pt-1 px-6 z-50 opacity-0 invisible ${megaMenuHoverable ? 'group-hover:opacity-100 group-hover:visible translate-y-0' : 'translate-y-2'} transition-all duration-300 ease-out`}>
              {/* Actual Box */}
              <div className="max-w-[1400px] mx-auto bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)] dark:shadow-none rounded-2xl p-10 grid grid-cols-5 gap-10 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#ff5722]/10 via-[#ff5722] to-[#ff5722]/10"></div>
                
                {megaMenuData.map((column, colIdx) => (
                  <div key={colIdx} className="flex flex-col">
                    <h3 className="text-[#ff5722] font-black text-xs uppercase tracking-widest mb-6 border-b border-slate-100 dark:border-slate-800 pb-3">{column.title}</h3>
                    
                    <div className="flex flex-col gap-6">
                      {column.sections.map((section, secIdx) => (
                        <div key={secIdx} className="flex flex-col">
                          <h4 className="text-slate-900 dark:text-white font-bold text-[13px] mb-3">{section.title}</h4>
                          <ul className="flex flex-col gap-0.5">
                            {section.items.map(item => (
                              <li key={item.id}>
                                <Link 
                                  to={`/products/${item.id}`} 
                                  onClick={handleProductClick}
                                  className="block py-1.5 text-[14px] text-slate-900 dark:text-slate-300 font-semibold hover:text-[#ff5722] dark:hover:text-[#ff5722] hover:bg-orange-50/50 dark:hover:bg-slate-800 rounded-lg px-3 -ml-3 transition-all duration-200"
                                >
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Link to="/certificates" className={`text-base font-bold transition-colors ${location.pathname === '/certificates' ? 'text-[#ff5722]' : 'text-slate-600 dark:text-slate-300 hover:text-[#ff5722] dark:hover:text-[#ff5722]'}`}>Certificates</Link>
          <Link to="/contact" className={`text-base font-bold transition-colors ${location.pathname === '/contact' ? 'text-[#ff5722]' : 'text-slate-600 dark:text-slate-300 hover:text-[#ff5722] dark:hover:text-[#ff5722]'}`}>Contact</Link>
          <button 
            onClick={() => window.dispatchEvent(new CustomEvent("open-steelai"))}
            className="text-base font-bold text-slate-600 dark:text-slate-300 hover:text-[#ff5722] dark:hover:text-[#ff5722] transition-colors"
          >
            Ask SteelAI
          </button>
        </nav>
        
        <div className="flex items-center gap-4">
          
          <button 
            onClick={toggleTheme}
            className="w-10 h-10 rounded-full flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <Link to="/contact" className="hidden lg:block bg-[#ff5722] hover:bg-[#e64a19] text-white text-sm font-bold py-2 px-5 rounded-full shadow-lg shadow-[#ff5722]/30 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#ff5722]/40">
            Request Quote
          </Link>
          
          <button className="lg:hidden text-slate-900 dark:text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            data-lenis-prevent
            className={`lg:hidden absolute top-full left-0 w-full ${isScrolled ? 'h-[calc(100vh-64px)]' : 'h-[calc(100vh-73px)]'} bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800/80 z-50 overflow-y-auto px-6 py-6 flex flex-col justify-between transition-colors duration-300`}
          >
            <div className="flex flex-col gap-5">
              <Link
                to="/"
                className={`text-lg font-bold transition-colors pb-2 border-b border-slate-100 dark:border-slate-800/50 ${location.pathname === '/' ? 'text-[#ff5722]' : 'text-slate-700 dark:text-slate-300 hover:text-[#ff5722] dark:hover:text-[#ff5722]'}`}
              >
                Home
              </Link>
              
              <Link
                to="/about"
                className={`text-lg font-bold transition-colors pb-2 border-b border-slate-100 dark:border-slate-800/50 ${location.pathname === '/about' ? 'text-[#ff5722]' : 'text-slate-700 dark:text-slate-300 hover:text-[#ff5722] dark:hover:text-[#ff5722]'}`}
              >
                About
              </Link>
              
              {/* Products Accordion */}
              <div className="flex flex-col border-b border-slate-100 dark:border-slate-800/50 pb-2">
                <button
                  onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                  className="flex items-center justify-between text-lg font-bold text-slate-700 dark:text-slate-300 hover:text-[#ff5722] dark:hover:text-[#ff5722] w-full text-left"
                >
                  <span>Products</span>
                  {mobileProductsOpen ? <ChevronUp size={20} className="text-[#ff5722]" /> : <ChevronDown size={20} />}
                </button>
                
                <AnimatePresence>
                  {mobileProductsOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden pl-3 mt-3 flex flex-col gap-3"
                    >
                      <Link
                        to="/products"
                        onClick={handleProductClick}
                        className="text-sm font-bold text-slate-500 dark:text-slate-400 hover:text-[#ff5722] dark:hover:text-[#ff5722]"
                      >
                        View All Products Catalog
                      </Link>

                      {megaMenuData.map((category, catIdx) => {
                        const isSubActive = mobileActiveSubcategory === catIdx;
                        return (
                          <div key={catIdx} className="flex flex-col gap-1.5 mt-1">
                            <button
                              onClick={() => setMobileActiveSubcategory(isSubActive ? null : catIdx)}
                              className="flex items-center justify-between text-[15px] font-bold text-slate-600 dark:text-slate-400 hover:text-[#ff5722] dark:hover:text-[#ff5722] text-left w-full"
                            >
                              <span>{category.title}</span>
                              {isSubActive ? <ChevronUp size={16} className="text-[#ff5722]" /> : <ChevronDown size={16} />}
                            </button>
                            
                            {isSubActive && (
                              <div className="flex flex-col gap-1 pl-3 border-l border-slate-200 dark:border-slate-800 mt-1">
                                {category.sections.map((section, secIdx) => (
                                  <div key={secIdx} className="flex flex-col gap-1 mt-1 mb-2">
                                    <span className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">{section.title}</span>
                                    {section.items.map(item => (
                                      <Link
                                        key={item.id}
                                        to={`/products/${item.id}`}
                                        onClick={handleProductClick}
                                        className="text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-[#ff5722] dark:hover:text-[#ff5722] py-1"
                                      >
                                        {item.name}
                                      </Link>
                                    ))}
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                to="/certificates"
                className={`text-lg font-bold transition-colors pb-2 border-b border-slate-100 dark:border-slate-800/50 ${location.pathname === '/certificates' ? 'text-[#ff5722]' : 'text-slate-700 dark:text-slate-300 hover:text-[#ff5722] dark:hover:text-[#ff5722]'}`}
              >
                Certificates
              </Link>
              
              <Link
                to="/contact"
                className={`text-lg font-bold transition-colors pb-2 border-b border-slate-100 dark:border-slate-800/50 ${location.pathname === '/contact' ? 'text-[#ff5722]' : 'text-slate-700 dark:text-slate-300 hover:text-[#ff5722] dark:hover:text-[#ff5722]'}`}
              >
                Contact
              </Link>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  window.dispatchEvent(new CustomEvent("open-steelai"));
                }}
                className="text-lg font-bold text-slate-700 dark:text-slate-300 hover:text-[#ff5722] dark:hover:text-[#ff5722] text-left pb-2 border-b border-slate-100 dark:border-slate-800/50 w-full"
              >
                Ask SteelAI
              </button>
            </div>

            <div className="mt-8 flex flex-col gap-4">
              <Link 
                to="/contact" 
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center bg-[#ff5722] hover:bg-[#e64a19] text-white text-base font-bold py-3 px-5 rounded-full shadow-lg shadow-[#ff5722]/30 transition-all hover:scale-[1.02]"
              >
                Request Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;

import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 pt-10 pb-6 md:pt-16 md:pb-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12 md:mb-16">
          
          <div className="flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-3">
              <img src="/logo.jpeg" alt="Bhartiya Steel Logo" className="h-10 w-auto object-contain rounded-sm" />
              <div className="flex flex-col">
                <span className="text-lg font-black tracking-tight text-slate-900 dark:text-white leading-none">Bhartiya Steel & Alloys</span>
                <span className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-0.5">Pvt. Ltd.</span>
              </div>
            </Link>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              House of Stainless Steel All Grades: 303, 304/L, 316/L, 310, 321, 202, 201. Specializing in SS Bar, Sheets, Plates, Flats, Circle, Pipe & Pipe Fittings.
            </p>
            <div className="flex gap-4">
              <a href="/" className="w-9 h-9 rounded-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-[#ff5722] dark:hover:text-[#ff5722] hover:border-[#ff5722] transition-colors"><Globe size={16} /></a>
              <a href="mailto:info.bhartiyasteel@gmail.com" className="w-9 h-9 rounded-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-[#ff5722] dark:hover:text-[#ff5722] hover:border-[#ff5722] transition-colors"><Mail size={16} /></a>
              <a href="tel:+918826960316" className="w-9 h-9 rounded-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-[#ff5722] dark:hover:text-[#ff5722] hover:border-[#ff5722] transition-colors"><Phone size={16} /></a>
            </div>
          </div>

          {/* Links and Categories Group - side-by-side on mobile, direct columns on md+ */}
          <div className="grid grid-cols-2 gap-8 md:contents">
            <div className="flex flex-col gap-4">
              <h4 className="font-bold text-slate-900 dark:text-white text-lg mb-1 md:mb-2">Quick Links</h4>
              <ul className="flex flex-col gap-2.5">
                <li><Link to="/about" className="text-slate-600 dark:text-slate-400 hover:text-[#ff5722] dark:hover:text-[#ff5722] transition-colors text-sm font-medium">About Us</Link></li>
                <li><Link to="/products" className="text-slate-600 dark:text-slate-400 hover:text-[#ff5722] dark:hover:text-[#ff5722] transition-colors text-sm font-medium">Products Catalog</Link></li>
                <li><Link to="/certificates" className="text-slate-600 dark:text-slate-400 hover:text-[#ff5722] dark:hover:text-[#ff5722] transition-colors text-sm font-medium">Quality & Certificates</Link></li>
                <li><Link to="/contact" className="text-slate-600 dark:text-slate-400 hover:text-[#ff5722] dark:hover:text-[#ff5722] transition-colors text-sm font-medium">Request a Quote</Link></li>
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="font-bold text-slate-900 dark:text-white text-lg mb-1 md:mb-2">Popular Categories</h4>
              <ul className="flex flex-col gap-2.5">
                <li><Link to="/products/hr-coils" className="text-slate-600 dark:text-slate-400 hover:text-[#ff5722] dark:hover:text-[#ff5722] transition-colors text-sm font-medium">Hot Rolled Coils</Link></li>
                <li><Link to="/products/seamless-pipes" className="text-slate-600 dark:text-slate-400 hover:text-[#ff5722] dark:hover:text-[#ff5722] transition-colors text-sm font-medium">Seamless Pipes</Link></li>
                <li><Link to="/products/ss-flanges" className="text-slate-600 dark:text-slate-400 hover:text-[#ff5722] dark:hover:text-[#ff5722] transition-colors text-sm font-medium">Stainless Flanges</Link></li>
                <li><Link to="/products/ss-round-bars" className="text-slate-600 dark:text-slate-400 hover:text-[#ff5722] dark:hover:text-[#ff5722] transition-colors text-sm font-medium">Round Bars</Link></li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-slate-900 dark:text-white text-lg mb-1 md:mb-2">Contact Us</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#ff5722] mt-0.5 shrink-0" />
                <span className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">UG-30, Palika Place, R.K. Ashram<br/>Marg Metro Station, Opp. Metro<br/>Gate No.4, New Delhi-110001</span>
              </li>
              <li>
                <a href="tel:+918826960316" className="flex items-center gap-3 group">
                  <Phone size={18} className="text-[#ff5722] shrink-0 transition-transform group-hover:scale-110" />
                  <span className="text-slate-600 dark:text-slate-400 text-sm font-medium group-hover:text-[#ff5722] dark:group-hover:text-[#ff5722] transition-colors">+91-8826960316</span>
                </a>
              </li>
              <li>
                <a href="mailto:info.bhartiyasteel@gmail.com" className="flex items-center gap-3 group">
                  <Mail size={18} className="text-[#ff5722] shrink-0 transition-transform group-hover:scale-110" />
                  <span className="text-slate-600 dark:text-slate-400 text-sm font-medium group-hover:text-[#ff5722] dark:group-hover:text-[#ff5722] transition-colors">info.bhartiyasteel@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
            &copy; {new Date().getFullYear()} Bhartiya Steel & Alloys Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white text-sm font-medium transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white text-sm font-medium transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

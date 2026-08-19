import { MapPin, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className="flex flex-col w-full bg-transparent min-h-screen pb-20 transition-colors duration-300">
      {/* Header */}
      <section className="bg-slate-900 relative py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1516387938699-a93567ec168e?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 flex justify-between items-center">
          <h1 className="text-4xl md:text-5xl font-black text-white">Contact Us</h1>
          <div className="hidden md:block text-slate-300 font-medium">
            <Link to="/" className="hover:text-white transition-colors">Home</Link> <span className="mx-2">&gt;</span> <span className="text-white">Contact Us</span>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Our Offices */}
          <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-8 transition-colors duration-300">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Our Offices</h3>
            
            <div className="flex flex-col gap-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-orange-50 dark:bg-slate-800/50 flex items-center justify-center shrink-0 border border-orange-100 dark:border-[#ff5722]/20">
                  <MapPin size={20} className="text-[#ff5722]" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1">MUMBAI OFFICE:</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">27, Gurjar Building, Office No. 1, Sadashiv Cross Lane, Girgaum, Mumbai - 400004.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-orange-50 dark:bg-slate-800/50 flex items-center justify-center shrink-0 border border-orange-100 dark:border-[#ff5722]/20">
                  <MapPin size={20} className="text-[#ff5722]" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1">DELHI OFFICE:</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">UG-30, Palika Place, R.K. Ashram Marg Metro Station, Opp. Metro Gate No.4, New Delhi-110001.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-orange-50 dark:bg-slate-800/50 flex items-center justify-center shrink-0 border border-orange-100 dark:border-[#ff5722]/20">
                  <MapPin size={20} className="text-[#ff5722]" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1">FARIDABAD OFFICE:</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">Plot No. 688, Sector -59, Lohamandi, Ballabgarh, Faridabad - 121004.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Contact */}
          <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-8 transition-colors duration-300">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Quick Contact</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-8">If you have any questions simply use the following contact details.</p>
            
            <div className="flex flex-col gap-6">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-orange-50 dark:bg-slate-800/50 flex items-center justify-center shrink-0 border border-orange-100 dark:border-[#ff5722]/20">
                  <Mail size={20} className="text-[#ff5722]" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1">EMAIL:</h4>
                  <a href="mailto:info.bhartiyasteel@gmail.com" className="text-slate-600 dark:text-slate-400 text-sm hover:text-[#ff5722] dark:hover:text-[#ff5722] transition-colors">info.bhartiyasteel@gmail.com</a>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-orange-50 dark:bg-slate-800/50 flex items-center justify-center shrink-0 border border-orange-100 dark:border-[#ff5722]/20">
                  <Phone size={20} className="text-[#ff5722]" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1">PHONE:</h4>
                  <div className="flex flex-col gap-1">
                    <a href="tel:+918826960316" className="text-slate-600 dark:text-slate-400 text-sm hover:text-[#ff5722] dark:hover:text-[#ff5722] transition-colors">+91 88269 60316</a>
                    <a href="tel:+911123580741" className="text-slate-600 dark:text-slate-400 text-sm hover:text-[#ff5722] dark:hover:text-[#ff5722] transition-colors">+91 11 2358 0741</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Send Your Enquiry */}
          <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-8 transition-colors duration-300">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Send Your Enquiry</h3>
            
            <form className="flex flex-col gap-4">
              <input type="text" placeholder="Your Name" className="w-full bg-white dark:bg-slate-950 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 rounded p-3 text-sm focus:outline-none focus:border-[#ff5722] focus:ring-1 focus:ring-[#ff5722] transition-colors" required />
              <input type="text" placeholder="Your Company Name" className="w-full bg-white dark:bg-slate-950 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 rounded p-3 text-sm focus:outline-none focus:border-[#ff5722] focus:ring-1 focus:ring-[#ff5722] transition-colors" />
              <input type="email" placeholder="Your Email Id" className="w-full bg-white dark:bg-slate-950 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 rounded p-3 text-sm focus:outline-none focus:border-[#ff5722] focus:ring-1 focus:ring-[#ff5722] transition-colors" required />
              <input type="tel" placeholder="Your Phone Number" className="w-full bg-white dark:bg-slate-950 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 rounded p-3 text-sm focus:outline-none focus:border-[#ff5722] focus:ring-1 focus:ring-[#ff5722] transition-colors" required />
              <textarea placeholder="Enter your Requirement" rows={4} className="w-full bg-white dark:bg-slate-950 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 rounded p-3 text-sm focus:outline-none focus:border-[#ff5722] focus:ring-1 focus:ring-[#ff5722] transition-colors" required></textarea>
              
              {/* Dummy ReCaptcha */}
              <div className="flex items-center gap-3 border border-slate-200 dark:border-slate-700 rounded p-3 bg-slate-50 dark:bg-slate-950 w-full sm:w-64 mt-2 transition-colors">
                <input type="checkbox" className="w-5 h-5 text-[#ff5722] rounded border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 focus:ring-[#ff5722]" />
                <span className="text-sm text-slate-700 dark:text-slate-300">I'm not a robot</span>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/RecaptchaLogo.svg/1200px-RecaptchaLogo.svg.png" className="h-6 ml-auto opacity-80" alt="recaptcha" />
              </div>
              
              <button type="submit" className="w-full bg-[#ff5722] hover:bg-[#e64a19] text-white font-bold py-3 px-4 rounded transition-colors mt-2">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="max-w-7xl mx-auto px-6 w-full">
        <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-sm border border-slate-200 dark:border-slate-800 bg-slate-200 dark:bg-slate-800 relative transition-colors duration-300">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14008.114827184469!2d77.1939908!3d28.6288673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd4a0a525bc5%3A0x6335a909fbcd30cd!2sPalika%20Place%2C%20Bhai%20Vir%20Singh%20Marg%2C%20Gole%20Market%2C%20New%20Delhi%2C%20Delhi%20110001!5e0!3m2!1sen!2sin!4v1714000000000!5m2!1sen!2sin" 
            className="absolute inset-0 w-full h-full border-0" 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Office Location Map"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Contact;

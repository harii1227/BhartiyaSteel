import { Factory, Users, Target, Activity, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="flex flex-col w-full bg-transparent min-h-screen pb-20 transition-colors duration-300">
      {/* Page Header */}
      <section className="bg-transparent border-b border-slate-200 dark:border-slate-800 py-16 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4 transition-colors">
            About <span className="text-[#ff5722]">Us</span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto transition-colors">
            Forging enduring relationships through uncompromising quality and engineering excellence.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 py-16 w-full">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          <div className="flex-1 flex flex-col gap-6">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2 transition-colors">Our Legacy in Steel</h2>
            <div className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg space-y-4 transition-colors">
              <p>
                Founded with a vision to revolutionize the global supply of premium industrial metals, 
                <strong className="text-slate-900 dark:text-white font-bold transition-colors"> Bhartiya Alloy Steel Pvt. Ltd.</strong> has grown into a highly trusted name across B2B sectors. 
                We specialize in procuring, processing, and distributing a wide array of steel products including 
                Alloy Steel, Carbon Steel, and Stainless Steel.
              </p>
              <p>
                Our commitment to engineering excellence and stringent quality control has enabled us to serve 
                industries ranging from automotive and aerospace to construction and energy, spanning over 40 countries.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 text-center transition-colors duration-300">
                <h3 className="text-3xl font-black text-[#ff5722] mb-1">25+</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm font-bold transition-colors">Years Experience</p>
              </div>
              <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 text-center transition-colors duration-300">
                <h3 className="text-3xl font-black text-[#ff5722] mb-1">40+</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm font-bold transition-colors">Countries Served</p>
              </div>
              <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 text-center transition-colors duration-300">
                <h3 className="text-3xl font-black text-[#ff5722] mb-1">10k+</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm font-bold transition-colors">Projects Delivered</p>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-[500px] h-[600px] bg-slate-100 dark:bg-slate-800 rounded-3xl overflow-hidden relative shadow-lg transition-colors duration-300">
             <div 
               className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 hover:scale-105"
               style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80)' }}
             ></div>
             <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent flex flex-col justify-end p-8">
                <Factory size={48} className="text-[#ff5722] mb-4" />
                <h3 className="text-white text-2xl font-bold mb-2">State-of-the-art Infrastructure</h3>
                <Link to="/contact" className="inline-flex items-center gap-2 text-[#ff5722] font-bold hover:text-white transition-colors">
                  Take a virtual tour <ArrowRight size={18} />
                </Link>
             </div>
          </div>
          
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-20 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white transition-colors">Our Core Values</h2>
            <p className="text-slate-600 dark:text-slate-400 mt-4 max-w-2xl mx-auto transition-colors">The principles that drive every decision, every batch, and every shipment.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-8 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 hover:border-[#ff5722]/30 dark:hover:border-[#ff5722]/50 hover:bg-orange-50/30 dark:hover:bg-slate-700/50 transition-colors duration-300">
              <div className="w-16 h-16 rounded-full bg-white dark:bg-slate-900 shadow-sm flex items-center justify-center text-[#ff5722] mb-6 transition-colors duration-300">
                <Target size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 transition-colors">Precision</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed transition-colors">We deliver materials that meet exact tolerances and specifications required for critical applications.</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-8 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 hover:border-[#ff5722]/30 dark:hover:border-[#ff5722]/50 hover:bg-orange-50/30 dark:hover:bg-slate-700/50 transition-colors duration-300">
              <div className="w-16 h-16 rounded-full bg-white dark:bg-slate-900 shadow-sm flex items-center justify-center text-[#ff5722] mb-6 transition-colors duration-300">
                <Activity size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 transition-colors">Reliability</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed transition-colors">Consistent performance in both our products and our supply chain commitments worldwide.</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-8 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 hover:border-[#ff5722]/30 dark:hover:border-[#ff5722]/50 hover:bg-orange-50/30 dark:hover:bg-slate-700/50 transition-colors duration-300">
              <div className="w-16 h-16 rounded-full bg-white dark:bg-slate-900 shadow-sm flex items-center justify-center text-[#ff5722] mb-6 transition-colors duration-300">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 transition-colors">Partnership</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed transition-colors">We build long-term relationships acting as technical consultants rather than just suppliers.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

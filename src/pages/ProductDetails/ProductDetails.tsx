import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Check, PackageOpen, Download } from 'lucide-react';
import { productsData } from '../../data/productsData';

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  
  // Find product based on URL parameter
  const productKey = id as keyof typeof productsData;
  const product = productsData[productKey];

  if (!product) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
        <PackageOpen size={64} className="text-slate-300 dark:text-slate-700 mb-6" />
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2 transition-colors">Product Not Found</h1>
        <p className="text-slate-500 dark:text-slate-400 mb-8 transition-colors">The product category you are looking for does not exist.</p>
        <Link to="/products" className="inline-flex items-center gap-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white font-semibold py-3 px-6 rounded-full transition-colors">
          <ArrowLeft size={18} /> Back to Catalog
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full bg-slate-50 dark:bg-slate-950 min-h-screen pb-20 transition-colors duration-300">
      {/* Product Hero */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center pt-16 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${product.image})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-transparent z-10"></div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-6 w-full text-left">
          <Link to="/products" className="inline-flex items-center gap-2 text-white/70 hover:text-white font-medium mb-6 transition-colors">
            <ArrowLeft size={16} /> Back to all products
          </Link>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">{product.title}</h1>
          <p className="text-lg text-white/80 max-w-2xl">{product.description}</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 py-12 w-full -mt-10 relative z-30">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Features & Description */}
          <div className="flex-1 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-8 md:p-10 transition-colors duration-300">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 transition-colors">Overview</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg mb-10 transition-colors">
              Our {product.title.toLowerCase()} are manufactured to meet the highest industry standards, ensuring maximum performance and reliability in demanding environments. Bhartiya Alloy Steel guarantees precise tolerances, excellent surface finish, and strictly tested chemical compositions for every batch dispatched.
            </p>
            
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 transition-colors">Key Features</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {product.features.map((feature: string, idx: number) => (
                <li key={idx} className="flex items-center gap-3 bg-slate-50 dark:bg-slate-800 p-4 rounded-xl border border-slate-100 dark:border-slate-700 transition-colors duration-300">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#ff5722]/10 flex items-center justify-center text-[#ff5722]">
                    <Check size={16} strokeWidth={3} />
                  </div>
                  <span className="font-medium text-slate-700 dark:text-slate-300 transition-colors">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technical Specifications */}
          <div className="w-full lg:w-[400px] shrink-0">
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-8 sticky top-28 transition-colors duration-300">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 pb-4 border-b border-slate-100 dark:border-slate-800 transition-colors">Technical Specifications</h3>
              
              <div className="flex flex-col gap-4 mb-8">
                {product.specs.map((spec: { label: string, value: string }, idx: number) => (
                  <div key={idx} className="flex justify-between items-center py-2 border-b border-slate-50 dark:border-slate-800/50 last:border-0 transition-colors">
                    <span className="text-slate-500 dark:text-slate-400 text-sm transition-colors">{spec.label}</span>
                    <span className="font-bold text-slate-800 dark:text-slate-200 text-right max-w-[60%] transition-colors">{spec.value}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col gap-3">
                <button className="w-full bg-[#ff5722] hover:bg-[#e64a19] text-white font-bold py-3.5 rounded-xl shadow-lg shadow-[#ff5722]/30 transition-all hover:-translate-y-0.5">
                  Request a Quote
                </button>
                <button className="w-full inline-flex items-center justify-center gap-2 bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 font-bold py-3.5 rounded-xl transition-all">
                  <Download size={18} /> Download Data Sheet
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default ProductDetails;

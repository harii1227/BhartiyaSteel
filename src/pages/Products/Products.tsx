import { Filter, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { productsData } from '../../data/productsData';

const Products = () => {
  const products = Object.entries(productsData).map(([id, data]) => ({
    id,
    ...data
  }));

  return (
    <div className="flex flex-col w-full bg-slate-50 dark:bg-slate-950 min-h-screen pb-20 transition-colors duration-300">
      {/* Page Header */}
      <section className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 py-16 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4 transition-colors">
            Product <span className="text-[#ff5722]">Catalog</span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto transition-colors">
            Explore our extensive range of high-grade steel products manufactured to global standards.
          </p>
        </div>
      </section>

      {/* Catalog Content */}
      <section className="max-w-7xl mx-auto px-6 py-12 w-full">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar Filter */}
          <aside className="w-full lg:w-64 shrink-0">
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-6 sticky top-28 transition-colors duration-300">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100 dark:border-slate-800 transition-colors duration-300">
                <h3 className="font-bold text-slate-900 dark:text-white transition-colors">Filters</h3>
                <Filter size={18} className="text-[#ff5722]" />
              </div>
              
              <div className="flex flex-col gap-3">
                <h4 className="text-sm font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2 transition-colors">Category</h4>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input type="checkbox" defaultChecked className="w-4 h-4 rounded border-slate-300 dark:border-slate-600 dark:bg-slate-800 text-[#ff5722] focus:ring-[#ff5722] transition-colors" />
                  <span className="text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white font-medium text-sm transition-colors">All Products</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input type="checkbox" className="w-4 h-4 rounded border-slate-300 dark:border-slate-600 dark:bg-slate-800 text-[#ff5722] focus:ring-[#ff5722] transition-colors" />
                  <span className="text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white text-sm transition-colors">Coils & Sheets</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input type="checkbox" className="w-4 h-4 rounded border-slate-300 dark:border-slate-600 dark:bg-slate-800 text-[#ff5722] focus:ring-[#ff5722] transition-colors" />
                  <span className="text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white text-sm transition-colors">Pipes & Tubes</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input type="checkbox" className="w-4 h-4 rounded border-slate-300 dark:border-slate-600 dark:bg-slate-800 text-[#ff5722] focus:ring-[#ff5722] transition-colors" />
                  <span className="text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white text-sm transition-colors">Flanges & Fittings</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input type="checkbox" className="w-4 h-4 rounded border-slate-300 dark:border-slate-600 dark:bg-slate-800 text-[#ff5722] focus:ring-[#ff5722] transition-colors" />
                  <span className="text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white text-sm transition-colors">Structural Steel</span>
                </label>
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {products.map((product) => (
              <div key={product.id} className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-lg dark:hover:shadow-slate-900/50 hover:-translate-y-1 transition-all duration-300 group flex flex-col">
                <div 
                  className="h-48 relative bg-slate-100 dark:bg-slate-800 overflow-hidden transition-colors duration-300"
                >
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${product.image})` }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                  <span className="absolute top-4 right-4 bg-[#ff5722] text-white text-xs font-bold px-3 py-1 rounded-full shadow-md z-10">
                    {product.title}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-2 line-clamp-1 transition-colors">{product.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm line-clamp-2 mb-6 flex-1 transition-colors">
                    {product.description}
                  </p>
                  <Link to={`/products/${product.id}`} className="inline-flex items-center justify-center gap-2 w-full bg-slate-50 dark:bg-slate-800 hover:bg-[#ff5722] dark:hover:bg-[#ff5722] text-slate-700 dark:text-slate-300 hover:text-white dark:hover:text-white border border-slate-200 dark:border-slate-700 hover:border-[#ff5722] dark:hover:border-[#ff5722] font-semibold py-2.5 rounded-xl transition-colors">
                    View Details <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;

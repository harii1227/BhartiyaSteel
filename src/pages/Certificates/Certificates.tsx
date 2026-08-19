import { Award, CheckCircle } from 'lucide-react';

const certificates = [
  { id: 1, title: 'ISO 9001:2015', desc: 'Quality Management Systems', year: '2023' },
  { id: 2, title: 'ISO 14001:2015', desc: 'Environmental Management Systems', year: '2022' },
  { id: 3, title: 'OHSAS 18001', desc: 'Occupational Health and Safety', year: '2021' },
  { id: 4, title: 'CE Marking', desc: 'European Conformity for Steel Structures', year: '2023' },
];

const Certificates = () => {
  return (
    <div className="flex flex-col w-full bg-transparent min-h-screen pb-20 transition-colors duration-300">
      <section className="bg-transparent border-b border-slate-200 dark:border-slate-800 py-10 md:py-16 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 text-center flex flex-col items-center">
          <Award size={64} className="text-[#ff5722] mb-4 md:mb-6 bg-[#ff5722]/10 p-3 rounded-full" />
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-4 transition-colors">
            Quality <span className="text-[#ff5722]">Certifications</span>
          </h1>
          <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed transition-colors">
            Our commitment to quality is validated by international standards. 
            We maintain rigorous quality control at every stage of the supply chain.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-16 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 md:mb-16">
          {certificates.map(cert => (
            <div key={cert.id} className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-6 md:p-8 flex flex-col items-center text-center hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-green-50 dark:bg-green-900/20 flex items-center justify-center text-green-600 dark:text-green-400 mb-6 transition-colors">
                <CheckCircle size={32} />
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white text-xl mb-3 transition-colors">{cert.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 flex-1 transition-colors">{cert.desc}</p>
              <span className="inline-block bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold px-3 py-1.5 rounded-md transition-colors">
                Valid through: {cert.year}
              </span>
            </div>
          ))}
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-6 md:p-10 max-w-4xl mx-auto text-center relative overflow-hidden transition-colors duration-300">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#ff5722] to-transparent"></div>
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-4 md:mb-6 transition-colors">Our Quality Policy</h2>
          <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg leading-relaxed transition-colors">
            Bhartiya Alloy Steel Pvt. Ltd. is committed to providing materials that meet or exceed customer 
            requirements in terms of quality, delivery, and value. We achieve this through continuous improvement 
            of our Quality Management System and by fostering a culture of excellence among our employees and partners.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Certificates;

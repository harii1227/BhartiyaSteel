import { motion } from 'framer-motion';

const gradesData = [
  {
    title: "201 Stainless Steel",
    badge: "201",
    desc: "Cost-effective nickel-saving austenitic alloy with good corrosion resistance",
    specs: {
      standards: "ASTM A240, UNS S20100",
      composition: "17% Cr, 4-6% Ni, 5.5-7.5% Mn",
      tensile: "655-800 MPa"
    },
    apps: ["Cookware", "Automotive trim", "Utensils", "Decorative applications"]
  },
  {
    title: "202 Stainless Steel",
    badge: "202",
    desc: "General-purpose austenitic alloy with improved strength over 201",
    specs: {
      standards: "ASTM A240, UNS S20200",
      composition: "17-19% Cr, 4-6% Ni, 7.5-10% Mn",
      tensile: "620-780 MPa"
    },
    apps: ["Kitchen equipment", "Architectural panels", "Automotive components", "Structural supports"]
  },
  {
    title: "303 Stainless Steel",
    badge: "303",
    desc: "Free-machining austenitic alloy for improved machinability",
    specs: {
      standards: "ASTM A582, UNS S30300",
      composition: "17-19% Cr, 8-10% Ni, 0.15% S min",
      tensile: "515-690 MPa"
    },
    apps: ["Screws and bolts", "Nuts and fittings", "Shafts and gears", "Machined components"]
  },
  {
    title: "304 Stainless Steel",
    badge: "304",
    desc: "Standard austenitic chromium-nickel alloy with excellent corrosion resistance and formability",
    specs: {
      standards: "ASTM A240, UNS S30400",
      composition: "18% Cr, 8% Ni",
      tensile: "515-720 MPa"
    },
    apps: ["Food processing equipment", "Kitchen appliances", "Chemical containers", "Architectural trim"]
  },
  {
    title: "310 Stainless Steel",
    badge: "310",
    desc: "High-temperature resistant austenitic alloy for furnace applications",
    specs: {
      standards: "ASTM A240, UNS S31000",
      composition: "24-26% Cr, 19-22% Ni",
      tensile: "515-690 MPa"
    },
    apps: ["Furnace components", "Heat exchangers", "Kilns and ovens", "Chemical processing"]
  },
  {
    title: "316 Stainless Steel",
    badge: "316",
    desc: "Molybdenum-enhanced corrosion-resistant alloy for harsh environments",
    specs: {
      standards: "ASTM A240, UNS S31600",
      composition: "16-18% Cr, 10-14% Ni, 2-3% Mo",
      tensile: "515-690 MPa"
    },
    apps: ["Marine equipment", "Pharmaceutical processing", "Chemical processing", "Coastal architecture"]
  },
  {
    title: "409 Stainless Steel",
    badge: "409",
    desc: "Ferritic alloy optimized for automotive and exhaust systems",
    specs: {
      standards: "ASTM A240, UNS S40900",
      composition: "10.5-11.75% Cr, 0.5% Ni, 0.5% Ti",
      tensile: "380-560 MPa"
    },
    apps: ["Automotive exhaust systems", "Catalytic converters", "Mufflers", "Heat exchangers"]
  },
  {
    title: "410 Stainless Steel",
    badge: "410",
    desc: "Martensitic alloy with good hardness and corrosion resistance",
    specs: {
      standards: "ASTM A240, UNS S41000",
      composition: "11.5-13.5% Cr, 0.75% Ni",
      tensile: "440-660 MPa"
    },
    apps: ["Cutlery and blades", "Fasteners", "Pump shafts", "Valve components"]
  },
  {
    title: "430 Stainless Steel",
    badge: "430",
    desc: "Ferritic alloy for decorative and low-corrosion applications",
    specs: {
      standards: "ASTM A240, UNS S43000",
      composition: "16-18% Cr, 0.75% Ni",
      tensile: "450-600 MPa"
    },
    apps: ["Appliance panels", "Automotive trim", "Kitchen equipment", "Decorative applications"]
  },
  {
    title: "304L Stainless Steel",
    badge: "304L",
    desc: "Low carbon version of 304 for improved weldability",
    specs: {
      standards: "ASTM A240, UNS S30403",
      composition: "18% Cr, 8% Ni, 0.03% max C",
      tensile: "485-655 MPa"
    },
    apps: ["Welded assemblies", "Chemical processing equipment", "Food industry", "Architectural applications"]
  },
  {
    title: "310S Stainless Steel",
    badge: "310S",
    desc: "Low carbon version of 310 for improved weldability",
    specs: {
      standards: "ASTM A240, UNS S31008",
      composition: "24-26% Cr, 19-22% Ni, 0.08% max C",
      tensile: "515-690 MPa"
    },
    apps: ["High-temperature welded assemblies", "Furnace parts", "Heat treatment equipment", "Chemical processing"]
  },
  {
    title: "316L Stainless Steel",
    badge: "316L",
    desc: "Low carbon version of 316 for improved weldability",
    specs: {
      standards: "ASTM A240, UNS S31603",
      composition: "16-18% Cr, 10-14% Ni, 2-3% Mo, 0.03% max C",
      tensile: "485-655 MPa"
    },
    apps: ["Welded assemblies in corrosive environments", "Pharmaceutical equipment", "Chemical processing", "Marine applications"]
  },
  {
    title: "409L Stainless Steel",
    badge: "409L",
    desc: "Low carbon version of 409 for improved weldability",
    specs: {
      standards: "ASTM A240",
      composition: "11-12% Cr, 0.3% Ni, 0.3% Ti, 0.03% max C",
      tensile: "380-560 MPa"
    },
    apps: ["Automotive exhaust systems", "Welded assemblies", "Structural components", "Industrial equipment"]
  }
];

const Grades = () => {
  return (
    <div className="flex flex-col w-full bg-transparent min-h-screen pt-16 pb-16 md:pt-20 md:pb-24 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 md:px-6 w-full">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-16 pt-6 md:pt-12"
        >
          <h1 className="text-3xl md:text-5xl font-black text-[#111827] dark:text-white mb-4 transition-colors">Stainless Steel Grades</h1>
          <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg max-w-2xl mx-auto transition-colors">Comprehensive overview of available stainless steel grades</p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gradesData.map((grade, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
              whileHover={{ y: -4, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" }}
              className="bg-white dark:bg-slate-900 rounded-2xl p-5 md:p-8 border border-slate-200 dark:border-slate-800 shadow-sm transition-all duration-300 flex flex-col h-full cursor-default"
            >
              {/* Title & Badge */}
              <div className="flex justify-between items-start mb-3 gap-4">
                <h3 className="text-xl font-black text-slate-900 dark:text-white leading-tight transition-colors">{grade.title}</h3>
                <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap transition-colors">
                  {grade.badge}
                </span>
              </div>
              
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 transition-colors">{grade.desc}</p>
              
              {/* Key Specs */}
              <div className="mt-auto">
                <h4 className="text-[10px] font-bold text-slate-400 dark:text-slate-500 tracking-widest uppercase mb-4 transition-colors">Key Specifications</h4>
                <div className="flex flex-col gap-3 mb-6">
                  <div className="flex justify-between items-baseline gap-4 border-b border-slate-100 dark:border-slate-800/50 pb-2 transition-colors">
                    <span className="text-xs text-slate-500 dark:text-slate-400 transition-colors">Standards:</span>
                    <span className="text-xs font-bold text-slate-800 dark:text-slate-200 text-right transition-colors">{grade.specs.standards}</span>
                  </div>
                  <div className="flex justify-between items-baseline gap-4 border-b border-slate-100 dark:border-slate-800/50 pb-2 transition-colors">
                    <span className="text-xs text-slate-500 dark:text-slate-400 transition-colors">Composition:</span>
                    <span className="text-xs font-bold text-slate-800 dark:text-slate-200 text-right transition-colors">{grade.specs.composition}</span>
                  </div>
                  <div className="flex justify-between items-baseline gap-4 border-b border-slate-100 dark:border-slate-800/50 pb-2 transition-colors">
                    <span className="text-xs text-slate-500 dark:text-slate-400 transition-colors">Tensile Strength:</span>
                    <span className="text-xs font-bold text-slate-800 dark:text-slate-200 text-right transition-colors">{grade.specs.tensile}</span>
                  </div>
                </div>

                {/* Common Applications */}
                <h4 className="text-[10px] font-bold text-slate-400 dark:text-slate-500 tracking-widest uppercase mb-3 transition-colors">Common Applications</h4>
                <div className="flex flex-wrap gap-2">
                  {grade.apps.map((app, appIdx) => (
                    <span key={appIdx} className="bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 text-[10px] font-semibold px-2 py-1 rounded-md transition-colors">
                      {app}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Grades;

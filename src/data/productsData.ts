export const megaMenuData = [
  {
    title: "Stainless Steel Coils and Slit coil",
    sections: [
      {
        title: "Standard Coils",
        items: [
          { id: "hr-coils", name: "Hot Rolled Coils (HR Coils)" },
          { id: "cr-coils", name: "Cold Rolled Coils (CR Coils)" },
          { id: "no4-pvc-coils", name: "NO 4 / Matte Finish PVC Coils" },
          { id: "no8-pvc-coils", name: "NO 8/BA / Mirror Finish PVC Coils" },
          { id: "2e-finish-coils", name: "2E Finish Coils" },
          { id: "slit-coils", name: "Slit Coils" }
        ]
      }
    ]
  },
  {
    title: "Stainless Steel Sheets / Plate",
    sections: [
      {
        title: "Standard Sheets",
        items: [
          { id: "hr-sheets", name: "Hot Rolled Sheets (HR Sheets)" },
          { id: "cr-sheets", name: "Cold Rolled Sheets (CR Sheets)" },
          { id: "no4-pvc-sheets", name: "NO 4 / Matte Finish PVC Sheets" },
          { id: "no8-pvc-sheets", name: "NO 8/BA / Mirror Finish PVC Sheets" },
          { id: "2e-finish-sheets", name: "2E Finish Sheets" }
        ]
      },
      {
        title: "Specialty Sheets",
        items: [
          { id: "chequered-sheets", name: "Chequered Sheets" },
          { id: "dimple-sheets", name: "Dimple Sheets" }
        ]
      }
    ]
  },
  {
    title: "Stainless Steel Pipes and Pipe Fittings",
    sections: [
      {
        title: "Pipes",
        items: [
          { id: "seamless-pipes", name: "Seamless Pipes" },
          { id: "welded-pipes", name: "Welded Pipes" },
          { id: "dairy-pipes", name: "Dairy Pipes" },
          { id: "electropolished-pipes", name: "Electropolished Pipes" },
          { id: "hydro-tested-pipes", name: "Hydro Tested Pipes" }
        ]
      },
      {
        title: "Pipe Fittings",
        items: [
          { id: "ss-bend-elbow", name: "SS Bend/Elbow" },
          { id: "ss-buttweld-tee", name: "SS Buttweld Tee" },
          { id: "ss-reducer", name: "SS Reducer" },
          { id: "ss-union", name: "SS Union" },
          { id: "ss-tc-clamp", name: "SS TC Clamp" },
          { id: "ss-nrv", name: "SS NRV (Non Return Valve)" },
          { id: "ss-butterfly-valve", name: "SS Butterfly Valve" },
          { id: "ss-ball-valve", name: "SS Ball Valve" },
          { id: "ss-flanges", name: "Stainless Steel Flanges" },
          { id: "buttweld-fittings", name: "Buttweld Fittings" }
        ]
      }
    ]
  },
  {
    title: "Stainless Steel Angle, Flats and Rod",
    sections: [
      {
        title: "Structural Shapes",
        items: [
          { id: "ss-angles", name: "SS Angles" },
          { id: "ss-flats", name: "SS Flats" },
          { id: "ss-round-bars", name: "SS Round Bars" },
          { id: "ss-hex-bars", name: "SS Hex Bars" },
          { id: "ss-square-bars", name: "SS Square Bars" }
        ]
      }
    ]
  },
  {
    title: "Stainless Steel Circle and Ring",
    sections: [
      {
        title: "Stainless Steel Circle",
        items: [
          { id: "ss-circles", name: "SS Circles" }
        ]
      },
      {
        title: "Stainless Steel Rings",
        items: [
          { id: "ss-rings", name: "SS Rings" }
        ]
      }
    ]
  }
];

// Helper to generate rich specs for all 30+ products dynamically
const generateProductData = (name: string, categoryTitle: string) => {
  // Default (Coils) - Metallic Texture
  let image = 'https://images.unsplash.com/photo-1533355554160-5f00e932b1df?auto=format&fit=crop&w=1600&q=80'; 
  const desc = `Premium quality ${name} manufactured to exact specifications for demanding industrial applications. Our ${name.toLowerCase()} undergoes rigorous quality testing to ensure durability and strict compliance with international standards.`;
  const features = ['High Quality Finish', 'Precise Dimensional Tolerances', 'Superior Mechanical Strength', 'Corrosion Resistance'];
  const specs = [
    { label: 'Grades Available', value: '304, 304L, 316, 316L, 410, 430' },
    { label: 'Manufacturing Standard', value: 'ASTM A240, ASME SA240' }
  ];

  if (categoryTitle.includes('Sheets')) {
    // Factory Sparks / Steel Sheets
    image = 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=80';
    specs.push({ label: 'Thickness Range', value: '0.1mm to 100mm' });
    specs.push({ label: 'Standard Widths', value: '1000mm, 1250mm, 1500mm' });
  } else if (categoryTitle.includes('Pipes')) {
    // Stacked Metal Pipes
    image = 'https://images.unsplash.com/photo-1565513904949-1662fbba4174?auto=format&fit=crop&w=1600&q=80';
    specs.push({ label: 'Nominal Pipe Size (NPS)', value: '1/2" NB to 24" NB' });
    specs.push({ label: 'Schedules', value: 'SCH 10, SCH 40, SCH 80, SCH 160' });
  } else if (categoryTitle.includes('Angle')) {
    // Heavy Industrial Steel
    image = 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1600&q=80';
    specs.push({ label: 'Standard Length', value: '3m to 6m (Custom available)' });
    specs.push({ label: 'Finish', value: 'Hot Rolled Annealed & Pickled (HRAP)' });
  } else if (categoryTitle.includes('Circle')) {
    // Factory Machinery
    image = 'https://images.unsplash.com/photo-1504917595217-d4ce5eb922cb?auto=format&fit=crop&w=1600&q=80';
    specs.push({ label: 'Diameter Range', value: '50mm to 1500mm' });
    specs.push({ label: 'Thickness', value: '0.5mm to 50mm' });
  }

  return {
    title: name,
    description: desc,
    image,
    features,
    specs
  };
};

export const productsData: Record<string, any> = {};

megaMenuData.forEach(col => {
  col.sections.forEach(sec => {
    sec.items.forEach(item => {
      productsData[item.id] = generateProductData(item.name, col.title);
    });
  });
});

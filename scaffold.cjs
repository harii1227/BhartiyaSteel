const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

const pages = [
  'Home', 'About', 'Products', 'Infrastructure', 'Quality', 'Certificates', 'Contact'
];

const productDetails = [
  'RoundBars', 'SheetsPlates', 'PipesTubes', 'CoilsStrips', 'FlangesFittings', 'Fasteners'
];

const components = [
  'Navbar', 'Footer', 'Button', 'ProductCard', 'GlassPanel', 'DataTable'
];

// Create Layout
const layoutContent = `import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

export default function MainLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
`;
fs.writeFileSync(path.join(srcDir, 'layouts', 'MainLayout.tsx'), layoutContent);

// Create Pages
pages.forEach(page => {
  const content = `export default function ${page}() {
  return (
    <div className="container">
      <h1 className="headline-lg">${page}</h1>
    </div>
  );
}
`;
  fs.writeFileSync(path.join(srcDir, 'pages', `${page}.tsx`), content);
});

// Create Product Detail Pages
productDetails.forEach(page => {
  const content = `export default function ${page}() {
  return (
    <div className="container">
      <h1 className="headline-lg">${page}</h1>
    </div>
  );
}
`;
  fs.writeFileSync(path.join(srcDir, 'pages', 'ProductDetails', `${page}.tsx`), content);
});

// Create Components
components.forEach(comp => {
  const tsxContent = `import './${comp}.css';

export default function ${comp}() {
  return (
    <div className="${comp.toLowerCase()}">
      ${comp}
    </div>
  );
}
`;
  fs.writeFileSync(path.join(srcDir, 'components', comp, `${comp}.tsx`), tsxContent);
  fs.writeFileSync(path.join(srcDir, 'components', comp, `${comp}.css`), `.${comp.toLowerCase()} {\n  /* styles */\n}\n`);
});

console.log('Scaffolding complete');

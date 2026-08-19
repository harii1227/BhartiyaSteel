import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ReactLenis } from 'lenis/react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Products from './pages/Products/Products';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import Certificates from './pages/Certificates/Certificates';
import Grades from './pages/Grades/Grades';
import Contact from './pages/Contact/Contact';
import ScrollToTop from './components/ScrollToTop';
import { ThemeProvider } from './context/ThemeContext';
import './index.css';
import GlobalAnimatedBackground from './components/GlobalAnimatedBackground/GlobalAnimatedBackground';
import ChatbotWidget from './components/ChatbotWidget/ChatbotWidget';
import { useState, useEffect } from 'react';

/* ─────────────────────────────────────────────────────
   WelcomeAnimation – full-screen premium steel showcase
   ───────────────────────────────────────────────────── */
const WelcomeAnimation = ({ onComplete }: { onComplete: () => void }) => {
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    // As soon as all 4 images arrive (~1.0s), start quick exit and land on main page immediately
    const leaveTimer = setTimeout(() => setIsLeaving(true), 1100);
    const doneTimer  = setTimeout(() => onComplete(), 1300);
    return () => { clearTimeout(leaveTimer); clearTimeout(doneTimer); };
  }, [onComplete]);

  return (
    <div
      className="fixed inset-0 z-[9999] overflow-hidden flex flex-col"
      style={{
        background: 'radial-gradient(ellipse 80% 70% at 50% 50%, #0f2133 0%, #050b14 60%, #000 100%)',
        fontFamily: "'Segoe UI', sans-serif",
        animation: isLeaving ? 'welcomeFadeOut 0.25s ease forwards' : 'welcomeFadeIn 0.3s ease forwards',
      }}
    >
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(#ff572215 1px, transparent 1px), linear-gradient(90deg, #ff572215 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Ambient glow orbs */}
      {[
        { cx: '20%', cy: '30%', r: '280px', c: '#1a3a5c' },
        { cx: '80%', cy: '65%', r: '240px', c: '#2a0d00' },
      ].map((o, i) => (
        <div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: o.cx, top: o.cy, width: o.r, height: o.r,
            background: `radial-gradient(circle, ${o.c} 0%, transparent 70%)`,
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}

      {/* TOP — Logo + Company Name */}
      <div
        className="flex items-center justify-center gap-4 pt-6 pb-2"
        style={{ animation: 'fadeDown 0.5s ease 0.1s both', opacity: 0 }}
      >
        <img
          src="/logo.jpeg"
          alt="Bhartiya Steel Logo"
          style={{ height: '52px', width: 'auto', borderRadius: '6px', boxShadow: '0 0 20px rgba(255,87,34,0.4)' }}
        />
        <div>
          <h1
            style={{
              fontSize: 'clamp(1.4rem, 3vw, 2.4rem)',
              fontWeight: 900,
              letterSpacing: '0.18em',
              background: 'linear-gradient(90deg, #ccc 0%, #fff 40%, #ff5722 70%, #ff8a65 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              margin: 0,
              lineHeight: 1.1,
            }}
          >
            BHARTIYA STEEL
          </h1>
          <p style={{ color: '#888', letterSpacing: '0.3em', fontSize: '0.6rem', margin: '2px 0 0', textTransform: 'uppercase' }}>
            Premium Steel Solutions Since 1990
          </p>
        </div>
      </div>

      {/* Orange divider */}
      <div
        style={{
          height: '1px',
          background: 'linear-gradient(90deg, transparent, #ff5722, transparent)',
          margin: '0 8vw',
          animation: 'expandLine 0.5s ease 0.4s both',
          transform: 'scaleX(0)',
        }}
      />

      {/* PRODUCT CARDS — 2x2 grid */}
      <div
        style={{
          flex: 1,
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gridTemplateRows: '1fr 1fr',
          gap: '8px',
          padding: '16px 5vw 16px',
          overflow: 'hidden',
        }}
      >
        {/* 1. TMT ROD */}
        <div
          className="flex flex-col items-center justify-center gap-2"
          style={{ animation: 'slideFromLeft 0.4s cubic-bezier(0.22,1,0.36,1) 0.15s both', opacity: 0 }}
        >
          <div style={{ position: 'relative', width: '100%', height: '110px', overflow: 'hidden' }}>
            {[0, -20, 20, -40, 40].map((offset, i) => (
              <div
                key={i}
                style={{
                  position: 'absolute',
                  width: '85%', maxWidth: '320px', height: '13px',
                  top: `calc(50% + ${offset}px)`, left: '50%',
                  transform: 'translateX(-50%)',
                  background: 'linear-gradient(180deg, #e0e0e0 0%, #aaa 30%, #777 60%, #bbb 85%, #ddd 100%)',
                  borderRadius: '7px',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.7), inset 0 1px 2px rgba(255,255,255,0.3)',
                }}
              >
                {[...Array(7)].map((_, r) => (
                  <div key={r} style={{
                    position: 'absolute', width: '5px', height: '17px',
                    top: '-2px', left: `${r * 14 + 10}%`,
                    background: 'rgba(255,255,255,0.12)', borderRadius: '2px', transform: 'skewX(-15deg)',
                  }} />
                ))}
              </div>
            ))}
          </div>
          <span style={{
            background: 'rgba(255,87,34,0.15)', border: '1px solid rgba(255,87,34,0.5)',
            borderRadius: '4px', padding: '2px 10px', fontSize: '10px',
            color: '#ff8a65', letterSpacing: '0.2em', whiteSpace: 'nowrap',
          }}>TMT ROD · 8–32 MM</span>
          <p style={{ color: '#bbb', fontSize: '0.78rem', letterSpacing: '0.08em', margin: 0, fontWeight: 600 }}>TMT Bars</p>
        </div>

        {/* 2. STEEL PLATE */}
        <div
          className="flex flex-col items-center justify-center gap-2"
          style={{ animation: 'slideFromRight 0.4s cubic-bezier(0.22,1,0.36,1) 0.3s both', opacity: 0 }}
        >
          <div style={{ position: 'relative', width: '100%', height: '110px' }}>
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                style={{
                  position: 'absolute',
                  width: '75%', maxWidth: '260px', height: '30px',
                  bottom: `${i * 18 + 12}px`, left: '50%',
                  transform: 'translateX(-50%) perspective(500px) rotateX(40deg)',
                  background: i === 3
                    ? 'linear-gradient(135deg, #c5c5c5 0%, #eee 30%, #a8a8a8 60%, #d5d5d5 100%)'
                    : `linear-gradient(180deg, #${['888','777','666','555'][i]} 0%, #${['aaa','999','888','777'][i]} 100%)`,
                  borderRadius: '3px',
                  boxShadow: i === 3 ? '0 6px 20px rgba(0,0,0,0.8), inset 0 1px 3px rgba(255,255,255,0.4)' : '0 3px 6px rgba(0,0,0,0.5)',
                  zIndex: i,
                }}
              >
                {i === 3 && (
                  <div style={{
                    position: 'absolute', inset: 0, borderRadius: '3px',
                    backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.07) 0, rgba(255,255,255,0.07) 3px, transparent 3px, transparent 10px)',
                  }} />
                )}
              </div>
            ))}
          </div>
          <span style={{
            background: 'rgba(255,87,34,0.15)', border: '1px solid rgba(255,87,34,0.5)',
            borderRadius: '4px', padding: '2px 10px', fontSize: '10px',
            color: '#ff8a65', letterSpacing: '0.2em', whiteSpace: 'nowrap',
          }}>STEEL PLATE · CHEQUERED</span>
          <p style={{ color: '#bbb', fontSize: '0.78rem', letterSpacing: '0.08em', margin: 0, fontWeight: 600 }}>Steel Plates</p>
        </div>

        {/* 3. ANGLE IRON */}
        <div
          className="flex flex-col items-center justify-center gap-2"
          style={{ animation: 'slideFromLeft 0.4s cubic-bezier(0.22,1,0.36,1) 0.45s both', opacity: 0 }}
        >
          <div style={{ position: 'relative', width: '100%', height: '110px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ position: 'relative', width: '200px', height: '100px' }}>
              <svg width="200" height="100" viewBox="0 0 200 100" style={{ position: 'absolute', top: '6px', left: '6px', opacity: 0.35 }}>
                <rect x="0" y="72" width="180" height="20" rx="2" fill="#444" />
                <rect x="0" y="8" width="20" height="84" rx="2" fill="#333" />
              </svg>
              <svg width="200" height="100" viewBox="0 0 200 100" style={{ position: 'absolute', top: 0, left: 0 }}>
                <defs>
                  <linearGradient id="ag1" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#e0e0e0" />
                    <stop offset="100%" stopColor="#888" />
                  </linearGradient>
                  <linearGradient id="ag2" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#c0c0c0" />
                    <stop offset="100%" stopColor="#777" />
                  </linearGradient>
                </defs>
                <rect x="0" y="72" width="180" height="20" rx="2" fill="url(#ag1)" />
                <rect x="0" y="8" width="20" height="84" rx="2" fill="url(#ag2)" />
                <rect x="0" y="72" width="180" height="4" rx="1" fill="rgba(255,255,255,0.25)" />
                <rect x="0" y="8" width="4" height="84" rx="1" fill="rgba(255,255,255,0.2)" />
              </svg>
            </div>
          </div>
          <span style={{
            background: 'rgba(255,87,34,0.15)', border: '1px solid rgba(255,87,34,0.5)',
            borderRadius: '4px', padding: '2px 10px', fontSize: '10px',
            color: '#ff8a65', letterSpacing: '0.2em', whiteSpace: 'nowrap',
          }}>ANGLE IRON · EQUAL LEG</span>
          <p style={{ color: '#bbb', fontSize: '0.78rem', letterSpacing: '0.08em', margin: 0, fontWeight: 600 }}>Steel Angles</p>
        </div>

        {/* 4. STEEL COIL */}
        <div
          className="flex flex-col items-center justify-center gap-2"
          style={{ animation: 'zoomIn 0.4s cubic-bezier(0.22,1,0.36,1) 0.6s both', opacity: 0 }}
        >
          <div style={{ position: 'relative', width: '140px', height: '140px', flexShrink: 0 }}>
            {[...Array(7)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full"
                style={{
                  width: `${140 - i * 18}px`, height: `${140 - i * 18}px`,
                  top: '50%', left: '50%',
                  transform: 'translate(-50%, -50%)',
                  border: `${4.5 - i * 0.4}px solid rgba(${175 + i * 9},${175 + i * 9},${180 + i * 6},${0.92 - i * 0.08})`,
                  borderTopColor: '#ff5722',
                  borderRightColor: i % 2 === 0 ? '#ff8a65' : 'rgba(140,140,140,0.8)',
                  animation: `coilSpin ${1.2 + i * 0.12}s linear infinite`,
                  animationDirection: i % 2 === 0 ? 'normal' : 'reverse',
                  boxShadow: i === 0 ? '0 0 28px rgba(255,87,34,0.65)' : 'none',
                }}
              />
            ))}
            <div
              className="absolute rounded-full"
              style={{
                width: '22px', height: '22px', top: '50%', left: '50%',
                transform: 'translate(-50%, -50%)',
                background: 'radial-gradient(circle, #ff9a76, #ff5722)',
                boxShadow: '0 0 14px #ff5722',
              }}
            />
          </div>
          <span style={{
            background: 'rgba(255,87,34,0.15)', border: '1px solid rgba(255,87,34,0.5)',
            borderRadius: '4px', padding: '2px 10px', fontSize: '10px',
            color: '#ff8a65', letterSpacing: '0.2em', whiteSpace: 'nowrap',
          }}>HOT-ROLLED COIL</span>
          <p style={{ color: '#bbb', fontSize: '0.78rem', letterSpacing: '0.08em', margin: 0, fontWeight: 600 }}>Steel Coils</p>
        </div>
      </div>

      {/* KEYFRAMES */}
      <style>{`
        @keyframes welcomeFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes welcomeFadeOut {
          from { opacity: 1; transform: scale(1); }
          to   { opacity: 0; transform: scale(1.04); }
        }
        @keyframes fadeDown {
          from { opacity: 0; transform: translateY(-20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes expandLine {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
        @keyframes slideFromLeft {
          from { transform: translateX(-80%); opacity: 0; }
          to   { transform: translateX(0);    opacity: 1; }
        }
        @keyframes slideFromRight {
          from { transform: translateX(80%); opacity: 0; }
          to   { transform: translateX(0);   opacity: 1; }
        }
        @keyframes zoomIn {
          from { transform: scale(0.4); opacity: 0; }
          to   { transform: scale(1);   opacity: 1; }
        }
        @keyframes coilSpin {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to   { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes siteFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [siteVisible, setSiteVisible] = useState(false);

  const handleWelcomeDone = () => {
    setShowWelcome(false);
    setSiteVisible(true);
  };

  return (
    <ReactLenis root options={{ lerp: 0.07, duration: 1.5, smoothWheel: true }}>
      <ThemeProvider>
        <Router>
          <ScrollToTop />
          <ChatbotWidget />
          {showWelcome && <WelcomeAnimation onComplete={handleWelcomeDone} />}
          <div
            className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 selection:bg-[#ff5722] selection:text-white transition-colors duration-300 relative"
            style={siteVisible ? { animation: 'siteFadeIn 0.7s ease forwards' } : { opacity: 0 }}
          >
            {/* 3D Perspective Cyber Grid & Parallax Motion Backdrop */}
            <GlobalAnimatedBackground />
            {/* Content Wrapper */}
            <div className="relative z-10 flex flex-col flex-1 w-full">
              <Navbar />
              <main className="flex-1 w-full pt-[76px]">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/products/:id" element={<ProductDetails />} />
                  <Route path="/products" element={<Products />} />
                  <Route path="/grades" element={<Grades />} />
                  <Route path="/certificates" element={<Certificates />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </div>
        </Router>
      </ThemeProvider>
    </ReactLenis>
  );
}

export default App;

import { useRef } from "react";
import { useHeroParallax } from "../../hooks/useHeroParallax";
import "./background-grid.css";

const GlobalAnimatedBackground = () => {
  const bgRef = useRef<HTMLDivElement>(null);
  useHeroParallax(bgRef);

  return (
    <div ref={bgRef} className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div className="hero-bg">
        <div className="hero-vignette" />
        <div className="grid-back" />
        <div className="perspective-stage">
          <div className="grid-floor" />
          <div className="grid-fore" />
        </div>
        <div className="flow-line f1" style={{ top: "35%" }} />
        <div className="flow-line f2" style={{ top: "50%" }} />
        <div className="flow-line f3" style={{ top: "70%" }} />
        <div className="v-line vl-left" />
        <div className="v-line vl-right" />
        <div className="v-line vl-inner-left" />
        <div className="v-line vl-inner-right" />
        <div className="hero-crown" />
        <div className="hero-mouse-light" />
        <div className="hero-top-fade" />
        <div className="hero-bottom-fade" />
      </div>
    </div>
  );
};

export default GlobalAnimatedBackground;

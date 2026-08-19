import { useEffect } from 'react';

export function useHeroParallax(heroRef: React.RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const gridBack = hero.querySelector('.grid-back') as HTMLDivElement | null;
    const gridFloor = hero.querySelector('.grid-floor') as HTMLDivElement | null;
    const gridFore = hero.querySelector('.grid-fore') as HTMLDivElement | null;
    const flowLines = hero.querySelectorAll('.flow-line') as NodeListOf<HTMLDivElement>;
    const mouseLight = hero.querySelector('.hero-mouse-light') as HTMLDivElement | null;

    let scrollTarget = 0, scrollCurrent = 0;
    let mxTarget = 50, mxCurrent = 50;
    let myTarget = 40, myCurrent = 40;
    let rafId: number;

    const onScroll = () => {
      scrollTarget = Math.min(window.scrollY, window.innerHeight * 2.5);
    };

    const onMouseMove = (e: MouseEvent) => {
      mxTarget = (e.clientX / window.innerWidth) * 100;
      myTarget = (e.clientY / window.innerHeight) * 100;
    };

    const tick = () => {
      scrollCurrent += (scrollTarget - scrollCurrent) * 0.08;
      mxCurrent += (mxTarget - mxCurrent) * 0.06;
      myCurrent += (myTarget - myCurrent) * 0.06;

      const s = scrollCurrent;

      if (gridBack) gridBack.style.transform = `translateY(${s * 0.04}px)`;
      
      if (gridFloor) {
        gridFloor.style.transform = `rotateX(62deg) translateY(${s * -0.10}px) translateZ(${s * 0.55}px)`;
      }
      
      if (gridFore) {
        gridFore.style.transform = `rotateX(68deg) translateY(${s * -0.18}px) translateZ(${s * 1.1}px)`;
      }

      flowLines.forEach((line, i) => {
        const rates = [0.10, 0.18, 0.28];
        line.style.transform = `translateY(${s * -rates[i]}px)`;
      });

      if (mouseLight) {
        mouseLight.style.setProperty('--mx', `${mxCurrent}`);
        mouseLight.style.setProperty('--my', `${myCurrent}`);
      }

      rafId = requestAnimationFrame(tick);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('mousemove', onMouseMove);
    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, [heroRef]);
}

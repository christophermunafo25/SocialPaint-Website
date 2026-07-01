import { Outlet, useLocation } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { CTASection } from './CTASection';

export function Layout() {
  const { pathname } = useLocation();
  const lenisRef = useRef<Lenis | null>(null);

  // Initialize Lenis smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
      infinite: false,
      wrapper: window,
      content: document.documentElement,
    });
    lenisRef.current = lenis;
    (window as unknown as { lenis?: Lenis }).lenis = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return (
    <div className="bg-[#f7f6f5] flex flex-col items-center overflow-clip relative min-h-screen">
      <Navigation />
      <Outlet />
      <div className="bg-[#f7f6f5] flex flex-col items-center relative z-[1] w-full">
        <CTASection />
        <Footer />
      </div>
    </div>
  );
}
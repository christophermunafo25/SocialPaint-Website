import { Outlet, useLocation } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { frame, cancelFrame } from 'motion/react';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { CTASection } from './CTASection';

export function Layout() {
  const { pathname } = useLocation();
  const lenisRef = useRef<Lenis | null>(null);

  // Initialize Lenis smooth scrolling.
  // Lenis is driven inside Motion's frame loop (not its own rAF) so that
  // scroll position updates and scroll-linked transforms (Parallax,
  // ZoomReveal, ScrollHeadline…) land in the same frame — running two
  // separate rAF loops causes a one-frame lag that reads as scroll jitter.
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
      infinite: false,
      autoRaf: false,
      wrapper: window,
      content: document.documentElement,
    });
    lenisRef.current = lenis;
    (window as unknown as { lenis?: Lenis }).lenis = lenis;

    function update(data: { timestamp: number }) {
      lenis.raf(data.timestamp);
    }
    frame.update(update, true);

    return () => {
      cancelFrame(update);
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

  // The shared "Ready to create…" Final CTA (with its warm halo) is the page
  // closer. Suppress it where it would double up: pages that already end in
  // their own signup CTA — feature pages + Clients (own "Join the Waitlist"
  // CTA) and Resources (own newsletter CTA) — and the waitlist signup page.
  const hideFinalCTA =
    pathname.startsWith('/products/') ||
    pathname === '/clients' ||
    pathname === '/resources' ||
    pathname === '/waitlist';

  return (
    <div className="bg-[#f7f6f5] flex flex-col items-center overflow-clip relative min-h-screen">
      <Navigation />
      <Outlet />
      <div className="bg-[#f7f6f5] flex flex-col items-center relative z-[1] w-full">
        {!hideFinalCTA && <CTASection />}
        <Footer />
      </div>
    </div>
  );
}
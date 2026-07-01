import { useRef, useState, useEffect, useCallback } from 'react';
import imgFrame from 'figma:asset/7a693e373bcc2a64495b07e0fc87dceb0ef63bc0.png';
import imgFrameMobile from 'figma:asset/5ee86c7ba39011fff7a11fa1077339c3794201d0.png';
import newImage from '../../imports/image.png';

export function AnalyzerFrame() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [yOffset, setYOffset] = useState(0);

  const handleScroll = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const windowH = window.innerHeight;
    // 0 when top enters viewport bottom, 1 when bottom leaves viewport top
    const progress = Math.max(0, Math.min(1, (windowH - rect.top) / (windowH + rect.height)));
    // Map to -5% .. +5%
    setYOffset((progress - 0.5) * 10);
  }, []);

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [handleScroll]);

  return (
    <div
      ref={containerRef}
      className="overflow-clip relative rounded-[20px] w-full aspect-[1/1] sm:aspect-[872/340]"
    >
      <img
        alt=""
        className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[20px] w-full h-[110%] hidden sm:block"
        src={newImage}
        style={{
          transform: `translateY(${yOffset}%)`,
          willChange: 'transform',
        }}
      />
      <img
        alt=""
        className="absolute inset-0 max-w-none object-contain pointer-events-none rounded-[20px] w-full h-[110%] sm:hidden"
        src={imgFrameMobile}
        style={{
          transform: `translateY(${yOffset}%)`,
          willChange: 'transform',
        }}
      />
    </div>
  );
}
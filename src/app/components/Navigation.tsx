import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import svgPaths from '../../imports/svg-j8kolrt8id';
import svgPathsProducts from '../../imports/svg-qzq04n38pb';
import svgPathsHome from '../../imports/svg-lw0zhqxr46';
import imgFrame1321316469 from 'figma:asset/1becce3e9008c9af0e6f1071b2507958a06e8f9a.png';
import imgFrame1321316470 from 'figma:asset/8a53df6e056823e84228925fba1e153072a71421.png';
import imgFrame1321316471 from 'figma:asset/d3517a8e3268c85765b08644f06160e0dab6bb50.png';
import imgFrame1321316472 from 'figma:asset/0d397075781adfc32d07874a9229e6c0bc1e7f5d.png';
import imgFrame1321316473 from 'figma:asset/7318a8000db1b14cbcddea7f72bc0da323b72782.png';
import { Fingerprint, Layers, ShieldCheck, BarChart3, LayoutTemplate, ChevronDown } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

// SocialPaint design-system lockups (public/brand). Dark lockup on light
// surfaces; all-white lockup on dark/color surfaces. Never recolored.
const logoDark = '/brand/socialpaint-dark.png';
const logoLight = '/brand/socialpaint-light.png';

function Logo() {
  return (
    <Link to="/" className="flex items-center shrink-0 no-underline">
      <img src={logoDark} alt="Socialpaint" className="h-[22px] w-auto" />
    </Link>
  );
}

function ChevronIcon({ rotated = false }: { rotated?: boolean }) {
  return (
    <motion.div
      className="overflow-clip relative shrink-0 size-[16px]"
      animate={{ rotate: rotated ? 180 : 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]">
        <div className="absolute inset-[-18.75%_-9.38%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.5 5.5">
            <path d={svgPaths.p14416700} stroke="#231F23" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Home Dropdown ─── */
function HomeDropdown({ onClose }: { onClose: () => void }) {
  const homeItems = [
    {
      label: 'Platform Overview',
      description: 'See how Socialpaint works end-to-end',
      path: '/',
      iconPath: svgPathsHome.p25199c80,
      viewBox: '0 0 19.5 19.5',
      bgColor: 'bg-white',
    },
    {
      label: 'How It Works',
      description: 'From brand upload to content at scale',
      path: '/',
      iconPath: svgPathsHome.p3350b200,
      viewBox: '0 0 21.5 19.5',
      bgColor: 'bg-white',
    },
    {
      label: 'Why Socialpaint',
      description: 'What makes us different from the rest',
      path: '/',
      iconPath: svgPathsHome.p2cead8d0,
      viewBox: '0 0 21.5014 21.502',
      bgColor: 'bg-white',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
      className="absolute top-full left-0 mt-2 bg-[#f7f6f5] rounded-[20px] shadow-[0px_4px_80px_0px_rgba(0,0,0,0.08)] p-6 z-50"
    >
      <div className="flex flex-col gap-6 relative">
        {/* Hover highlight background */}
        <div className="absolute bg-[#ececec] h-[76px] left-[-12px] rounded-[12px] top-[-12px] w-[246px] opacity-0 pointer-events-none" />
        {homeItems.map((item, i) => (
          <Link
            key={item.label}
            to={item.path}
            onClick={onClose}
            className="flex gap-4 items-start w-[222px] no-underline group relative"
          >
            {i === 0 && (
              <div className="absolute bg-[#ececec] h-[76px] left-[-12px] rounded-[12px] top-[-12px] w-[246px] -z-10 group-hover:opacity-100 opacity-0 transition-opacity" />
            )}
            {i !== 0 && (
              <div className="absolute bg-[#ececec] h-[76px] left-[-12px] rounded-[12px] top-[-12px] w-[246px] -z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
            )}
            <div className={`${item.bgColor} flex items-center p-3 rounded-[12px] shrink-0`}>
              <div className="overflow-clip relative shrink-0 size-[24px]">
                <svg className="block size-full" fill="none" viewBox={item.viewBox}>
                  <path d={item.iconPath} stroke="#231F23" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
            <div className="flex flex-col gap-1 items-start justify-center">
              <p className="text-[#231f23] text-[16px]" style={{ fontWeight: 400 }}>{item.label}</p>
              <p className="text-[rgba(35,31,35,0.64)] text-[13px] leading-[20px]" style={{ fontWeight: 300 }}>{item.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </motion.div>
  );
}

/* ─── Products Dropdown ─── */
function ProductsDropdown({ onClose }: { onClose: () => void }) {
  const coreTools: { label: string; description: string; path: string; icon: LucideIcon; bgColor: string }[] = [
    {
      label: 'Style DNA',
      description: 'Learns your brand identity from your existing design assets automatically.',
      path: '/products/style-dna',
      icon: Fingerprint,
      bgColor: '#CDBCFF',
    },
    {
      label: 'Content Studio',
      description: 'Generate on-brand social posts, ads, and stories in seconds.',
      path: '/products/content-studio',
      icon: Layers,
      bgColor: '#A7FFAC',
    },
    {
      label: 'Brand Guard',
      description: 'Automated brand consistency checks for every piece of content.',
      path: '/products/brand-guard',
      icon: ShieldCheck,
      bgColor: '#A6CEFF',
    },
  ];

  const advancedTools: { label: string; description: string; path: string; icon: LucideIcon; bgColor: string }[] = [
    {
      label: 'Insights',
      description: 'AI-powered recommendations to optimize your content strategy.',
      path: '/products/insights',
      icon: BarChart3,
      bgColor: '#FFED8C',
    },
    {
      label: 'Smart Templates',
      description: 'Brand-adaptive template library that matches your Style DNA.',
      path: '/products/smart-templates',
      icon: LayoutTemplate,
      bgColor: '#FFC5B0',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-[#f7f6f5] rounded-[20px] shadow-[0px_4px_80px_0px_rgba(0,0,0,0.08)] p-6 pb-12 z-50"
    >
      <div className="flex gap-16 items-start">
        {/* Core Tools */}
        <div className="flex flex-col gap-8">
          <p className="font-['Fragment_Mono',monospace] text-[#231f23] text-[12px] tracking-[0.75px] uppercase">Core Tools</p>
          <div className="flex flex-col gap-8 relative">
            {coreTools.map((tool) => {
              const Icon = tool.icon;
              return (
                <Link
                  key={tool.label}
                  to={tool.path}
                  onClick={onClose}
                  className="flex gap-4 items-start w-[333px] no-underline group"
                >
                  <div className="flex items-center p-3 rounded-[12px] shrink-0" style={{ backgroundColor: tool.bgColor }}>
                    <Icon size={24} color="#231f23" />
                  </div>
                  <div className="flex flex-col gap-1 items-start justify-center flex-1">
                    <p className="text-[#231f23] text-[16px]" style={{ fontWeight: 400 }}>{tool.label}</p>
                    <p className="text-[rgba(35,31,35,0.64)] text-[13px] leading-[20px]" style={{ fontWeight: 300 }}>{tool.description}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Advanced Intelligence */}
        <div className="flex flex-col gap-8">
          <p className="font-['Fragment_Mono',monospace] text-[#231f23] text-[12px] tracking-[0.75px] uppercase">Advanced Intelligence</p>
          <div className="flex flex-col gap-8">
            {advancedTools.map((tool) => {
              const Icon = tool.icon;
              return (
                <Link
                  key={tool.label}
                  to={tool.path}
                  onClick={onClose}
                  className="flex gap-4 items-start w-[333px] no-underline group"
                >
                  <div className="flex items-center p-3 rounded-[12px] shrink-0" style={{ backgroundColor: tool.bgColor }}>
                    <Icon size={24} color="#231f23" />
                  </div>
                  <div className="flex flex-col gap-1 items-start justify-center flex-1">
                    <p className="text-[#231f23] text-[16px]" style={{ fontWeight: 400 }}>{tool.label}</p>
                    <p className="text-[rgba(35,31,35,0.64)] text-[13px] leading-[20px]" style={{ fontWeight: 300 }}>{tool.description}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Promo Card */}
        <div className="relative rounded-[20px] shrink-0 w-[332px] h-[280px]">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[20px]">
            <div className="absolute bg-[#231f23] inset-0 rounded-[20px]" />
            <img alt="" className="absolute max-w-none object-cover rounded-[20px] size-full" src={imgFrame1321316469} />
            <img alt="" className="absolute max-w-none object-cover rounded-[20px] size-full" src={imgFrame1321316470} />
            <img alt="" className="absolute max-w-none object-cover rounded-[20px] size-full" src={imgFrame1321316471} />
            <img alt="" className="absolute max-w-none object-cover rounded-[20px] size-full" src={imgFrame1321316472} />
            <img alt="" className="absolute max-w-none object-cover rounded-[20px] size-full" src={imgFrame1321316473} />
          </div>
          <div className="overflow-clip rounded-[inherit] size-full relative">
            <div className="flex flex-col items-start justify-between p-6 size-full">
              <div className="flex flex-col gap-6 items-start w-full">
                <img src={logoLight} alt="Socialpaint" className="h-[18px] w-auto" />
                <p className="leading-[32px] text-[#f7f6f5] text-[24px]">Your brand, scaled across every channel effortlessly</p>
              </div>
              <Link to="/products/style-dna" onClick={onClose} className="bg-[#f7f6f5] flex gap-2 items-center justify-center px-5 py-3 rounded-lg cursor-pointer no-underline">
                <p className="text-[#231f23] text-[16px] whitespace-nowrap">Explore all products</p>
                <div className="overflow-clip relative shrink-0 size-[16px]">
                  <svg className="block size-full" fill="none" viewBox="0 0 10.8333 10.8333">
                    <path d={svgPaths.p9a1b880} stroke="#231F23" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMobileMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleDropdownEnter = (label: string) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setActiveDropdown(label);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const navLinks = [
    { label: 'Home', hasDropdown: false, path: '/' },
    { label: 'Features', hasDropdown: true, path: '/products/style-dna' },
    { label: 'Integrations', hasDropdown: false, path: '/integrations' },
    { label: 'Resources', hasDropdown: false, path: '/resources' },
    { label: 'Clients', hasDropdown: false, path: '/clients' },
    { label: 'Pricing', hasDropdown: false, path: '/pricing' },
  ];

  const isActive = (link: typeof navLinks[number]) => {
    if (link.label === 'Home') return location.pathname === '/';
    if (link.label === 'Features') return location.pathname.startsWith('/products');
    if (link.label === 'Resources') return location.pathname === '/resources';
    return location.pathname === link.path;
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center" ref={navRef}>
      {/* Announcement Bar */}
      <div className={`w-full max-w-[1440px] px-4 pt-2 transition-all duration-300 ${scrolled ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100'}`}>
        <div className="bg-[#A7FFAC] rounded-[20px] w-full">
          <div className="flex items-center justify-center px-4 sm:px-6 py-1">
            <div className="flex gap-2 sm:gap-3 items-center text-[#231f23] text-[11px] sm:text-[13px]">
              <p className="text-center">Socialpaint Now in Private Beta</p>
              <p className="underline cursor-pointer shrink-0 hidden sm:block">Read more</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className={`w-full max-w-[1440px] px-4 pt-2 pb-4 transition-all duration-300 ${scrolled ? 'pt-2' : ''}`}>
        <div className={`bg-[#f7f6f5] rounded-[20px] w-full transition-shadow duration-300 ${scrolled ? 'shadow-[0px_4px_80px_0px_rgba(0,0,0,0.08)]' : ''}`}>
          <div className="flex items-center justify-between px-4 sm:px-6 py-4 relative">
            <Logo />

            {/* Center Nav Links - Desktop only */}
            <div className="absolute left-1/2 -translate-x-1/2 hidden lg:flex gap-2 items-center">
              {navLinks.map((link) => (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => link.hasDropdown && handleDropdownEnter(link.label)}
                  onMouseLeave={handleDropdownLeave}
                >
                  {link.hasDropdown ? (
                    <button
                      className={`backdrop-blur-[8px] flex gap-1 items-center justify-center px-3 py-2 rounded-lg cursor-pointer transition-opacity ${
                        isActive(link) ? 'opacity-100' : 'opacity-48 hover:opacity-100'
                      }`}
                      onClick={() => setActiveDropdown(activeDropdown === link.label ? null : link.label)}
                    >
                      <p className="text-[#231f23] text-[14px] whitespace-nowrap">{link.label}</p>
                      <ChevronIcon rotated={activeDropdown === link.label} />
                    </button>
                  ) : (
                    <Link
                      to={link.path}
                      className={`backdrop-blur-[8px] flex gap-1 items-center justify-center px-3 py-2 rounded-lg cursor-pointer no-underline transition-opacity ${
                        isActive(link) ? 'opacity-100' : 'opacity-48 hover:opacity-100'
                      }`}
                    >
                      <p className="text-[#231f23] text-[14px] whitespace-nowrap">{link.label}</p>
                    </Link>
                  )}

                  {/* Dropdown panels */}
                  <AnimatePresence>
                    {activeDropdown === 'Features' && link.label === 'Features' && (
                      <ProductsDropdown onClose={() => setActiveDropdown(null)} />
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Right Buttons - Desktop */}
            <div className="hidden lg:flex gap-2 items-center">
              <button className="backdrop-blur-[8px] bg-[rgba(35,31,35,0.08)] flex items-center justify-center px-4 py-2 rounded-lg cursor-pointer">
                <p className="text-[#231f23] text-[14px] whitespace-nowrap">Sign in</p>
              </button>
              <Link to="/waitlist" className="bg-[#231f23] flex items-center justify-center px-4 py-2 rounded-lg cursor-pointer no-underline">
                <p className="text-[#f7f6f5] text-[14px] whitespace-nowrap">Join the Waitlist</p>
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="lg:hidden flex flex-col gap-[5px] items-center justify-center p-2 cursor-pointer"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <motion.span
                className="block w-5 h-[2px] bg-[#231f23] rounded-full"
                animate={mobileMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="block w-5 h-[2px] bg-[#231f23] rounded-full"
                animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="block w-5 h-[2px] bg-[#231f23] rounded-full"
                animate={mobileMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2 }}
              />
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                className="overflow-hidden lg:hidden"
              >
                <div className="flex flex-col gap-1 px-4 pb-6 pt-2">
                  {navLinks.map((link) => (
                    <MobileNavItem
                      key={link.label}
                      link={link}
                      onNavigate={() => setMobileMenuOpen(false)}
                    />
                  ))}
                  <div className="flex flex-col gap-2 mt-4">
                    <button className="backdrop-blur-[8px] bg-[rgba(35,31,35,0.08)] flex items-center justify-center px-5 py-3 rounded-lg cursor-pointer">
                      <p className="text-[#231f23] text-[16px]">Sign in</p>
                    </button>
                    <Link to="/waitlist" className="bg-[#231f23] flex items-center justify-center px-5 py-3 rounded-lg cursor-pointer no-underline" onClick={() => setMobileMenuOpen(false)}>
                      <p className="text-[#f7f6f5] text-[16px]">Join the Waitlist</p>
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

const mobileDropdownItems: Record<string, { label: string; path: string }[]> = {
  Features: [
    { label: 'Style DNA', path: '/products/style-dna' },
    { label: 'Content Studio', path: '/products/content-studio' },
    { label: 'Brand Guard', path: '/products/brand-guard' },
    { label: 'Insights', path: '/products/insights' },
    { label: 'Smart Templates', path: '/products/smart-templates' },
  ],
};

function MobileNavItem({ link, onNavigate }: { link: { label: string; hasDropdown: boolean; path: string }; onNavigate: () => void }) {
  const [expanded, setExpanded] = useState(false);
  const subItems = link.hasDropdown ? mobileDropdownItems[link.label] : undefined;

  if (!link.hasDropdown) {
    return (
      <Link
        to={link.path}
        className="flex gap-1 items-center justify-between px-3 py-3 rounded-lg cursor-pointer hover:bg-[rgba(35,31,35,0.04)] transition-colors no-underline"
        onClick={onNavigate}
      >
        <p className="text-[#231f23] text-[16px]">{link.label}</p>
      </Link>
    );
  }

  return (
    <div className="flex flex-col">
      <button
        className="flex gap-1 items-center justify-between px-3 py-3 rounded-lg cursor-pointer hover:bg-[rgba(35,31,35,0.04)] transition-colors w-full"
        onClick={() => setExpanded(!expanded)}
      >
        <p className="text-[#231f23] text-[16px]">{link.label}</p>
        <motion.div
          animate={{ rotate: expanded ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown size={16} color="#231f23" />
        </motion.div>
      </button>
      <AnimatePresence>
        {expanded && subItems && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <div className="flex flex-col gap-0.5 pl-4 pb-2">
              {subItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  className="flex items-center px-3 py-2.5 rounded-lg hover:bg-[rgba(35,31,35,0.04)] transition-colors no-underline"
                  onClick={onNavigate}
                >
                  <p className="text-[rgba(35,31,35,0.72)] text-[15px]">{item.label}</p>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
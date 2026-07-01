import svgPaths from '../../imports/svg-j8kolrt8id';
import { AnimatedSection } from './AnimatedSection';
import { Link } from 'react-router-dom';

// DS dark lockup — the footer sits on the light Paper surface.
const logoDark = '/brand/socialpaint-dark.png';

function Logo() {
  return (
    <Link to="/" className="flex items-center shrink-0 no-underline">
      <img src={logoDark} alt="SocialPaint" className="h-[34px] sm:h-[40px] w-auto" />
    </Link>
  );
}

function FooterLinks() {
  const sections = [
    {
      title: 'Product',
      links: [
        { label: 'Style DNA', path: '/products/style-dna' },
        { label: 'Content Studio', path: '/products/content-studio' },
        { label: 'Brand Guard', path: '/products/brand-guard' },
        { label: 'Insights', path: '/products/insights' },
        { label: 'Smart Templates', path: '/products/smart-templates' },
        { label: 'Pricing', path: '/pricing' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'Clients', path: '/clients' },
        { label: 'Integrations', path: '/integrations' },
        { label: 'Resources', path: '/resources' },
      ],
    },
    {
      title: 'More',
      links: [
        { label: 'Join the Waitlist', path: '/waitlist' },
      ],
    },
  ];

  return (
    <div className="flex flex-col sm:flex-row gap-8 sm:gap-4 items-start">
      {sections.map((section) => (
        <div key={section.title} className="flex flex-col gap-4 sm:gap-5 items-start w-full sm:w-[216px]">
          <p className="text-[14px] leading-[1.5] text-[rgba(35,31,35,0.64)]" style={{ fontWeight: 300 }}>{section.title}</p>
          <div className="flex flex-col gap-3 sm:gap-2 items-start w-full">
            {section.links.map((link) => (
              <Link key={link.label} to={link.path} className="text-[#231f23] text-[14px] sm:text-[16px] hover:opacity-70 transition-opacity no-underline py-1 sm:py-0" style={{ fontWeight: 300 }}>{link.label}</Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function SocialIcons() {
  return (
    <div className="flex gap-4 items-start">
      {[svgPaths.p18a5c680, svgPaths.p297fd580, svgPaths.p3e2f20c0, svgPaths.p30336000].map((path, i) => (
        <a key={i} href="#" className="overflow-clip relative shrink-0 size-4 hover:opacity-70 transition-opacity">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
            <path d={path} fill="#231F23" fillRule={i === 1 ? 'evenodd' : undefined} clipRule={i === 1 ? 'evenodd' : undefined} />
          </svg>
        </a>
      ))}
    </div>
  );
}

export function Footer() {
  return (
    <AnimatedSection as="footer" className="flex flex-col items-start p-4 sm:p-8 w-full max-w-[1440px] mx-auto">
      <div className="bg-[#f7f6f5] relative rounded-[20px] shadow-[0px_4px_80px_0px_rgba(0,0,0,0.08)] w-full">
        <div className="flex flex-col items-start p-4 sm:p-6 w-full">
          <div className="flex flex-col gap-10 sm:gap-16 items-start w-full">
            {/* Top row */}
            <div className="flex flex-col sm:flex-row gap-8 sm:gap-0 items-start justify-between w-full">
              <Logo />
              <FooterLinks />
            </div>
            {/* Bottom row */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 items-start justify-between w-full">
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start text-[13px]" style={{ fontWeight: 300 }}>
                <p className="text-[rgba(35,31,35,0.64)]">&copy; 2026 SocialPaint Inc.</p>
                <div className="flex flex-wrap gap-4 h-full items-start text-[#231f23]">
                  <a href="#" className="hover:opacity-70 transition-opacity">Changelog</a>
                  <a href="#" className="hover:opacity-70 transition-opacity">Style Guide</a>
                  <a href="#" className="hover:opacity-70 transition-opacity">Privacy</a>
                  <a href="#" className="hover:opacity-70 transition-opacity">Terms</a>
                </div>
              </div>
              <SocialIcons />
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
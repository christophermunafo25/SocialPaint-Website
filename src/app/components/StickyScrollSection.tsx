import svgPaths from '../../imports/svg-j8kolrt8id';
import imgImg from 'figma:asset/13091f815c7b778bab882675d78ea67fe59acd53.png';
import imgGenerate from 'figma:asset/58841a6f0631fcf2e99f945d5345ce3a0a9f2272.png';
import { AnimatedItem } from './AnimatedSection';
import { Link } from 'react-router-dom';
import { ScanSearch } from 'lucide-react';

function ArrowIcon({ color = '#231F23' }: { color?: string }) {
  return (
    <div className="overflow-clip relative shrink-0 size-4">
      <div className="absolute inset-[20.83%]">
        <div className="absolute inset-[-8.04%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.8333 10.8333">
            <path d={svgPaths.p9a1b880} stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

interface FeaturePanelProps {
  tag: string;
  tagColor: string;
  iconPath?: string;
  icon?: React.ReactNode;
  title: React.ReactNode;
  description: string;
  buttonLabel: string;
  buttonPath: string;
}

function FeaturePanel({ tag, tagColor, iconPath, icon, title, description, buttonLabel, buttonPath }: FeaturePanelProps) {
  return (
    <div className="flex h-auto lg:h-screen items-center shrink-0 w-full lg:w-[560px]">
      <div className="flex flex-col gap-6 lg:gap-8 items-start w-full">
        {/* Tag with icon */}
        <div className="flex gap-3 items-center">
          <div className="flex items-center p-2 rounded-lg" style={{ backgroundColor: tagColor }}>
            {icon ? (
              <div className="shrink-0 size-4">{icon}</div>
            ) : (
              <div className="overflow-clip relative shrink-0 size-4">
                <div className="absolute inset-[8.33%]">
                  <div className="absolute inset-[-5.63%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.8333 14.8333">
                      <path d={iconPath} stroke="#231F23" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    </svg>
                  </div>
                </div>
              </div>
            )}
          </div>
          <p className="font-['Fragment_Mono',monospace] text-[#231f23] text-[12px] tracking-[0.75px] uppercase">{tag}</p>
        </div>
        {/* Text */}
        <div className="flex flex-col gap-4 lg:gap-5 items-start w-full">
          <p className="leading-[1.2] text-[#231f23] text-[28px] sm:text-[32px] lg:text-[40px] tracking-[-0.5px] w-full font-[Stack_Sans_Headline]" style={{ fontWeight: 400 }}>{title}</p>
          <p className="leading-[24px] text-[14px] sm:text-[16px] text-[rgba(35,31,35,0.64)] w-full" style={{ fontWeight: 300 }}>{description}</p>
        </div>
        {/* Button */}
        <Link to={buttonPath} className="backdrop-blur-[8px] bg-[rgba(35,31,35,0.08)] flex gap-2 items-center justify-center px-5 py-3 rounded-lg cursor-pointer no-underline">
          <p className="text-[#231f23] text-[14px] sm:text-[16px] whitespace-nowrap">{buttonLabel}</p>
          <ArrowIcon />
        </Link>
      </div>
    </div>
  );
}

function ChartCard() {
  return (
    <div className="bg-[#f7f6f5] flex flex-col h-[298px] items-start justify-center pt-2 px-2 rounded-[20px] shadow-[0px_4px_80px_0px_rgba(0,0,0,0.08)] w-full max-w-[384px]">
      <div className="bg-[#231f23] flex-1 relative rounded-xl w-full">
        <div aria-hidden="true" className="absolute border border-[rgba(247,246,245,0.08)] border-solid inset-0 pointer-events-none rounded-xl" />
        <div className="flex flex-col gap-4 items-start p-4 size-full">
          <p className="text-[#f7f6f5] text-[16px]" style={{ fontWeight: 300 }}>
            <span>37 </span>
            <span className="text-[rgba(247,246,245,0.48)]">brand assets</span>
          </p>
          {/* Chart area with lines */}
          <div className="flex-1 w-full relative">
            <div className="absolute inset-[20px_2px_8px_8px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 328 108.001">
                <path d={svgPaths.p2ae6a200} stroke="#FFED8C" strokeLinecap="round" strokeWidth="2" />
              </svg>
            </div>
            <div className="absolute inset-[18.5px_4px_12.94px_4.5px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 329.5 104.557">
                <path d={svgPaths.p3b482860} stroke="#ED7472" strokeLinecap="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
          {/* Legend */}
          <div className="flex gap-4 items-center">
            {[
              { color: '#ED7472', label: 'Instagram' },
              { color: '#FFC5B0', label: 'LinkedIn' },
              { color: 'rgba(247,246,245,0.08)', label: 'Twitter', border: true },
            ].map((item) => (
              <div key={item.label} className="flex gap-2 items-center">
                <svg width="12" height="12" fill="none" viewBox="0 0 12 12">
                  <circle cx="6" cy="6" r="6" fill={item.color} />
                  {item.border && <circle cx="6" cy="6" r="5.5" stroke="#F7F6F5" strokeOpacity="0.08" />}
                </svg>
                <p className="font-['Fragment_Mono',monospace] text-[#f7f6f5] text-[10px] tracking-[0.75px] uppercase">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-[#f7f6f5] rounded-xl w-full">
        <div className="p-4">
          <p className="text-[#231f23] text-[16px]" style={{ fontWeight: 400 }}>Content Performance</p>
        </div>
      </div>
    </div>
  );
}

function DataTableCard() {
  const files = [
    { name: 'Instagram Stories', status: 'GENERATED', statusColor: '#CDBCFF', detectedBy: 'Style DNA' },
    { name: 'LinkedIn Carousel', status: 'APPROVED', statusColor: '#A7FFAC', detectedBy: 'Brand Kit' },
    { name: 'Twitter Thread', status: 'IN REVIEW', statusColor: '#A6CEFF', detectedBy: 'Templates' },
    { name: 'Facebook Ad Set', status: 'APPROVED', statusColor: '#A7FFAC', detectedBy: 'Style DNA' },
  ];

  return (
    <div className="bg-white flex h-[272px] items-start overflow-clip rounded-[20px] w-full max-w-[486px]">
      {/* Name column */}
      <div className="flex-1 flex flex-col">
        <div className="bg-[#231f23] w-full border-b border-[rgba(247,246,245,0.08)]">
          <div className="flex items-center px-5 py-4">
            <p className="font-['Fragment_Mono',monospace] text-[12px] text-[rgba(247,246,245,0.64)] tracking-[0.75px] uppercase">Name</p>
          </div>
        </div>
        {files.map((f) => (
          <div key={f.name} className="w-full border-b border-[rgba(35,31,35,0.08)]">
            <div className="flex items-center px-5 py-4">
              <p className="text-[#231f23] text-[14px] sm:text-[16px] truncate" style={{ fontWeight: 400 }}>{f.name}</p>
            </div>
          </div>
        ))}
      </div>
      {/* Status column */}
      <div className="hidden sm:flex flex-col w-[146px] border-l border-[rgba(35,31,35,0.08)]">
        <div className="bg-[#231f23] w-full border-b border-[rgba(247,246,245,0.08)]">
          <div className="flex items-center px-5 py-4">
            <p className="font-['Fragment_Mono',monospace] text-[12px] text-[rgba(247,246,245,0.64)] tracking-[0.75px] uppercase">Status</p>
          </div>
        </div>
        {files.map((f) => (
          <div key={f.name + '-status'} className="w-full border-b border-[rgba(35,31,35,0.08)]">
            <div className="flex items-center px-5 py-4">
              <div className="flex gap-2 items-center px-2 py-1 rounded-lg" style={{ backgroundColor: f.statusColor }}>
                <p className="font-['Fragment_Mono',monospace] text-[#231f23] text-[12px] tracking-[0.75px] uppercase">{f.status}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function InsightsCard() {
  const insights = [
    { color: '#A7FFAC', title: 'Brand consistency', desc: 'All generated content matches your Style DNA within 98% accuracy.', iconPath: svgPaths.p1493b180 },
    { color: '#FFED8C', title: 'Template optimization', desc: '12 templates updated based on latest performance data.', iconPath: svgPaths.p283d8200 },
    { color: '#CDBCFF', title: 'Engagement spikes', desc: 'Tuesday 9AM posts see 3.2x more engagement than average.', iconPath: svgPaths.p1dfd3d80 },
  ];

  return (
    <div className="bg-[#f7f6f5] flex flex-col items-start justify-center pt-2 px-2 rounded-[20px] w-full max-w-[524px]">
      <div className="bg-[#231f23] relative rounded-xl w-full">
        <div className="flex flex-col gap-6 items-start p-4 sm:p-6 w-full">
          {insights.map((item) => (
            <div key={item.title} className="flex gap-3 items-center w-full">
              <div className="flex items-center p-3 rounded-xl shrink-0" style={{ backgroundColor: item.color }}>
                <div className="overflow-clip relative shrink-0 size-6">
                  <div className="absolute inset-[16.67%]">
                    <div className="absolute inset-[-4.69%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5 17.5">
                        <path d={item.iconPath} stroke="#231F23" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col gap-1">
                <p className="text-[#f7f6f5] text-[16px]" style={{ fontWeight: 300 }}>{item.title}</p>
                <p className="text-[13px] text-[rgba(247,246,245,0.64)]" style={{ fontWeight: 300 }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="rounded-xl w-full">
        <div className="px-2 py-4">
          <p className="text-[#231f23] text-[16px]" style={{ fontWeight: 400 }}>AI-powered insights</p>
        </div>
      </div>
    </div>
  );
}

const NOISE_SVG = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`;

// Mobile feature card (stacked layout for small screens)
function MobileFeatureCard({ feature, image, gradient }: { feature: FeaturePanelProps; image: string | null; gradient: string | null }) {
  return (
    <AnimatedItem className="flex flex-col gap-8 items-start w-full">
      <FeaturePanel {...feature} />
      <div className="flex flex-col items-center justify-center relative rounded-[20px] w-full aspect-square max-h-[500px]">
        {image ? (
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[20px] size-full" src={image} />
        ) : gradient ? (
          <>
            <div className="absolute inset-0 rounded-[20px] size-full" style={{ background: gradient }} />
            <div className="absolute inset-0 rounded-[20px] size-full opacity-[0.35] mix-blend-overlay pointer-events-none" style={{ backgroundImage: NOISE_SVG, backgroundRepeat: 'repeat' }} />
          </>
        ) : null}
      </div>
    </AnimatedItem>
  );
}

export function StickyScrollSection() {
  const features: FeaturePanelProps[] = [
    {
      tag: 'Analyze',
      tagColor: '#A6CEFF',
      iconPath: svgPaths.p7050450,
      icon: <ScanSearch size={16} strokeWidth={1.5} color="#231F23" />,
      title: <>Your brand, <span className="accent-italic">down to the pixel</span></>,
      description: 'Socialpaint connects to your marketing team\'s favorite design systems and learns your brand from the source. Spacing, colors, typography and more!',
      buttonLabel: 'Explore How',
      buttonPath: '/products/style-dna',
    },
    {
      tag: 'Store',
      tagColor: '#A7FFAC',
      iconPath: svgPaths.p2d65aec0,
      title: <>Turn creative decisions into <span className="accent-italic">brand intelligence</span></>,
      description: 'Socialpaint stores the patterns behind your team\'s work, from layout and spacing to messaging and visual style, so the brand knowledge your designers use every day becomes structured data anyone in the company can build from.',
      buttonLabel: 'See Generation',
      buttonPath: '/products/content-studio',
    },
    {
      tag: 'Scale',
      tagColor: '#FFC5B0',
      iconPath: svgPaths.p27db1580,
      title: <>Give every team the power to <span className="accent-italic">create on-brand</span></>,
      description: 'Instead of waiting in line for new assets, teams can generate what they need on demand with Socialpaint, using the brand logic and creative decisions your marketing team has already put in place.',
      buttonLabel: 'Explore Analytics',
      buttonPath: '/products/insights',
    },
  ];

  const images: (string | null)[] = [imgImg, imgGenerate, null];
  const gradients: (string | null)[] = [
    null,
    null,
    [
      'radial-gradient(circle 600px at 15% 20%, rgba(249,115,22,0.5) 0%, transparent 100%)',
      'radial-gradient(circle 500px at 80% 10%, rgba(251,146,60,0.45) 0%, transparent 100%)',
      'radial-gradient(circle 550px at 55% 85%, rgba(244,114,182,0.4) 0%, transparent 100%)',
      'radial-gradient(circle 450px at 90% 55%, rgba(251,191,36,0.45) 0%, transparent 100%)',
      'radial-gradient(circle 500px at 30% 65%, rgba(225,29,72,0.3) 0%, transparent 100%)',
      'radial-gradient(circle 900px at 50% 50%, #fef3c7 0%, #fff7ed 100%)',
    ].join(', '),
  ];

  return (
    <section className="bg-[#f7f6f5] flex flex-col items-start w-full max-w-[1440px] mx-auto z-[8] px-4 sm:px-8 pt-[0px] pb-[0px]">
      {/* Desktop: sticky scroll layout */}
      <div className="hidden lg:flex items-start justify-between w-full -my-[15vh]">
        {/* Left: stacked feature panels */}
        <div className="flex flex-col items-start justify-center">
          {features.map((f, i) => (
            <AnimatedItem key={i}>
              <FeaturePanel {...f} />
            </AnimatedItem>
          ))}
        </div>
        {/* Right: sticky images */}
        <div className="flex flex-col items-center justify-center overflow-clip">
          {images.map((img, i) => (
            <div key={i} className="flex h-screen items-center justify-center shrink-0 sticky top-0" style={{ zIndex: i + 1 }}>
              <div className="flex flex-col items-center justify-center relative rounded-[20px] size-[520px]">
                {img ? (
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[20px] size-full" src={img} />
                ) : (
                  <>
                    <div className="absolute inset-0 rounded-[20px] size-full" style={{ background: gradients[i] ?? undefined }} />
                    <div className="absolute inset-0 rounded-[20px] size-full opacity-[0.35] mix-blend-overlay pointer-events-none" style={{ backgroundImage: NOISE_SVG, backgroundRepeat: 'repeat' }} />
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile: stacked layout */}
      <div className="flex lg:hidden flex-col gap-16 sm:gap-20 items-start w-full">
        {features.map((f, i) => (
          <MobileFeatureCard key={i} feature={f} image={images[i]} gradient={gradients[i]} />
        ))}
      </div>
    </section>
  );
}
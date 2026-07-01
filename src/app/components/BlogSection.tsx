import svgPaths from '../../imports/svg-j8kolrt8id';
import imgCollaborativeDiscussion21 from 'figma:asset/c814e50549a67b661f4e929c0acc54953568de66.png';
import imgCollaborativeDiscussion22 from 'figma:asset/25091a1ba00ad07b8146a3b0055481ac9f3c6987.png';
import { AnimatedSection, AnimatedItem } from './AnimatedSection';
import { useRef, useCallback } from 'react';

interface BlogArticle {
  tagLabel: string;
  tagColor: string;
  title: string;
  date: string;
  image: string;
}

function ArticleCard({ article }: { article: BlogArticle }) {
  return (
    <div className="bg-[#ececec] flex flex-col sm:flex-row gap-4 sm:gap-8 h-auto sm:h-[360px] items-start overflow-clip p-4 rounded-[20px] shrink-0 w-full sm:w-[680px] cursor-pointer hover:opacity-90 transition-opacity">
      <div className="h-[200px] sm:h-full relative rounded-xl shrink-0 w-full sm:w-[300px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-xl size-full" src={article.image} />
      </div>
      <div className="flex-1 h-full">
        <div className="flex flex-col items-start justify-between py-2 sm:py-4 size-full gap-4">
          <div className="flex flex-col gap-3 sm:gap-4 items-start w-full">
            <div className="flex gap-2 items-center px-2 py-1 rounded-lg" style={{ backgroundColor: article.tagColor }}>
              <p className="font-['Fragment_Mono',monospace] text-[#231f23] text-[12px] tracking-[0.75px] uppercase">{article.tagLabel}</p>
            </div>
            <p className="leading-[28px] sm:leading-[32px] text-[#231f23] text-[20px] sm:text-[24px] font-[Stack_Sans_Headline]" style={{ fontWeight: 400 }}>{article.title}</p>
          </div>
          <p className="text-[13px] text-[rgba(35,31,35,0.64)]" style={{ fontWeight: 300 }}>{article.date}</p>
        </div>
      </div>
    </div>
  );
}

export function BlogSection() {
  const articles: BlogArticle[] = [
    {
      tagLabel: 'News',
      tagColor: '#FFED8C',
      title: 'SocialPaint now generates platform-optimized content automatically',
      date: 'March 1, 2026',
      image: imgCollaborativeDiscussion21,
    },
    {
      tagLabel: 'Blog',
      tagColor: '#A7FFAC',
      title: 'The 5 brand consistency mistakes killing your social engagement',
      date: 'February 18, 2026',
      image: imgCollaborativeDiscussion22,
    },
    {
      tagLabel: 'Blog',
      tagColor: '#A7FFAC',
      title: 'How to scale content production without losing brand quality',
      date: 'February 4, 2026',
      image: imgCollaborativeDiscussion22,
    },
  ];

  return (
    <section className="bg-[#f7f6f5] flex flex-col gap-12 sm:gap-16 lg:gap-20 items-start overflow-clip px-4 sm:px-8 py-16 sm:py-20 lg:py-[120px] w-full max-w-[1440px] mx-auto z-[3]">
      {/* Header */}
      <AnimatedSection className="flex flex-col gap-6 sm:gap-8 items-start w-full max-w-[1440px]">
        <div className="flex gap-2 items-center px-3 py-2 rounded-lg relative">
          <div aria-hidden="true" className="absolute border border-[rgba(35,31,35,0.08)] border-solid inset-0 pointer-events-none rounded-lg" />
          <div className="bg-[#ed7472] rounded-[2px] shrink-0 size-[10px]" />
          <p className="font-['Fragment_Mono',monospace] text-[#231f23] text-[12px] tracking-[0.75px] uppercase">Blog & News</p>
        </div>
        <p className="leading-[1.15] text-[#231f23] text-[28px] sm:text-[40px] lg:text-[48px] tracking-[-0.5px] font-[Stack_Sans_Headline]" style={{ fontWeight: 400 }}>
          Quick reads that sharpen your <span className="accent-italic">content instincts</span>
        </p>
      </AnimatedSection>

      {/* Articles + Arrows */}
      <div className="flex flex-col gap-8 sm:gap-12 items-start w-full">
        <ArticleCarousel articles={articles} />
      </div>
    </section>
  );
}

function ArticleCarousel({ articles }: { articles: BlogArticle[] }) {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = useCallback((direction: 'prev' | 'next') => {
    if (!carouselRef.current) return;
    const cardWidth = carouselRef.current.querySelector(':scope > div')?.getBoundingClientRect().width ?? 680;
    const gap = 16;
    const scrollAmount = cardWidth + gap;
    carouselRef.current.scrollBy({
      left: direction === 'next' ? scrollAmount : -scrollAmount,
      behavior: 'smooth',
    });
  }, []);

  return (
    <>
      <div
        ref={carouselRef}
        className="flex flex-col sm:flex-row gap-4 items-start w-full overflow-hidden"
      >
        {articles.map((article, i) => (
          <AnimatedItem key={i} delay={i * 0.1}>
            <ArticleCard article={article} />
          </AnimatedItem>
        ))}
      </div>
      <div className="hidden sm:flex gap-3 items-start">
        {[
          { path: svgPaths.p3e5b4640, dir: 'prev' as const },
          { path: svgPaths.p3712abc0, dir: 'next' as const },
        ].map((btn) => (
          <button
            key={btn.dir}
            onClick={() => scroll(btn.dir)}
            className="backdrop-blur-[8px] bg-[rgba(35,31,35,0.08)] flex items-center justify-center p-3 rounded-full cursor-pointer"
          >
            <div className="overflow-clip relative shrink-0 size-5">
              <div className="absolute inset-[20.83%]">
                <div className="absolute inset-[-6.43%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.1667 13.1667">
                    <path d={btn.path} stroke="#231F23" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>
    </>
  );
}
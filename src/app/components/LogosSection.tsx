export function LogosSection() {
  const logos = [
    'Acme Corp',
    'Globex',
    'Initech',
    'Umbrella',
    'Hooli',
    'Massive Dynamic',
    'Soylent',
    'Waystar',
    'Pied Piper',
    'Vehement',
    'Aperture',
    'Stark Industries',
  ];

  return (
    <section className="bg-[#f7f6f5] w-full max-w-[1440px] mx-auto overflow-clip py-10 sm:py-14 lg:py-16">
      {/* Fade edges */}
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-[#f7f6f5] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-[#f7f6f5] to-transparent z-10" />

        {/* Scrolling track */}
        <div className="flex animate-[marquee_60s_linear_infinite]" style={{ width: 'max-content' }}>
          {[...logos, ...logos].map((name, i) => (
            <div
              key={`${name}-${i}`}
              className="flex items-center justify-center shrink-0 mx-6 sm:mx-10 lg:mx-12"
            >
              <div className="flex items-center gap-2.5 opacity-40 hover:opacity-60 transition-opacity duration-300">
                <div className="rounded-md bg-[#d4d2d0] size-7 sm:size-8" />
                <p className="text-[#231f23] text-[14px] sm:text-[16px] whitespace-nowrap tracking-[-0.2px]" style={{ fontWeight: 400 }}>
                  {name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
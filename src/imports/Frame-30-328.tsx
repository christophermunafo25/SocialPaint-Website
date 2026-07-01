import svgPaths from "./svg-0zw92d4ha0";
import imgFrame from "figma:asset/7318a8000db1b14cbcddea7f72bc0da323b72782.png";

export default function Frame() {
  return (
    <div className="overflow-clip relative rounded-[20px] size-full" data-name="Frame">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[20px] size-full" src={imgFrame} />
      <p className="-translate-x-1/2 absolute font-['Stack_Sans_Headline:Medium',sans-serif] font-medium leading-[normal] left-1/2 text-[40px] text-center text-white top-[165px] tracking-[-0.8px] whitespace-nowrap">straight from the source.</p>
      <div className="-translate-x-1/2 absolute bottom-[-51.68%] left-[calc(50%-51.5px)] top-[-59.78%] w-[757px]" data-name="Vector">
        <div className="absolute inset-[-5.28%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 837 837">
            <g filter="url(#filter0_f_30_332)" id="Vector">
              <path d={svgPaths.p2d11a340} stroke="var(--stroke-0, white)" strokeOpacity="0.35" strokeWidth="30" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="837" id="filter0_f_30_332" width="837" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_30_332" stdDeviation="12.5" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}
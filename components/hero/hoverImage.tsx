import Image from 'next/image';

type HoverImageWordProps = {
  label: string;
  icon?: string;
  previewSrc: string;
  isStyle?: boolean;
  previewAlt?: string;
  customDesign?: boolean;
};

export default function HoverImageWord({
  label,
  icon,
  previewSrc,
  isStyle = false,
  customDesign = false,
  previewAlt = ''
}: HoverImageWordProps) {
  return (
    <span
      className={`group/pic text-text-highlight relative inline-block cursor-pointer font-medium whitespace-nowrap ${
        // This checks if there's no icon just remove margin left, otherwise continue with isStyle condition.
        !icon ? 'ml-0' : isStyle ? 'ml-0.5' : 'ml-1'
      }`}
    >
      {icon && (
        <Image
          src={icon}
          width={18}
          height={18}
          alt=""
          className="mr-[3.5px] inline-block align-[-3px]"
        />
      )}
      {label}
      <span className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2.5 w-40 -translate-x-1/2 translate-y-1.5 overflow-hidden rounded-xl border border-white/20 bg-[#232729] opacity-0 shadow-lg transition-all duration-200 group-hover/pic:translate-y-0 group-hover/pic:opacity-100">
        <Image
          src={previewSrc}
          width={320}
          height={200}
          alt={previewAlt}
          className="block h-25 w-full object-cover"
        />
      </span>
      <span
        className={`absolute right-0 bottom-0 left-0 h-px origin-left scale-x-0 bg-white/60 transition-transform duration-300 group-hover/pic:scale-x-100 ${
          customDesign ? 'bottom-0.5' : 'bottom-0'
        }`}
      />
    </span>
  );
}

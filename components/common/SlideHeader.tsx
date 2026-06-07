interface SlideHeaderProps {
  title: string;
  subtitle?: string;
}

export function SlideHeader({ title, subtitle }: SlideHeaderProps) {
  return (
    <div className="mb-4 md:mb-8 lg:mb-10">
      <div className="mb-3 flex items-start gap-2 md:mb-4 md:items-center md:gap-4">
        <div className="mt-2 h-1 w-8 shrink-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 md:mt-0 md:w-12" />
        <h2 className="text-lg font-black leading-tight tracking-tight text-cyan-300 drop-shadow-lg sm:text-2xl md:text-3xl lg:text-5xl">
          {title}
        </h2>
      </div>
      <div className="mb-4 h-1 w-16 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-transparent md:mb-6 md:w-24" />
      {subtitle && (
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-gray-400 md:mt-4 md:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}

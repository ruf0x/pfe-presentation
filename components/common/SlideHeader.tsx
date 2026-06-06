interface SlideHeaderProps {
  title: string;
  subtitle?: string;
}

export function SlideHeader({ title, subtitle }: SlideHeaderProps) {
  return (
    <div className="mb-10">
      <div className="flex items-center gap-4 mb-4">
        <div className="h-1 w-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
        <h2 className="text-5xl font-black text-cyan-300 tracking-tight drop-shadow-lg">
          {title}
        </h2>
      </div>
      <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 via-blue-500 to-transparent rounded-full mb-6"></div>
      {subtitle && (
        <p className="text-gray-400 mt-4 text-lg leading-relaxed max-w-3xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}

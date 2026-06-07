import { SlideHeader } from '@/components/common';

interface TitleSlideProps {
  title: string;
  presenter: string;
  specialty: string;
  supervisor: string;
}

export function TitleSlide({ title, presenter, specialty, supervisor }: TitleSlideProps) {
  return (
    <div className="flex h-full flex-col items-center justify-center space-y-6 px-2 text-center sm:space-y-10 md:space-y-12">
      <div className="space-y-4 sm:space-y-6">
        <div className="inline-block">
          <div className="mx-auto mb-4 h-1 w-16 bg-gradient-to-r from-transparent via-cyan-400 to-transparent sm:mb-6 sm:w-20" />
        </div>
        <h1 className="bg-gradient-to-r from-cyan-300 via-blue-300 to-cyan-300 bg-clip-text text-2xl font-black leading-tight text-transparent drop-shadow-lg sm:text-4xl md:text-5xl lg:text-6xl">
          {title}
        </h1>
        <div className="mx-auto h-1 w-16 bg-gradient-to-r from-transparent via-cyan-400 to-transparent sm:w-20" />
      </div>
      
      <div className="w-full max-w-2xl border-t border-b border-cyan-400/30 px-4 py-5 sm:px-8 sm:py-8 md:px-12">
        <div className="space-y-3 sm:space-y-5">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
            <span className="text-sm text-gray-300 sm:text-base">
              <span className="font-bold text-cyan-300">Presented by:</span> {presenter}
            </span>
            <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            <div className="h-2 w-2 rounded-full bg-cyan-400" />
            <span className="text-sm text-gray-300 sm:text-base">
              <span className="font-bold text-cyan-300">Specialty:</span> {specialty}
            </span>
            <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            <div className="h-2 w-2 rounded-full bg-cyan-400" />
            <span className="text-sm text-gray-300 sm:text-base">
              <span className="font-bold text-cyan-300">Supervised by:</span> {supervisor}
            </span>
            <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

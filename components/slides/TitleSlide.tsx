import { SlideHeader } from '@/components/common';

interface TitleSlideProps {
  title: string;
  presenter: string;
  specialty: string;
  supervisor: string;
}

export function TitleSlide({ title, presenter, specialty, supervisor }: TitleSlideProps) {
  return (
    <div className="flex flex-col justify-center items-center text-center h-full space-y-12">
      <div className="space-y-6">
        <div className="inline-block">
          <div className="h-1 w-20 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto mb-6"></div>
        </div>
        <h1 className="text-6xl font-black text-transparent bg-clip-text 
          bg-gradient-to-r from-cyan-300 via-blue-300 to-cyan-300 leading-tight drop-shadow-lg">
          {title}
        </h1>
        <div className="h-1 w-20 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto"></div>
      </div>
      
      <div className="border-t border-cyan-400/30 border-b border-cyan-400/30 py-8 px-12 w-full max-w-2xl">
        <div className="space-y-5">
          <div className="flex items-center justify-center gap-3">
            <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
            <span className="text-gray-300">
              <span className="text-cyan-300 font-bold">Presented by:</span> {presenter}
            </span>
            <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
          </div>
          <div className="flex items-center justify-center gap-3">
            <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
            <span className="text-gray-300">
              <span className="text-cyan-300 font-bold">Specialty:</span> {specialty}
            </span>
            <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
          </div>
          <div className="flex items-center justify-center gap-3">
            <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
            <span className="text-gray-300">
              <span className="text-cyan-300 font-bold">Supervised by:</span> {supervisor}
            </span>
            <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

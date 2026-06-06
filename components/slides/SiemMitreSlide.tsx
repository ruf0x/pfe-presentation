import { SlideHeader, BulletList } from '@/components/common';

interface DefinitionSection {
  title: string;
  desc: string;
  points: { label: string; description: string }[];
}

interface SiemMitreSlideProps {
  title: string;
  siem: DefinitionSection;
  mitre: DefinitionSection;
}

export function SiemMitreSlide({ title, siem, mitre }: SiemMitreSlideProps) {
  return (
    <div className="w-full flex flex-col h-full justify-between">
      <SlideHeader title={title} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-auto">
        {/* SIEM Definition */}
        <div className="group relative p-6 rounded-xl transition-all duration-300
          bg-gradient-to-br from-cyan-500/10 to-blue-500/10 
          border border-cyan-400/30 hover:border-cyan-400/60
          hover:shadow-lg hover:shadow-cyan-500/20 hover:scale-[1.02]
          backdrop-blur-sm">
          <div className="absolute top-0 left-0 h-1 w-0 bg-gradient-to-r from-cyan-400 to-blue-500 
            group-hover:w-full rounded-t-xl transition-all duration-300"></div>
          
          <h3 className="text-2xl font-bold text-cyan-300 mb-3 group-hover:text-cyan-200 transition-colors">
            {siem.title}
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            {siem.desc}
          </p>
          <div className="mt-4">
            <BulletList items={siem.points} />
          </div>
        </div>

        {/* MITRE ATT&CK Definition */}
        <div className="group relative p-6 rounded-xl transition-all duration-300
          bg-gradient-to-br from-cyan-500/10 to-blue-500/10 
          border border-cyan-400/30 hover:border-cyan-400/60
          hover:shadow-lg hover:shadow-cyan-500/20 hover:scale-[1.02]
          backdrop-blur-sm">
          <div className="absolute top-0 left-0 h-1 w-0 bg-gradient-to-r from-cyan-400 to-blue-500 
            group-hover:w-full rounded-t-xl transition-all duration-300"></div>

          <h3 className="text-2xl font-bold text-cyan-300 mb-3 group-hover:text-cyan-200 transition-colors">
            {mitre.title}
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            {mitre.desc}
          </p>
          <div className="mt-4">
            <BulletList items={mitre.points} />
          </div>
        </div>
      </div>
    </div>
  );
}

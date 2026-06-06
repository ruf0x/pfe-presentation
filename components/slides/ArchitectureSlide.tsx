import { SlideHeader } from '@/components/common';

interface Stage {
  title: string;
  content: string;
}

interface ArchitectureSlideProps {
  title: string;
  stages: Stage[];
  features: string[];
}

export function ArchitectureSlide({ title, stages, features }: ArchitectureSlideProps) {
  return (
    <div>
      <SlideHeader title={title} />
      <div className="space-y-4 mb-8">
        {stages.map((stage, i) => (
          <div key={i} className="bg-red-400 bg-opacity-10 p-4 rounded-lg border-l-4 border-red-400">
            <h4 className="text-lg font-bold text-red-400 mb-2">{stage.title}</h4>
            <p className="text-gray-300 text-sm">{stage.content}</p>
          </div>
        ))}
      </div>
      <h3 className="text-2xl font-bold text-cyan-400 mb-4">Key Features</h3>
      <ul className="space-y-2">
        {features.map((f, i) => (
          <li key={i} className="text-gray-300 flex items-start">
            <span className="text-cyan-400 mr-3 font-bold">▸</span>
            <span>{f}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

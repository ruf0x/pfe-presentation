import { SlideHeader, ContentCard } from '@/components/common';

interface ApproachItem {
  title: string;
  desc: string;
}

interface HyperParam {
  param: string;
  value: string;
}

interface FinetuningSlideProps {
  title: string;
  approach: {
    title: string;
    items: ApproachItem[];
  };
  hyperparameters: {
    hardware: HyperParam[];
    training: HyperParam[];
  };
}

export function FinetuningSlide({ 
  title, 
  approach, 
  hyperparameters 
}: FinetuningSlideProps) {
  return (
    <div>
      <SlideHeader title={title} />
      <h3 className="text-2xl font-bold text-cyan-400 mb-4">{approach.title}</h3>
      <div className="grid grid-cols-2 gap-4 mb-8">
        {approach.items.map((item, i) => (
          <ContentCard key={i} title={item.title} description={item.desc} />
        ))}
      </div>

      <h3 className="text-2xl font-bold text-cyan-400 mb-4">Hardware & Hyperparameters</h3>
      <div className="grid grid-cols-2 gap-8">
        <div>
          <h4 className="text-lg font-bold text-cyan-400 mb-3">Hardware</h4>
          <div className="space-y-2">
            {hyperparameters.hardware.map((h, i) => (
              <div key={i} className="flex justify-between text-gray-300 text-sm">
                <span className="font-semibold">{h.param}:</span>
                <span>{h.value}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-lg font-bold text-cyan-400 mb-3">Training</h4>
          <div className="space-y-2">
            {hyperparameters.training.map((t, i) => (
              <div key={i} className="flex justify-between text-gray-300 text-sm">
                <span className="font-semibold">{t.param}:</span>
                <span>{t.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

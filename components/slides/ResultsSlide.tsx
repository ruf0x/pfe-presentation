import { SlideHeader, StatBox } from '@/components/common';

interface Metric {
  metric: string;
  label: string;
}

interface ResultsSlideProps {
  title: string;
  stage1: Metric[];
  stage2: Metric[];
}

export function ResultsSlide({ title, stage1, stage2 }: ResultsSlideProps) {
  return (
    <div>
      <SlideHeader title={title} />
      <h3 className="text-2xl font-bold text-cyan-400 mb-4">Stage 1: Binary Classifier</h3>
      <div className="grid grid-cols-3 gap-4 mb-8">
        {stage1.map((item, i) => (
          <StatBox key={i} number={item.metric} label={item.label} />
        ))}
      </div>

      <h3 className="text-2xl font-bold text-cyan-400 mb-4">Stage 2 & Pipeline Impact</h3>
      <div className="grid grid-cols-2 gap-4">
        {stage2.map((item, i) => (
          <StatBox key={i} number={item.metric} label={item.label} />
        ))}
      </div>
    </div>
  );
}

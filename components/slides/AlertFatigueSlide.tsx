import { SlideHeader, ContentCard, StatBox, Quote } from '@/components/common';

interface AlertItem {
  title: string;
  desc: string;
}

interface AlertFatigueSlideProps {
  title: string;
  items: AlertItem[];
  stat: { number: string; label: string };
  conclusion: string;
}

export function AlertFatigueSlide({ title, items, stat, conclusion }: AlertFatigueSlideProps) {
  return (
    <div>
      <SlideHeader title={title} />
      <div className="grid grid-cols-2 gap-6 mb-8">
        {items.map((item, i) => (
          <ContentCard key={i} title={item.title} description={item.desc} />
        ))}
      </div>
      <div className="flex justify-center mb-8">
        <StatBox number={stat.number} label={stat.label} variant="highlight" />
      </div>
      <h3 className="text-2xl font-bold text-cyan-400 mb-3 mt-8">Critical Consequences</h3>
      <p className="text-lg text-gray-300">{conclusion}</p>
    </div>
  );
}

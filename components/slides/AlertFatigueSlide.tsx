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
      <div className="mb-6 grid grid-cols-1 gap-4 sm:mb-8 md:grid-cols-2 md:gap-6">
        {items.map((item, i) => (
          <ContentCard key={i} title={item.title} description={item.desc} />
        ))}
      </div>
      <div className="flex justify-center mb-8">
        <StatBox number={stat.number} label={stat.label} variant="highlight" />
      </div>
      <h3 className="mb-3 mt-6 text-lg font-bold text-cyan-400 sm:mt-8 sm:text-2xl">Critical Consequences</h3>
      <p className="text-sm text-gray-300 sm:text-lg">{conclusion}</p>
    </div>
  );
}

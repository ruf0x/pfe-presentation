import { SlideHeader, ContentCard, Quote } from '@/components/common';

interface StateItem {
  num: string;
  title: string;
  desc: string;
  highlight?: boolean;
}

interface StateOfArtSlideProps {
  title: string;
  items: StateItem[];
  quote: string;
}

export function StateOfArtSlide({ title, items, quote }: StateOfArtSlideProps) {
  return (
    <div>
      <SlideHeader title={title} />
      <div className="grid grid-cols-2 gap-4 mb-8">
        {items.map((item, i) => (
          <ContentCard
            key={i}
            title={`${item.num}. ${item.title}`}
            description={item.desc}
            highlight={item.highlight}
          />
        ))}
      </div>
      <Quote text={quote} />
    </div>
  );
}

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
      <div className="mb-6 grid grid-cols-1 gap-4 sm:mb-8 md:grid-cols-2">
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

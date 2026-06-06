import { SlideHeader, ContentCard } from '@/components/common';

interface ObjectiveItem {
  icon: string;
  title: string;
  desc: string;
}

interface ObjectivesSlideProps {
  title: string;
  items: ObjectiveItem[];
}

export function ObjectivesSlide({ title, items }: ObjectivesSlideProps) {
  return (
    <div>
      <SlideHeader title={title} />
      <div className="space-y-4">
        {items.map((item, i) => (
          <ContentCard 
            key={i} 
            icon={item.icon}
            title={item.title} 
            description={item.desc} 
          />
        ))}
      </div>
    </div>
  );
}

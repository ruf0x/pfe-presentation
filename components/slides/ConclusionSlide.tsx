import { SlideHeader, Quote, BulletList } from '@/components/common';

interface ContributionItem {
  title: string;
  desc: string;
}

interface FutureItem {
  title: string;
  desc: string;
}

interface ConclusionSlideProps {
  title: string;
  contributions: ContributionItem[];
  futures: FutureItem[];
  quote: string;
}

export function ConclusionSlide({ 
  title, 
  contributions, 
  futures, 
  quote 
}: ConclusionSlideProps) {
  const contributionItems = contributions.map(item => ({
    label: item.title,
    description: item.desc
  }));

  const futureItems = futures.map(item => ({
    label: item.title,
    description: item.desc
  }));

  return (
    <div>
      <SlideHeader title={title} />

      <h3 className="text-2xl font-bold text-cyan-400 mb-4">Key Contributions</h3>
      <ul className="space-y-3 mb-8">
        {contributionItems.map((item, i) => (
          <li key={i} className="text-gray-300 flex items-start">
            <span className="text-cyan-400 mr-3 font-bold">▸</span>
            <span>
              <strong className="text-cyan-400">{item.label}:</strong> {item.description}
            </span>
          </li>
        ))}
      </ul>

      <h3 className="text-2xl font-bold text-cyan-400 mb-4">Future Perspectives</h3>
      <ul className="space-y-3 mb-8">
        {futureItems.map((item, i) => (
          <li key={i} className="text-gray-300 flex items-start">
            <span className="text-cyan-400 mr-3 font-bold">▸</span>
            <span>
              <strong className="text-cyan-400">{item.label}:</strong> {item.description}
            </span>
          </li>
        ))}
      </ul>

      <Quote text={quote} />
    </div>
  );
}

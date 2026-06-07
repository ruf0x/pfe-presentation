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

      <h3 className="mb-3 text-lg font-bold text-cyan-400 sm:mb-4 sm:text-2xl">Key Contributions</h3>
      <ul className="mb-6 space-y-2 sm:mb-8 sm:space-y-3">
        {contributionItems.map((item, i) => (
          <li key={i} className="flex items-start text-sm text-gray-300 sm:text-base">
            <span className="text-cyan-400 mr-3 font-bold">▸</span>
            <span>
              <strong className="text-cyan-400">{item.label}:</strong> {item.description}
            </span>
          </li>
        ))}
      </ul>

      <h3 className="mb-3 text-lg font-bold text-cyan-400 sm:mb-4 sm:text-2xl">Future Perspectives</h3>
      <ul className="mb-6 space-y-2 sm:mb-8 sm:space-y-3">
        {futureItems.map((item, i) => (
          <li key={i} className="flex items-start text-sm text-gray-300 sm:text-base">
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

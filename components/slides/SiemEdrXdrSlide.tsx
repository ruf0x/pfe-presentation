import { SlideHeader } from '@/components/common';

interface DefinitionCard {
  term: string;
  def: string;
}

interface SiemEdrXdrSlideProps {
  title: string;
  definitions: DefinitionCard[];
}

export function SiemEdrXdrSlide({ title, definitions }: SiemEdrXdrSlideProps) {
  return (
    <div className="flex h-full w-full flex-col justify-between">
      <SlideHeader title={title} />
      <div className="flex flex-col gap-3 my-auto">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          {definitions.map((card) => (
            <div
              key={card.term}
              className="rounded-xl border border-cyan-400/20 bg-slate-900/60 p-4 transition-colors hover:border-cyan-400/40"
            >
              <h3 className="mb-2 text-lg font-bold text-cyan-300">{card.term}</h3>
              <p className="text-sm leading-relaxed text-gray-300">{card.def}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

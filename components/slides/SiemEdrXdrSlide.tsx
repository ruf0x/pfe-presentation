import { SlideHeader } from '@/components/common';

interface DefinitionCard {
  term: string;
  def: string;
}

interface ComparisonRow {
  technology: string;
  purpose: string;
  scope: string;
  action: string;
}

interface SiemEdrXdrSlideProps {
  title: string;
  definitions: DefinitionCard[];
  comparisonRows: ComparisonRow[];
}

export function SiemEdrXdrSlide({ title, definitions, comparisonRows }: SiemEdrXdrSlideProps) {
  return (
    <div className="flex h-full w-full flex-col justify-between">
      <SlideHeader title={title} />
      <div className="flex flex-col gap-6 my-auto">
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

        <div className="rounded-xl border border-cyan-400/20 bg-slate-900/40 p-4">
          <h3 className="mb-3 text-base font-bold text-cyan-400">vs. Firewall & IDS/IPS</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-cyan-400/20 text-gray-400">
                  <th className="pb-2 pr-3 font-semibold">Technology</th>
                  <th className="pb-2 pr-3 font-semibold">Purpose</th>
                  <th className="pb-2 pr-3 font-semibold">Scope</th>
                  <th className="pb-2 font-semibold">Response</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.technology} className="border-b border-slate-700/50 last:border-0">
                    <td className="py-2 pr-3 font-bold text-cyan-200">{row.technology}</td>
                    <td className="py-2 pr-3 text-gray-300">{row.purpose}</td>
                    <td className="py-2 pr-3 text-gray-300">{row.scope}</td>
                    <td className="py-2 text-gray-300">{row.action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

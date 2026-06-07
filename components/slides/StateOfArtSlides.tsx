import { BrainCircuit, Check, Database, GitCompare, Layers, SearchCheck, X } from 'lucide-react';
import { DataTable, SlideHeader } from '@/components/common';

interface Paradigm {
  num: string;
  title: string;
  desc: string;
}

interface DatasetColumn {
  title: string;
  meta: string;
  points: string[];
}

interface LlmGroup {
  title: string;
  items: {
    name: string;
    desc: string;
  }[];
}

interface GapRow {
  system: string;
  capabilities: string[];
  highlight?: boolean;
}

interface SoaParadigmsSlideProps {
  title: string;
  paradigms: Paradigm[];
  note: string;
}

interface SoaDatasetsSlideProps {
  title: string;
  datasets: DatasetColumn[];
}

interface SoaTableSlideProps {
  title: string;
  rows: string[][];
  takeaway: string;
}

interface SoaLlmWorksSlideProps {
  title: string;
  groups: LlmGroup[];
}

interface SoaGapSlideProps {
  title: string;
  headers: string[];
  rows: GapRow[];
  gap: string;
  contribution: string;
}

function Panel({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-xl border border-cyan-400/25 bg-slate-900/55 p-5 shadow-lg shadow-cyan-500/5 ${className}`}>
      {children}
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <div className="space-y-3">
      {items.map((item) => (
        <div key={item} className="flex gap-3 text-sm leading-relaxed text-gray-300">
          <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-cyan-400 shadow-sm shadow-cyan-400/60" />
          <p>{item}</p>
        </div>
      ))}
    </div>
  );
}

function CapabilityBadge({ capability }: { capability: string }) {
  const isAvailable = capability === 'YES';

  return (
    <span
      className={`inline-flex h-7 min-w-16 items-center justify-center gap-1 rounded-full border px-2 text-[10px] font-black uppercase tracking-wide sm:h-8 sm:min-w-20 sm:gap-1.5 sm:px-3 sm:text-xs ${
        isAvailable
          ? 'border-cyan-300/45 bg-cyan-400/15 text-cyan-100 shadow-sm shadow-cyan-400/15'
          : 'border-red-300/30 bg-red-500/10 text-red-200'
      }`}
    >
      {isAvailable ? <Check size={14} strokeWidth={3} /> : <X size={14} strokeWidth={3} />}
      {capability === 'YES' ? 'Yes' : 'No'}
    </span>
  );
}

export function SoaParadigmsSlide({ title, paradigms, note }: SoaParadigmsSlideProps) {
  return (
    <div className="w-full">
      <SlideHeader title={title} />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        {paradigms.map((paradigm) => (
          <Panel key={paradigm.num} className="min-h-[260px]">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg border border-cyan-400/40 bg-cyan-400/10 text-lg font-black text-cyan-200">
              {paradigm.num}
            </div>
            <h3 className="mb-3 text-xl font-extrabold text-cyan-300">{paradigm.title}</h3>
            <p className="text-sm leading-relaxed text-gray-300">{paradigm.desc}</p>
          </Panel>
        ))}
      </div>
      <div className="mt-5 flex items-center gap-3 rounded-xl border border-blue-400/25 bg-blue-500/10 p-4 text-sm text-blue-100">
        <Layers size={22} className="shrink-0 text-cyan-300" />
        <p>{note}</p>
      </div>
    </div>
  );
}

export function SoaDatasetsSlide({ title, datasets }: SoaDatasetsSlideProps) {
  return (
    <div className="w-full">
      <SlideHeader title={title} />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {datasets.map((dataset) => (
          <Panel key={dataset.title}>
            <div className="mb-4 flex items-start gap-3">
              <Database className="mt-1 shrink-0 text-cyan-300" size={28} />
              <div>
                <h3 className="text-2xl font-extrabold text-cyan-300">{dataset.title}</h3>
                <p className="text-sm font-semibold text-blue-200">{dataset.meta}</p>
              </div>
            </div>
            <BulletList items={dataset.points} />
          </Panel>
        ))}
      </div>
    </div>
  );
}

export function SoaMlDlSlide({ title, rows, takeaway }: SoaTableSlideProps) {
  return (
    <div className="w-full">
      <SlideHeader title={title} />
      <Panel>
        <DataTable headers={['System', 'Method', 'Accuracy', 'Limitation']} rows={rows} />
        <div className="mt-4 flex items-center gap-3 rounded-lg border border-cyan-400/25 bg-cyan-500/10 p-4 text-sm text-cyan-100">
          <SearchCheck size={22} className="shrink-0 text-cyan-300" />
          <p>{takeaway}</p>
        </div>
      </Panel>
    </div>
  );
}

export function SoaLlmWorksSlide({ title, groups }: SoaLlmWorksSlideProps) {
  return (
    <div className="w-full">
      <SlideHeader title={title} />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {groups.map((group) => (
          <Panel key={group.title}>
            <div className="mb-4 flex items-center gap-3">
              <BrainCircuit className="text-cyan-300" size={28} />
              <h3 className="text-2xl font-extrabold text-cyan-300">{group.title}</h3>
            </div>
            <div className="space-y-3">
              {group.items.map((item) => (
                <div key={item.name} className="rounded-lg border border-cyan-400/15 bg-slate-950/45 p-3">
                  <h4 className="mb-1 text-sm font-bold text-cyan-300">{item.name}</h4>
                  <p className="text-xs leading-relaxed text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </Panel>
        ))}
      </div>
    </div>
  );
}

export function SoaGapSlide({ title, headers, rows, gap, contribution }: SoaGapSlideProps) {
  return (
    <div className="w-full">
      <SlideHeader title={title} />
      <Panel>
        <div className="presentation-slide-scroll overflow-x-auto">
          <table className="w-full min-w-[640px] text-xs sm:text-sm">
            <thead>
              <tr className="border-b-2 border-cyan-400/40 bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
                {headers.map((header) => (
                  <th key={header} className="p-3 text-left font-bold text-cyan-300">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr
                  key={row.system}
                  className={`border-b border-cyan-400/20 ${row.highlight ? 'bg-cyan-500/10 text-cyan-100' : 'text-gray-300'}`}
                >
                  <td className="p-3 font-bold">{row.system}</td>
                  {row.capabilities.map((capability, index) => (
                    <td key={`${row.system}-${index}`} className="p-3">
                      <CapabilityBadge capability={capability} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="rounded-lg border border-red-400/25 bg-red-500/10 p-4">
            <div className="mb-2 text-sm font-black uppercase text-red-300">The gap</div>
            <p className="text-sm leading-relaxed text-red-100">{gap}</p>
          </div>
          <div className="rounded-lg border border-cyan-400/25 bg-cyan-500/10 p-4">
            <div className="mb-2 flex items-center gap-2 text-sm font-black uppercase text-cyan-300">
              <GitCompare size={16} />
              Our contribution
            </div>
            <p className="text-sm leading-relaxed text-cyan-100">{contribution}</p>
          </div>
        </div>
      </Panel>
    </div>
  );
}

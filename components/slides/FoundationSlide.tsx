import { SlideHeader, BulletList, Quote } from '@/components/common';

interface FoundationPoint {
  label: string;
  description: string;
}

interface FoundationSection {
  title: string;
  intro: string;
  points: FoundationPoint[];
}

interface FoundationSlideProps {
  title: string;
  wazuh: FoundationSection;
  quote: string;
}

export function FoundationSlide({ title, wazuh, quote }: FoundationSlideProps) {
  return (
    <div className="w-full flex flex-col h-full justify-between">
      <SlideHeader title={title} />
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 my-auto">
        <div className="md:col-span-2 flex flex-col justify-center">
          <h3 className="text-3xl font-extrabold text-cyan-300 mb-4">{wazuh.title}</h3>
          <p className="text-gray-300 text-sm leading-relaxed mb-6">{wazuh.intro}</p>
          <div className="bg-slate-900/60 p-4 rounded-xl border border-cyan-500/20 text-cyan-200 text-xs font-mono">
            <div className="flex items-center justify-between mb-2">
              <span className="text-blue-400 font-bold">Endpoints</span>
              <span className="text-gray-500">→</span>
              <span className="text-green-400 font-bold">Wazuh Server</span>
              <span className="text-gray-500">→</span>
              <span className="text-purple-400 font-bold">Indexer</span>
            </div>
            <p className="text-[10px] text-gray-400 leading-tight">
              Agents collect telemetry (syslogs, event logs, FIM) and securely forward to decoders/ruleset engine.
            </p>
          </div>
        </div>
        <div className="md:col-span-3 bg-slate-900/40 p-6 rounded-xl border border-cyan-400/30">
          <h4 className="text-lg font-bold text-cyan-400 mb-4">Core Platform Capabilities</h4>
          <BulletList items={wazuh.points} />
        </div>
      </div>
      <Quote text={quote} />
    </div>
  );
}

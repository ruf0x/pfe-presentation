import {
  AlertTriangle,
  BarChart3,
  BrainCircuit,
  CheckCircle2,
  Database,
  Filter,
  Network,
  ShieldCheck,
  Sparkles,
  XCircle,
} from 'lucide-react';
import { SlideHeader } from '@/components/common';

interface CardGroup {
  title: string;
  icon: 'problem' | 'gap' | 'answer';
  items: string[];
}

interface PipelinePoint {
  label: string;
  text: string;
}

interface DatasetSource {
  title: string;
  meta: string;
  items: string[];
}

interface DatasetSummary {
  label: string;
  value: string;
}

interface DatasetAnalysisMetric {
  label: string;
  value: string;
  desc: string;
}

interface FeatureField {
  field: string;
  reason: string;
}

interface ContributionMotivationSlideProps {
  title: string;
  cards: CardGroup[];
}

interface ContributionArchitectureSlideProps {
  title: string;
  image: string;
  caption: PipelinePoint[];
}

interface ContributionDatasetSlideProps {
  title: string;
  sources: DatasetSource[];
  summary: DatasetSummary[];
}

interface ContributionDatasetAnalysisSlideProps {
  title: string;
  metrics: DatasetAnalysisMetric[];
  binaryNotes: string[];
  conclusion: string[];
  images: {
    donut: string;
    tpComposition: string;
  };
}

interface ContributionPreprocessingSlideProps {
  title: string;
  intro: string;
  fields: FeatureField[];
  sample: string[];
}

function Panel({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-xl border border-cyan-400/25 bg-slate-900/55 p-4 shadow-lg shadow-cyan-500/5 ${className}`}>
      {children}
    </div>
  );
}

function cardIcon(icon: CardGroup['icon']) {
  if (icon === 'problem') return <AlertTriangle size={24} className="text-red-300" />;
  if (icon === 'gap') return <Filter size={24} className="text-blue-200" />;
  return <ShieldCheck size={24} className="text-cyan-200" />;
}

function BulletItems({ items, color = 'cyan' }: { items: string[]; color?: 'cyan' | 'red' | 'blue' }) {
  const dotColor = color === 'red' ? 'bg-red-300' : color === 'blue' ? 'bg-blue-300' : 'bg-cyan-300';

  return (
    <div className="space-y-2">
      {items.map((item) => (
        <div key={item} className="flex gap-2.5 text-xs leading-relaxed text-gray-300">
          <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${dotColor}`} />
          <p>{item}</p>
        </div>
      ))}
    </div>
  );
}

export function ContributionMotivationSlide({ title, cards }: ContributionMotivationSlideProps) {
  return (
    <div className="w-full">
      <SlideHeader title={title} />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {cards.map((card) => {
          const color = card.icon === 'problem' ? 'red' : card.icon === 'gap' ? 'blue' : 'cyan';

          return (
            <Panel key={card.title} className={card.icon === 'answer' ? 'border-cyan-300/40 bg-cyan-500/10' : ''}>
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-cyan-400/25 bg-slate-950/60">
                  {cardIcon(card.icon)}
                </div>
                <h3 className="text-xl font-black text-cyan-300">{card.title}</h3>
              </div>
              <BulletItems items={card.items} color={color} />
            </Panel>
          );
        })}
      </div>
    </div>
  );
}

export function ContributionArchitectureSlide({ title, image, caption }: ContributionArchitectureSlideProps) {
  void caption;

  return (
    <div className="flex h-full w-full flex-col">
      <SlideHeader title={title} />
      <div className="flex min-h-0 flex-1 items-center overflow-hidden rounded-xl border border-cyan-400/25 bg-slate-950/55 p-4">
        <img src={image} alt="Two-stage Wazuh LLM alert analysis pipeline" className="h-full max-h-[480px] w-full object-contain" />
      </div>
    </div>
  );
}

export function ContributionDatasetSlide({ title, sources, summary }: ContributionDatasetSlideProps) {
  return (
    <div className="w-full">
      <SlideHeader title={title} />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {sources.map((source, index) => (
          <Panel key={source.title}>
            <div className="mb-3 flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-cyan-400/30 bg-cyan-400/10 text-sm font-black text-cyan-200">
                {index + 1}
              </div>
              <div>
                <h3 className="text-base font-black text-cyan-300">{source.title}</h3>
                <p className="text-xs font-semibold text-blue-200">{source.meta}</p>
              </div>
            </div>
            <BulletItems items={source.items} />
          </Panel>
        ))}
      </div>
      <div className="mt-4 grid grid-cols-3 gap-3">
        {summary.map((item) => (
          <div key={item.label} className="rounded-lg border border-cyan-400/25 bg-cyan-500/10 p-3 text-center">
            <div className="text-2xl font-black text-cyan-200">{item.value}</div>
            <div className="text-xs font-semibold uppercase tracking-wide text-gray-400">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ContributionDatasetAnalysisSlide({
  title,
  metrics,
  binaryNotes,
  conclusion,
  images,
}: ContributionDatasetAnalysisSlideProps) {
  return (
    <div className="w-full">
      <SlideHeader title={title} />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-[0.75fr_1.25fr]">
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-2.5">
            {metrics.map((metric) => (
              <div key={metric.label} className="rounded-lg border border-cyan-400/25 bg-slate-950/45 p-2.5">
                <div className="text-xl font-black text-cyan-200">{metric.value}</div>
                <div className="text-xs font-bold text-cyan-300">{metric.label}</div>
              </div>
            ))}
          </div>
          <Panel className="p-3">
            <div className="mb-2 flex items-center gap-2 text-xs font-black uppercase text-red-300">
              <BarChart3 size={17} />
              Binary classification problem
            </div>
            <BulletItems items={binaryNotes} color="red" />
          </Panel>
          <Panel className="border-cyan-300/35 bg-cyan-500/10 p-3">
            <div className="mb-2 flex items-center gap-2 text-xs font-black uppercase text-cyan-300">
              <Sparkles size={17} />
              Conclusion
            </div>
            <BulletItems items={conclusion} />
          </Panel>
        </div>
        <div className="grid min-h-[500px] grid-cols-1 gap-4">
          <div className="flex min-h-0 items-center rounded-xl border border-cyan-400/25 bg-slate-950/55 p-3">
            <img src={images.donut} alt="AIT dataset dirb and benign dominance donut chart" className="h-full max-h-[260px] w-full object-contain" />
          </div>
          <div className="flex min-h-0 items-center rounded-xl border border-cyan-400/25 bg-slate-950/55 p-3">
            <img src={images.tpComposition} alt="True positive class composition chart" className="h-full max-h-[260px] w-full object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function ContributionPreprocessingSlide({ title, intro, fields, sample }: ContributionPreprocessingSlideProps) {
  return (
    <div className="w-full">
      <SlideHeader title={title} />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-[1.15fr_0.85fr]">
        <Panel>
          <div className="mb-3 flex items-center gap-2 text-sm font-black uppercase text-cyan-300">
            <Network size={17} />
            Model input context
          </div>
          <p className="mb-3 text-sm leading-relaxed text-gray-300">{intro}</p>
          <div className="grid grid-cols-1 gap-2">
            {fields.map((field) => (
              <div key={field.field} className="grid grid-cols-[150px_1fr] gap-3 rounded-lg border border-cyan-400/15 bg-slate-950/35 p-2.5">
                <div className="font-mono text-xs font-bold text-cyan-200">{field.field}</div>
                <div className="text-xs leading-relaxed text-gray-300">{field.reason}</div>
              </div>
            ))}
          </div>
        </Panel>
        <Panel className="border-blue-300/30 bg-blue-500/10">
          <div className="mb-3 flex items-center gap-2 text-sm font-black uppercase text-blue-200">
            <BrainCircuit size={17} />
            Output format fed to the model
          </div>
          <pre className="whitespace-pre-wrap rounded-lg border border-cyan-400/20 bg-slate-950/70 p-4 font-mono text-[11px] leading-relaxed text-cyan-100">
            {sample.join('\n')}
          </pre>
          <div className="mt-4 flex items-center gap-2 rounded-lg border border-cyan-400/25 bg-cyan-400/10 p-3 text-xs font-semibold text-cyan-100">
            <CheckCircle2 size={16} className="shrink-0" />
            Structured enough for learning, semantic enough for LLM reasoning.
          </div>
        </Panel>
      </div>
    </div>
  );
}

interface FinetuningStrategyCol {
  title: string;
  highlight?: boolean;
  items: string[];
  vram: string;
}

interface ContributionFinetuningStrategySlideProps {
  title: string;
  columns: FinetuningStrategyCol[];
  note: string;
}

export function ContributionFinetuningStrategySlide({
  title,
  columns,
  note,
}: ContributionFinetuningStrategySlideProps) {
  return (
    <div className="w-full">
      <SlideHeader title={title} />
      <div className="mb-4 grid grid-cols-3 gap-4">
        {columns.map((col) => (
          <Panel key={col.title} className={col.highlight ? 'border-cyan-300/50 bg-cyan-500/10' : ''}>
            <div className="mb-3 flex items-center gap-2">
              {col.highlight && <Sparkles size={16} className="shrink-0 text-cyan-300" />}
              <h3 className={`text-lg font-black ${col.highlight ? 'text-cyan-200' : 'text-gray-200'}`}>
                {col.title}
              </h3>
            </div>
            <div className="mb-3 rounded-lg border border-cyan-400/20 bg-slate-950/50 px-3 py-1.5 font-mono text-xs text-cyan-100">
              VRAM: <span className="font-black text-cyan-300">{col.vram}</span>
            </div>
            <BulletItems items={col.items} color={col.highlight ? 'cyan' : 'blue'} />
          </Panel>
        ))}
      </div>
      <div className="rounded-lg border border-cyan-400/25 bg-cyan-500/10 px-4 py-2.5 text-sm font-semibold text-cyan-100">
        {note}
      </div>
    </div>
  );
}

interface FinetuningStep {
  num: string;
  title: string;
  items: string[];
}

interface HyperparamRow {
  param: string;
  value: string;
}

interface ContributionFinetuningPipelineSlideProps {
  title: string;
  steps: FinetuningStep[];
  hyperparams: HyperparamRow[];
}

export function ContributionFinetuningPipelineSlide({
  title,
  steps,
  hyperparams,
}: ContributionFinetuningPipelineSlideProps) {
  return (
    <div className="w-full">
      <SlideHeader title={title} />
      <div className="grid grid-cols-[1.4fr_0.6fr] gap-4">
        <div className="space-y-2.5">
          {steps.map((step) => (
            <div key={step.num} className="grid grid-cols-[32px_1fr] gap-3 rounded-xl border border-cyan-400/20 bg-slate-900/55 p-3">
              <div className="flex h-7 w-7 items-center justify-center rounded-md bg-cyan-400/15 text-xs font-black text-cyan-300">
                {step.num}
              </div>
              <div>
                <div className="mb-1 text-sm font-black text-cyan-200">{step.title}</div>
                <BulletItems items={step.items} />
              </div>
            </div>
          ))}
        </div>
        <Panel className="self-start border-blue-300/30 bg-blue-500/10">
          <div className="mb-3 text-xs font-black uppercase tracking-wide text-blue-200">
            Key Hyperparameters
          </div>
          <div className="space-y-1.5">
            {hyperparams.map((row) => (
              <div key={row.param} className="flex items-center justify-between rounded-lg border border-cyan-400/15 bg-slate-950/40 px-2.5 py-1.5">
                <span className="font-mono text-xs text-gray-300">{row.param}</span>
                <span className="font-mono text-xs font-black text-cyan-200">{row.value}</span>
              </div>
            ))}
          </div>
        </Panel>
      </div>
    </div>
  );
}

interface ClassifierResultRow {
  model: string;
  accuracy: string;
  f1: string;
  tpRecall: string;
  fpRecall: string;
  parseErrors: string;
  winner?: boolean;
}

interface ContributionStage1ResultsSlideProps {
  title: string;
  rows: ClassifierResultRow[];
  takeaways: string[];
  images: {
    headline: string;
    perclass: string;
    confusion: string;
    baseline: string;
  };
}

export function ContributionStage1ResultsSlide({
  title,
  rows,
  takeaways,
  images,
}: ContributionStage1ResultsSlideProps) {
  return (
    <div className="w-full">
      <SlideHeader title={title} />
      <div className="grid grid-cols-[1fr_1fr] gap-4">
        <div className="space-y-3">
          <Panel className="overflow-hidden p-0">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-cyan-400/20 bg-slate-950/60">
                  {['Model', 'Acc', 'F1', 'TP Rec', 'FP Rec', 'Errors'].map((h) => (
                    <th key={h} className="px-2 py-2 text-left text-[10px] font-black uppercase text-cyan-300">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.model} className={`border-b border-cyan-400/10 ${row.winner ? 'bg-cyan-500/10' : ''}`}>
                    <td className={`px-2 py-2 font-bold ${row.winner ? 'text-cyan-200' : 'text-gray-300'}`}>{row.model}</td>
                    <td className={`px-2 py-2 font-mono ${row.winner ? 'font-black text-cyan-200' : 'text-gray-300'}`}>{row.accuracy}</td>
                    <td className={`px-2 py-2 font-mono ${row.winner ? 'font-black text-cyan-200' : 'text-gray-300'}`}>{row.f1}</td>
                    <td className={`px-2 py-2 font-mono ${row.winner ? 'font-black text-cyan-200' : 'text-gray-300'}`}>{row.tpRecall}</td>
                    <td className={`px-2 py-2 font-mono ${row.winner ? 'font-black text-cyan-200' : 'text-gray-300'}`}>{row.fpRecall}</td>
                    <td className={`px-2 py-2 font-mono ${row.winner ? 'font-black text-green-300' : 'text-red-300'}`}>{row.parseErrors}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Panel>
          <Panel>
            <div className="mb-2 flex items-center gap-2 text-xs font-black uppercase text-cyan-300">
              <CheckCircle2 size={14} />
              Key Takeaways
            </div>
            <BulletItems items={takeaways} />
          </Panel>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {[images.headline, images.perclass, images.confusion, images.baseline].map((src) => (
            <div key={src} className="flex items-center justify-center overflow-hidden rounded-xl border border-cyan-400/20 bg-slate-950/55 p-1.5">
              <img src={src} alt="" className="h-full max-h-[200px] w-full object-contain" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

interface ContributionStage1ResultsSummarySlideProps {
  title: string;
  rows: ClassifierResultRow[];
  takeaways: string[];
}

export function ContributionStage1ResultsSummarySlide({
  title,
  rows,
  takeaways,
}: ContributionStage1ResultsSummarySlideProps) {
  return (
    <div className="w-full">
      <SlideHeader title={title} />
      <div className="space-y-5">
        <Panel className="overflow-hidden p-0">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-cyan-400/20 bg-slate-950/60">
                {['Model', 'Accuracy', 'Macro F1', 'TP Recall', 'FP Recall', 'Parse Errors'].map((h) => (
                  <th key={h} className="px-4 py-3 text-left text-xs font-black uppercase text-cyan-300">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.model} className={`border-b border-cyan-400/10 ${row.winner ? 'bg-cyan-500/10' : ''}`}>
                  <td className={`px-4 py-4 font-bold ${row.winner ? 'text-cyan-200' : 'text-gray-300'}`}>{row.model}</td>
                  <td className={`px-4 py-4 font-mono ${row.winner ? 'font-black text-cyan-200' : 'text-gray-300'}`}>{row.accuracy}</td>
                  <td className={`px-4 py-4 font-mono ${row.winner ? 'font-black text-cyan-200' : 'text-gray-300'}`}>{row.f1}</td>
                  <td className={`px-4 py-4 font-mono ${row.winner ? 'font-black text-cyan-200' : 'text-gray-300'}`}>{row.tpRecall}</td>
                  <td className={`px-4 py-4 font-mono ${row.winner ? 'font-black text-cyan-200' : 'text-gray-300'}`}>{row.fpRecall}</td>
                  <td className={`px-4 py-4 font-mono ${row.winner ? 'font-black text-green-300' : 'text-red-300'}`}>{row.parseErrors}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Panel>
        <Panel className="border-cyan-300/35 bg-cyan-500/10">
          <div className="mb-3 flex items-center gap-2 text-sm font-black uppercase text-cyan-300">
            <CheckCircle2 size={18} />
            Key Takeaways
          </div>
          <div className="grid grid-cols-2 gap-x-6 gap-y-3">
            {takeaways.map((item) => (
              <div key={item} className="flex gap-3 text-sm leading-relaxed text-cyan-50">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-300" />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </Panel>
      </div>
    </div>
  );
}

interface ContributionStage1PlotsSlideProps {
  title: string;
  images: {
    headline: string;
    perclass: string;
    confusion: string;
    baseline: string;
  };
}

export function ContributionStage1PlotsSlide({ title, images }: ContributionStage1PlotsSlideProps) {
  const plots = [
    { src: images.headline, label: 'Headline Metrics' },
    { src: images.perclass, label: 'Per-Class Metrics' },
    { src: images.confusion, label: 'Confusion Matrix' },
    { src: images.baseline, label: 'Fine-Tuned vs Baseline' },
  ];

  return (
    <div className="w-full">
      <SlideHeader title={title} />
      <div className="grid grid-cols-2 gap-4">
        {plots.map((plot) => (
          <div key={plot.src} className="overflow-hidden rounded-xl border border-cyan-400/25 bg-slate-950/55">
            <div className="border-b border-cyan-400/15 px-4 py-2 text-xs font-black uppercase text-cyan-300">
              {plot.label}
            </div>
            <div className="flex h-[220px] items-center justify-center p-3">
              <img src={plot.src} alt={plot.label} className="h-full w-full object-contain" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

interface PromptingRow {
  strategy: string;
  format: string;
  mitre: string;
  tokens: string;
  latency: string;
  winner?: boolean;
}

interface ContributionStage2PromptingSlideProps {
  title: string;
  whyNoFinetune: string[];
  outputSchema: string[];
  rows: PromptingRow[];
  reasoning: { strategy: string; verdict: string; color: 'red' | 'blue' | 'cyan' }[];
}

export function ContributionStage2PromptingSlide({
  title,
  whyNoFinetune,
  outputSchema,
  rows,
  reasoning,
}: ContributionStage2PromptingSlideProps) {
  return (
    <div className="w-full">
      <SlideHeader title={title} />
      <div className="grid grid-cols-[0.85fr_1.15fr] gap-4">
        <div className="space-y-3">
          <Panel>
            <div className="mb-2 text-xs font-black uppercase text-blue-200">Why no fine-tuning?</div>
            <BulletItems items={whyNoFinetune} color="blue" />
          </Panel>
          <Panel className="border-blue-300/25 bg-blue-500/10">
            <div className="mb-2 text-xs font-black uppercase text-cyan-300">Output schema (11 fields)</div>
            <div className="space-y-1">
              {outputSchema.map((field) => (
                <div key={field} className="rounded border border-cyan-400/15 bg-slate-950/50 px-2 py-0.5 font-mono text-[11px] text-cyan-100">
                  {field}
                </div>
              ))}
            </div>
          </Panel>
        </div>
        <div className="space-y-3">
          <Panel className="overflow-hidden p-0">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-cyan-400/20 bg-slate-950/60">
                  {['Strategy', 'Format', 'MITRE', 'Tokens', 'Latency'].map((h) => (
                    <th key={h} className="px-2.5 py-2 text-left text-[10px] font-black uppercase text-cyan-300">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.strategy} className={`border-b border-cyan-400/10 ${row.winner ? 'bg-cyan-500/10' : ''}`}>
                    <td className={`px-2.5 py-2 font-bold ${row.winner ? 'text-cyan-200' : 'text-gray-300'}`}>{row.strategy}</td>
                    <td className={`px-2.5 py-2 font-mono ${row.winner ? 'font-black text-cyan-200' : 'text-gray-300'}`}>{row.format}</td>
                    <td className="px-2.5 py-2 font-mono text-gray-300">{row.mitre}</td>
                    <td className="px-2.5 py-2 font-mono text-gray-300">{row.tokens}</td>
                    <td className={`px-2.5 py-2 font-mono ${row.winner ? 'font-black text-cyan-200' : 'text-gray-300'}`}>{row.latency}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Panel>
          <div className="space-y-2">
            {reasoning.map((r) => {
              const borderColor =
                r.color === 'red'
                  ? 'border-red-400/30 bg-red-500/10'
                  : r.color === 'blue'
                    ? 'border-blue-400/30 bg-blue-500/10'
                    : 'border-cyan-300/40 bg-cyan-500/10';
              const labelColor = r.color === 'red' ? 'text-red-300' : r.color === 'blue' ? 'text-blue-300' : 'text-cyan-200';

              return (
                <div key={r.strategy} className={`rounded-lg border px-3 py-2 ${borderColor}`}>
                  <span className={`mr-2 text-xs font-black ${labelColor}`}>{r.strategy}:</span>
                  <span className="text-xs text-gray-300">{r.verdict}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

interface Stage2BenchRow {
  model: string;
  format: string;
  mitre: string;
  actionability: string;
  hallucination: string;
  latency: string;
  winner?: boolean;
}

interface EscalationRow {
  policy: string;
  count: string;
  pct: string;
  impact: string;
  highlight?: boolean;
}

interface ContributionStage2ResultsSlideProps {
  title: string;
  benchRows: Stage2BenchRow[];
  deployStats: string[];
  escalationRows: EscalationRow[];
  triggers: string[];
}

export function ContributionStage2ResultsSlide({
  title,
  benchRows,
  deployStats,
  escalationRows,
  triggers,
}: ContributionStage2ResultsSlideProps) {
  return (
    <div className="w-full">
      <SlideHeader title={title} />
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-3">
          <Panel className="overflow-hidden p-0">
            <div className="border-b border-cyan-400/20 bg-slate-950/60 px-3 py-1.5 text-xs font-black uppercase text-cyan-300">
              Model Benchmark - N=150 TP alerts
            </div>
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-cyan-400/15 bg-slate-950/40">
                  {['Model', 'Format', 'MITRE', 'Action.', 'Halluc.', 'Latency'].map((h) => (
                    <th key={h} className="px-2 py-1.5 text-left text-[10px] font-black uppercase text-gray-400">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {benchRows.map((row) => (
                  <tr key={row.model} className={`border-b border-cyan-400/10 ${row.winner ? 'bg-cyan-500/10' : ''}`}>
                    <td className={`px-2 py-2 text-[11px] font-bold ${row.winner ? 'text-cyan-200' : 'text-gray-300'}`}>{row.model}</td>
                    <td className={`px-2 py-2 font-mono text-[11px] ${row.winner ? 'font-black text-cyan-200' : 'text-gray-300'}`}>{row.format}</td>
                    <td className={`px-2 py-2 font-mono text-[11px] ${row.winner ? 'font-black text-cyan-200' : 'text-gray-300'}`}>{row.mitre}</td>
                    <td className={`px-2 py-2 font-mono text-[11px] ${row.winner ? 'font-black text-cyan-200' : 'text-gray-300'}`}>{row.actionability}</td>
                    <td className={`px-2 py-2 font-mono text-[11px] ${row.winner ? 'font-black text-green-300' : 'text-red-300'}`}>{row.hallucination}</td>
                    <td className="px-2 py-2 font-mono text-[11px] text-gray-300">{row.latency}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Panel>
          <Panel>
            <div className="mb-2 text-xs font-black uppercase text-cyan-300">Deployment - 148 confirmed TPs</div>
            <BulletItems items={deployStats} />
          </Panel>
        </div>
        <div className="space-y-3">
          <Panel className="overflow-hidden p-0">
            <div className="border-b border-cyan-400/20 bg-slate-950/60 px-3 py-1.5 text-xs font-black uppercase text-cyan-300">
              Escalation Policy Comparison
            </div>
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-cyan-400/15 bg-slate-950/40">
                  {['Policy', 'Escalated', '%', 'Impact'].map((h) => (
                    <th key={h} className="px-2 py-1.5 text-left text-[10px] font-black uppercase text-gray-400">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {escalationRows.map((row) => (
                  <tr key={row.policy} className={`border-b border-cyan-400/10 ${row.highlight ? 'bg-cyan-500/10' : ''}`}>
                    <td className={`px-2 py-2 text-[11px] font-bold ${row.highlight ? 'text-cyan-200' : 'text-gray-300'}`}>{row.policy}</td>
                    <td className={`px-2 py-2 font-mono text-[11px] ${row.highlight ? 'font-black text-cyan-200' : 'text-red-300'}`}>{row.count}</td>
                    <td className={`px-2 py-2 font-mono text-[11px] ${row.highlight ? 'font-black text-cyan-200' : 'text-red-300'}`}>{row.pct}</td>
                    <td className={`px-2 py-2 text-[11px] ${row.highlight ? 'text-cyan-100' : 'text-gray-400'}`}>{row.impact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Panel>
          <Panel>
            <div className="mb-2 text-xs font-black uppercase text-cyan-300">Hybrid Policy - 3 Triggers</div>
            <BulletItems items={triggers} />
          </Panel>
          <div className="rounded-lg border border-cyan-300/40 bg-cyan-500/10 px-3 py-2 text-xs font-semibold text-cyan-100">
            52.7% ticket reduction - from 148 to 70 escalations - without compromising safety.
          </div>
        </div>
      </div>
    </div>
  );
}

interface PerfRow {
  component: string;
  latency: string;
  focus: string;
  highlight?: boolean;
}

interface ContributionPipelinePerfSlideProps {
  title: string;
  rows: PerfRow[];
  bullets: string[];
  throughputStat: string;
  throughputLabel: string;
}

export function ContributionPipelinePerfSlide({
  title,
  rows,
  bullets,
  throughputStat,
  throughputLabel,
}: ContributionPipelinePerfSlideProps) {
  return (
    <div className="w-full">
      <SlideHeader title={title} />
      <div className="grid grid-cols-[1.1fr_0.9fr] gap-4">
        <div className="space-y-3">
          <Panel className="overflow-hidden p-0">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-cyan-400/20 bg-slate-950/60">
                  {['Component', 'Avg Latency', 'Focus'].map((h) => (
                    <th key={h} className="px-3 py-2.5 text-left text-xs font-black uppercase text-cyan-300">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.component} className={`border-b border-cyan-400/10 ${row.highlight ? 'bg-cyan-500/10' : ''}`}>
                    <td className={`px-3 py-3 text-sm font-bold ${row.highlight ? 'text-cyan-200' : 'text-gray-200'}`}>{row.component}</td>
                    <td className={`px-3 py-3 font-mono text-sm font-black ${row.highlight ? 'text-cyan-200' : 'text-gray-300'}`}>{row.latency}</td>
                    <td className="px-3 py-3 text-xs text-gray-400">{row.focus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Panel>
          <Panel>
            <div className="mb-2 text-xs font-black uppercase text-cyan-300">Why this works in a real SOC</div>
            <BulletItems items={bullets} />
          </Panel>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-1 flex-col items-center justify-center rounded-xl border border-cyan-300/40 bg-cyan-500/10 p-6 text-center">
            <div className="text-5xl font-black text-cyan-200">{throughputStat}</div>
            <div className="mt-2 text-sm font-semibold uppercase tracking-wide text-gray-400">{throughputLabel}</div>
          </div>
          <div className="flex flex-1 flex-col items-center justify-center rounded-xl border border-blue-400/30 bg-blue-500/10 p-4 text-center">
            <div className="text-3xl font-black text-blue-200">90%+</div>
            <div className="mt-1 text-xs font-semibold uppercase tracking-wide text-gray-400">of raw alerts filtered in 1.65 s</div>
            <div className="mt-2 text-xs text-gray-400">Analysts only review confirmed threats</div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface DashboardPanel {
  num: string;
  title: string;
  items: string[];
  image: string;
}

interface ContributionDashboardSlideProps {
  title: string;
  stack: { label: string; desc: string }[];
  panels: DashboardPanel[];
}

export function ContributionDashboardSlide({
  title,
  stack,
  panels,
}: ContributionDashboardSlideProps) {
  return (
    <div className="w-full">
      <SlideHeader title={title} />
      <div className="space-y-3">
        <div className="grid grid-cols-3 gap-3">
          {stack.map((s) => (
            <div key={s.label} className="rounded-lg border border-cyan-400/25 bg-slate-900/55 px-3 py-2 text-center">
              <div className="text-sm font-black text-cyan-200">{s.label}</div>
              <div className="text-xs text-gray-400">{s.desc}</div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-3">
          {panels.map((panel) => (
            <div key={panel.num} className="flex flex-col overflow-hidden rounded-xl border border-cyan-400/20 bg-slate-900/55">
              <div className="flex items-center gap-2 border-b border-cyan-400/15 bg-slate-950/50 px-3 py-1.5">
                <div className="flex h-5 w-5 items-center justify-center rounded bg-cyan-400/15 text-[10px] font-black text-cyan-300">
                  {panel.num}
                </div>
                <span className="text-xs font-black text-cyan-200">{panel.title}</span>
              </div>
              <div className="grid flex-1 grid-cols-[1fr_1fr]">
                <div className="space-y-1 p-2.5">
                  {panel.items.map((item) => (
                    <div key={item} className="flex gap-1.5 text-[11px] leading-relaxed text-gray-300">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-cyan-400" />
                      {item}
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-center overflow-hidden border-l border-cyan-400/10 bg-slate-950/30 p-1.5">
                  <img src={panel.image} alt={panel.title} className="max-h-[110px] w-full object-contain" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

interface ContributionDashboardPanelSlideProps {
  title: string;
  stack: { label: string; desc: string }[];
  panel: DashboardPanel;
}

export function ContributionDashboardPanelSlide({
  title,
  stack,
  panel,
}: ContributionDashboardPanelSlideProps) {
  return (
    <div className="w-full">
      <SlideHeader title={title} />
      <div className="space-y-4">
        <div className="grid grid-cols-3 gap-3">
          {stack.map((s) => (
            <div key={s.label} className="rounded-lg border border-cyan-400/25 bg-slate-900/55 px-3 py-2 text-center">
              <div className="text-sm font-black text-cyan-200">{s.label}</div>
              <div className="text-xs text-gray-400">{s.desc}</div>
            </div>
          ))}
        </div>
        <div className="overflow-hidden rounded-xl border border-cyan-400/25 bg-slate-950/50">
          <div className="flex items-center gap-3 border-b border-cyan-400/15 bg-slate-950/70 px-4 py-2">
            <div className="flex h-7 w-7 items-center justify-center rounded bg-cyan-400/15 text-xs font-black text-cyan-300">
              {panel.num}
            </div>
            <h3 className="text-lg font-black text-cyan-200">{panel.title}</h3>
          </div>
          <div className="flex h-[360px] items-center justify-center p-4">
            <img src={panel.image} alt={panel.title} className="h-full w-full object-contain" />
          </div>
        </div>
        <div className="grid grid-cols-4 gap-3">
          {panel.items.map((item) => (
            <div key={item} className="rounded-lg border border-cyan-400/20 bg-cyan-500/10 p-3 text-xs leading-relaxed text-cyan-50">
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

interface ContributionDiagramSlideProps {
  title: string;
  image: string;
  caption?: string;
}

export function ContributionDiagramSlide({ title, image, caption }: ContributionDiagramSlideProps) {
  return (
    <div className="flex h-full w-full flex-col">
      <SlideHeader title={title} />
      <div className="flex min-h-0 flex-1 items-center justify-center overflow-hidden rounded-xl border border-cyan-400/25 bg-slate-950/55 p-4">
        <img src={image} alt={title} className="h-full max-h-[480px] w-full object-contain" />
      </div>
      {caption && (
        <div className="mt-3 rounded-lg border border-cyan-400/25 bg-cyan-500/10 px-4 py-2 text-center text-sm font-semibold text-cyan-100">
          {caption}
        </div>
      )}
    </div>
  );
}

interface RelatedWorkComparisonRow {
  system: string;
  capabilities: string[];
  highlight?: boolean;
}

interface ContributionRelatedWorkComparisonSlideProps {
  title: string;
  headers: string[];
  rows: RelatedWorkComparisonRow[];
  note: string;
}

function CapabilityPill({ value }: { value: string }) {
  const isYes = value === 'YES';

  return (
    <span
      className={`inline-flex h-8 min-w-20 items-center justify-center gap-1.5 rounded-full border px-3 text-xs font-black uppercase ${
        isYes
          ? 'border-cyan-300/45 bg-cyan-400/15 text-cyan-100'
          : 'border-red-300/30 bg-red-500/10 text-red-200'
      }`}
    >
      {isYes ? <CheckCircle2 size={14} strokeWidth={3} /> : <XCircle size={14} strokeWidth={3} />}
      {isYes ? 'Yes' : 'No'}
    </span>
  );
}

export function ContributionRelatedWorkComparisonSlide({
  title,
  headers,
  rows,
  note,
}: ContributionRelatedWorkComparisonSlideProps) {
  return (
    <div className="w-full">
      <SlideHeader title={title} />
      <Panel className="overflow-hidden p-0">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b-2 border-cyan-400/40 bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
              {headers.map((header) => (
                <th key={header} className="p-3 text-left font-black text-cyan-300">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr
                key={row.system}
                className={`border-b border-cyan-400/15 ${row.highlight ? 'bg-cyan-500/10 text-cyan-100' : 'text-gray-300'}`}
              >
                <td className="p-3 font-black">{row.system}</td>
                {row.capabilities.map((capability, index) => (
                  <td key={`${row.system}-${index}`} className="p-3">
                    <CapabilityPill value={capability} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </Panel>
      <div className="mt-4 rounded-lg border border-cyan-300/35 bg-cyan-500/10 p-4 text-center text-sm font-semibold text-cyan-100">
        {note}
      </div>
    </div>
  );
}

interface ClosingTextSlideProps {
  title: string;
  subtitle?: string;
}

export function ClosingTextSlide({ title, subtitle }: ClosingTextSlideProps) {
  return (
    <div className="flex min-h-[440px] w-full items-center justify-center text-center">
      <div>
        <div className="mx-auto mb-8 h-1 w-40 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-transparent" />
        <h2 className="text-7xl font-black uppercase tracking-normal text-cyan-200 drop-shadow-lg">
          {title}
        </h2>
        {subtitle && <p className="mt-6 text-2xl font-semibold text-blue-100">{subtitle}</p>}
      </div>
    </div>
  );
}

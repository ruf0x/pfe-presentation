import { Activity, BrainCircuit, Database, GitBranch, MonitorCog, Search, Shield, Siren, Workflow, Zap } from 'lucide-react';
import { DataTable, SlideHeader } from '@/components/common';

interface BulletItem {
  label?: string;
  text: string;
}

interface SocOperationsSlideProps {
  title: string;
  items: BulletItem[];
  roles: string[];
}

interface SiemWorkflowSlideProps {
  title: string;
  definition: string;
  functions: string[];
  limitations: string[];
}

interface ThreatGridSlideProps {
  title: string;
  rows: string[][];
  note: string;
}

interface WazuhComponentsSlideProps {
  title: string;
  components: {
    title: string;
    icon: string;
    points: string[];
  }[];
}

interface WazuhPipelineSlideProps {
  title: string;
  flow: string[];
  ruleDetails: string[];
}

interface AiSiemSlideProps {
  title: string;
  why: string[];
  approaches: {
    title: string;
    desc: string;
  }[];
  wazuh: string[];
}

function CompactBulletList({ items }: { items: BulletItem[] }) {
  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <div key={index} className="flex gap-3 text-sm leading-relaxed text-gray-300">
          <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-cyan-400 shadow-sm shadow-cyan-400/60" />
          <p>
            {item.label && <span className="font-bold text-cyan-300">{item.label}: </span>}
            {item.text}
          </p>
        </div>
      ))}
    </div>
  );
}

function Panel({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-xl border border-cyan-400/25 bg-slate-900/55 p-5 shadow-lg shadow-cyan-500/5 ${className}`}>
      {children}
    </div>
  );
}

export function SocOperationsSlide({ title, items, roles }: SocOperationsSlideProps) {
  return (
    <div className="w-full">
      <SlideHeader title={title} />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-5">
        <Panel className="md:col-span-3">
          <div className="mb-4 flex items-center gap-3">
            <Shield className="text-cyan-300" size={28} />
            <h3 className="text-2xl font-extrabold text-cyan-300">SOC Mission</h3>
          </div>
          <CompactBulletList items={items} />
        </Panel>
        <Panel className="md:col-span-2">
          <div className="mb-5 flex items-center gap-3">
            <Siren className="text-blue-300" size={26} />
            <h3 className="text-xl font-bold text-blue-200">Triage Chain</h3>
          </div>
          <div className="space-y-4">
            {roles.map((role, index) => (
              <div key={role} className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-cyan-400/40 bg-cyan-400/10 font-black text-cyan-200">
                  L{index + 1}
                </div>
                <div className="h-px flex-1 bg-gradient-to-r from-cyan-400/60 to-transparent" />
                <p className="w-32 text-sm font-semibold text-gray-300">{role}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-lg border border-red-400/25 bg-red-500/10 p-4 text-sm text-red-200">
            Alert fatigue makes manual triage slow, inconsistent, and hard to scale.
          </div>
        </Panel>
      </div>
    </div>
  );
}

export function SiemWorkflowSlide({ title, definition, functions, limitations }: SiemWorkflowSlideProps) {
  return (
    <div className="w-full">
      <SlideHeader title={title} />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Panel>
          <div className="mb-4 flex items-center gap-3">
            <Database className="text-cyan-300" size={28} />
            <h3 className="text-2xl font-extrabold text-cyan-300">SIEM Role</h3>
          </div>
          <p className="mb-5 text-sm leading-relaxed text-gray-300">{definition}</p>
          <CompactBulletList items={functions.map((text) => ({ text }))} />
        </Panel>
        <Panel>
          <div className="mb-5 flex items-center justify-between gap-4 rounded-lg border border-cyan-400/25 bg-slate-950/50 p-4 text-center text-xs font-bold uppercase tracking-wider text-cyan-200">
            <span>Logs</span>
            <span className="text-cyan-400">→</span>
            <span>SIEM</span>
            <span className="text-cyan-400">→</span>
            <span>Analyst</span>
          </div>
          <div className="mb-4 flex items-center gap-3">
            <MonitorCog className="text-blue-300" size={26} />
            <h3 className="text-xl font-bold text-blue-200">Traditional Limits</h3>
          </div>
          <CompactBulletList items={limitations.map((text) => ({ text }))} />
        </Panel>
      </div>
    </div>
  );
}

export function ThreatGridSlide({ title, rows, note }: ThreatGridSlideProps) {
  return (
    <div className="w-full">
      <SlideHeader title={title} />
      <Panel>
        <DataTable headers={['Attack Category', 'Examples']} rows={rows} />
        <div className="mt-5 flex items-center gap-3 rounded-lg border border-cyan-400/25 bg-cyan-500/10 p-4 text-sm text-cyan-100">
          <GitBranch size={22} className="shrink-0 text-cyan-300" />
          <p>{note}</p>
        </div>
      </Panel>
    </div>
  );
}

export function WazuhComponentsSlide({ title, components }: WazuhComponentsSlideProps) {
  return (
    <div className="w-full">
      <SlideHeader title={title} />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {components.map((component) => (
          <Panel key={component.title} className="min-h-[330px]">
            <div className="mb-4 flex items-center gap-3">
              <span className="text-3xl">{component.icon}</span>
              <h3 className="text-xl font-extrabold text-cyan-300">{component.title}</h3>
            </div>
            <CompactBulletList items={component.points.map((text) => ({ text }))} />
          </Panel>
        ))}
      </div>
    </div>
  );
}

export function WazuhPipelineSlide({ title, flow, ruleDetails }: WazuhPipelineSlideProps) {
  return (
    <div className="w-full">
      <SlideHeader title={title} />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-5">
        <Panel className="md:col-span-3">
          <div className="mb-4 flex items-center gap-3">
            <Workflow className="text-cyan-300" size={28} />
            <h3 className="text-2xl font-extrabold text-cyan-300">Alert Flow</h3>
          </div>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            {flow.map((step, index) => (
              <div key={step} className="rounded-lg border border-cyan-400/20 bg-slate-950/45 p-3">
                <div className="mb-2 text-xs font-black text-cyan-400">STEP {index + 1}</div>
                <p className="text-sm leading-relaxed text-gray-300">{step}</p>
              </div>
            ))}
          </div>
        </Panel>
        <Panel className="md:col-span-2">
          <div className="mb-4 flex items-center gap-3">
            <Search className="text-blue-300" size={26} />
            <h3 className="text-xl font-bold text-blue-200">Rule System</h3>
          </div>
          <CompactBulletList items={ruleDetails.map((text) => ({ text }))} />
        </Panel>
      </div>
    </div>
  );
}

export function AiSiemSlide({ title, why, approaches, wazuh }: AiSiemSlideProps) {
  return (
    <div className="w-full">
      <SlideHeader title={title} />
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        <Panel>
          <div className="mb-4 flex items-center gap-3">
            <BrainCircuit className="text-cyan-300" size={28} />
            <h3 className="text-xl font-extrabold text-cyan-300">Why AI?</h3>
          </div>
          <CompactBulletList items={why.map((text) => ({ text }))} />
        </Panel>
        <Panel>
          <div className="mb-4 flex items-center gap-3">
            <Activity className="text-blue-300" size={26} />
            <h3 className="text-xl font-extrabold text-blue-200">Literature</h3>
          </div>
          <div className="space-y-3">
            {approaches.map((approach) => (
              <div key={approach.title} className="rounded-lg bg-slate-950/45 p-3">
                <h4 className="mb-1 text-sm font-bold text-cyan-300">{approach.title}</h4>
                <p className="text-xs leading-relaxed text-gray-400">{approach.desc}</p>
              </div>
            ))}
          </div>
        </Panel>
        <Panel>
          <div className="mb-4 flex items-center gap-3">
            <Zap className="text-cyan-300" size={26} />
            <h3 className="text-xl font-extrabold text-cyan-300">In Wazuh</h3>
          </div>
          <CompactBulletList items={wazuh.map((text) => ({ text }))} />
        </Panel>
      </div>
    </div>
  );
}

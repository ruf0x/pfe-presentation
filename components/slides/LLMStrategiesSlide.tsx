import { SlideHeader, DataTable } from '@/components/common';

interface LLMStrategiesSlideProps {
  title: string;
  intro1: string;
  intro2: string;
  table: {
    headers: string[];
    rows: string[][];
  };
}

export function LLMStrategiesSlide({ 
  title, 
  intro1, 
  intro2, 
  table 
}: LLMStrategiesSlideProps) {
  return (
    <div>
      <SlideHeader title={title} />
      <DataTable headers={table.headers} rows={table.rows} />
      <h3 className="text-2xl font-bold text-cyan-400 mb-4 mt-8">Supervised Fine-Tuning (SFT)</h3>
      <p className="text-gray-300 mb-6">{intro1}</p>
      <h3 className="text-2xl font-bold text-cyan-400 mb-4">In-Context Few-Shot Learning</h3>
      <p className="text-gray-300">{intro2}</p>
    </div>
  );
}

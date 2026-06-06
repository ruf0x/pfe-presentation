import { SlideHeader, DataTable } from '@/components/common';

interface DataSource {
  source: string;
  contribution: string;
}

interface PreprocessingStep {
  step: string;
  title: string;
  desc: string;
}

interface DatasetSlideProps {
  title: string;
  dataSource: DataSource[];
  dataNote: string;
  preprocessing: PreprocessingStep[];
}

export function DatasetSlide({ 
  title, 
  dataSource, 
  dataNote, 
  preprocessing 
}: DatasetSlideProps) {
  const sourceHeaders = ['Source', 'Contribution'];
  const sourceRows = dataSource.map(item => [item.source, item.contribution]);

  return (
    <div>
      <SlideHeader title={title} />
      <h3 className="text-2xl font-bold text-cyan-400 mb-4">Multi-Source Data</h3>
      <DataTable headers={sourceHeaders} rows={sourceRows} />
      <p className="text-gray-300 mb-6 font-semibold">{dataNote}</p>

      <h3 className="text-2xl font-bold text-cyan-400 mb-4">Preprocessing Pipeline</h3>
      <ol className="space-y-3">
        {preprocessing.map((item, i) => (
          <li key={i} className="text-gray-300 flex">
            <span className="text-cyan-400 font-bold mr-3">{item.step}.</span>
            <span>
              <strong className="text-cyan-400">{item.title}:</strong> {item.desc}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}

interface DataTableProps {
  headers: string[];
  rows: string[][];
}

export function DataTable({ headers, rows }: DataTableProps) {
  return (
    <div className="overflow-x-auto mb-4">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b-2 border-cyan-400/40 bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
            {headers.map((h, i) => (
              <th key={i} className="text-cyan-300 font-bold p-4 text-left">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr 
              key={i} 
              className="border-b border-cyan-400/20 hover:bg-cyan-500/10 
                transition-all duration-200 group"
            >
              {row.map((cell, j) => (
                <td 
                  key={j} 
                  className="p-4 text-gray-400 group-hover:text-gray-300 transition-colors"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

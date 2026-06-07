interface DataTableProps {
  headers: string[];
  rows: string[][];
}

export function DataTable({ headers, rows }: DataTableProps) {
  return (
    <div className="mb-4 overflow-x-auto presentation-slide-scroll">
      <table className="w-full min-w-[480px] text-xs sm:text-sm">
        <thead>
          <tr className="border-b-2 border-cyan-400/40 bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
            {headers.map((h, i) => (
              <th key={i} className="p-2 text-left font-bold text-cyan-300 sm:p-4">
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
                  className="p-2 text-gray-400 transition-colors group-hover:text-gray-300 sm:p-4"
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

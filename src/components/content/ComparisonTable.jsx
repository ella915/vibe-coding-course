export function ComparisonTable({ title, headers = [], rows = [] }) {
  if (!headers.length || !rows.length) return null;

  return (
    <div className="my-6">
      {title && (
        <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
          {title}
        </h4>
      )}

      <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-50">
              {headers.map((header, index) => (
                <th
                  key={index}
                  className="px-4 py-3 text-left font-semibold text-gray-700 border-b border-gray-200"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {rows.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
              >
                {row.map((cell, cellIndex) => (
                  <td
                    key={cellIndex}
                    className={`px-4 py-3 text-gray-700 ${
                      cellIndex === 0 ? 'font-medium' : ''
                    }`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ComparisonTable;

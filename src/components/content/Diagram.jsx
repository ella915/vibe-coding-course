export function Diagram({ variant = 'flow', title, steps = [], data }) {
  return (
    <div className="my-6">
      {title && (
        <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
          {title}
        </h4>
      )}

      {variant === 'flow' && <FlowDiagram steps={steps} />}
      {variant === 'hierarchy' && <HierarchyDiagram data={data} />}
      {variant === 'cycle' && <CycleDiagram steps={steps} />}
    </div>
  );
}

function FlowDiagram({ steps }) {
  if (!steps || steps.length === 0) return null;

  return (
    <div className="flex flex-wrap items-center justify-center gap-2 p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg">
      {steps.map((step, index) => (
        <div key={index} className="flex items-center">
          <div className="px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-200 text-sm font-medium text-gray-700">
            {step}
          </div>
          {index < steps.length - 1 && (
            <svg
              className="w-6 h-6 mx-1 text-primary-400 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          )}
        </div>
      ))}
    </div>
  );
}

function HierarchyDiagram({ data }) {
  if (!data) return null;

  return (
    <div className="p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg">
      <HierarchyNode node={data} isRoot />
    </div>
  );
}

function HierarchyNode({ node, isRoot = false }) {
  if (!node) return null;

  return (
    <div className={`${isRoot ? '' : 'ml-6 mt-2 border-l-2 border-gray-300 pl-4'}`}>
      <div className="px-3 py-2 bg-white rounded-lg shadow-sm border border-gray-200 inline-block text-sm font-medium text-gray-700">
        {node.label}
      </div>
      {node.children && node.children.length > 0 && (
        <div className="mt-2">
          {node.children.map((child, index) => (
            <HierarchyNode key={index} node={child} />
          ))}
        </div>
      )}
    </div>
  );
}

function CycleDiagram({ steps }) {
  if (!steps || steps.length === 0) return null;

  return (
    <div className="relative p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg">
      <div className="flex flex-wrap justify-center items-center gap-4">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center">
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-white shadow-sm border border-gray-200 flex items-center justify-center p-2 text-center">
                <span className="text-xs font-medium text-gray-700">{step}</span>
              </div>
              <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-primary-500 text-white text-xs flex items-center justify-center font-bold">
                {index + 1}
              </div>
            </div>
            {index < steps.length - 1 && (
              <svg
                className="w-8 h-8 mx-2 text-primary-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            )}
          </div>
        ))}
        {/* Arrow from last to first (cycle) */}
        {steps.length > 2 && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
            <svg
              className="w-8 h-8 text-primary-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
}

export default Diagram;

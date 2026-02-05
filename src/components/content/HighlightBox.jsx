export function HighlightBox({ variant = 'concept', title, text }) {
  const variants = {
    concept: {
      container: 'bg-blue-50 border-blue-200',
      icon: 'text-blue-500',
      title: 'text-blue-800',
      text: 'text-blue-700',
      iconPath: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
    },
    warning: {
      container: 'bg-orange-50 border-orange-200',
      icon: 'text-orange-500',
      title: 'text-orange-800',
      text: 'text-orange-700',
      iconPath: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z',
    },
    tip: {
      container: 'bg-green-50 border-green-200',
      icon: 'text-green-500',
      title: 'text-green-800',
      text: 'text-green-700',
      iconPath: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
    },
    example: {
      container: 'bg-purple-50 border-purple-200',
      icon: 'text-purple-500',
      title: 'text-purple-800',
      text: 'text-purple-700',
      iconPath: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
    },
    info: {
      container: 'bg-gray-50 border-gray-200',
      icon: 'text-gray-500',
      title: 'text-gray-800',
      text: 'text-gray-700',
      iconPath: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    },
  };

  const style = variants[variant] || variants.concept;

  return (
    <div className={`my-4 p-4 rounded-lg border ${style.container}`}>
      <div className="flex items-start space-x-3">
        <svg
          className={`w-6 h-6 flex-shrink-0 mt-0.5 ${style.icon}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={style.iconPath}
          />
        </svg>
        <div className="flex-1">
          {title && (
            <h4 className={`font-semibold mb-1 ${style.title}`}>{title}</h4>
          )}
          <p className={`leading-relaxed ${style.text}`}>{text}</p>
        </div>
      </div>
    </div>
  );
}

export default HighlightBox;

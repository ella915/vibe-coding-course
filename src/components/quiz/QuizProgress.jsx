export function QuizProgress({ current, total, answers }) {
  const progress = ((current + 1) / total) * 100;
  const answeredCount = Object.keys(answers).length;

  return (
    <div className="mb-6">
      {/* Progress bar */}
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden mb-2">
        <div
          className="h-full bg-primary-500 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Progress text */}
      <div className="flex items-center justify-between text-sm text-gray-500">
        <span>
          Question {current + 1} of {total}
        </span>
        <span>
          {answeredCount} answered
        </span>
      </div>
    </div>
  );
}

export default QuizProgress;

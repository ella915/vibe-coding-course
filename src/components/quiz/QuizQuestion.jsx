export function QuizQuestion({
  question,
  questionNumber,
  totalQuestions,
  selectedAnswer,
  onAnswer,
}) {
  const { type, question: questionText, options } = question;

  const renderQuestionContent = () => {
    switch (type) {
      case 'multiple-choice':
      case 'scenario':
        return (
          <MultipleChoice
            options={options}
            selectedAnswer={selectedAnswer}
            onAnswer={onAnswer}
          />
        );

      case 'multiple-select':
        return (
          <MultipleSelect
            options={options}
            selectedAnswers={selectedAnswer || []}
            onAnswer={onAnswer}
          />
        );

      case 'true-false':
        return (
          <TrueFalse
            selectedAnswer={selectedAnswer}
            onAnswer={onAnswer}
          />
        );

      case 'fill-blank':
        return (
          <FillBlank
            value={selectedAnswer || ''}
            onAnswer={onAnswer}
          />
        );

      default:
        return (
          <MultipleChoice
            options={options}
            selectedAnswer={selectedAnswer}
            onAnswer={onAnswer}
          />
        );
    }
  };

  return (
    <div>
      {/* Question header */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm font-medium text-primary-600">
          Question {questionNumber} of {totalQuestions}
        </span>
        <span className="text-xs text-gray-500 capitalize px-2 py-1 bg-gray-100 rounded">
          {type.replace('-', ' ')}
        </span>
      </div>

      {/* Question text */}
      <h3 className="text-lg font-medium text-gray-900 mb-6">
        {questionText}
      </h3>

      {/* Answer options */}
      {renderQuestionContent()}
    </div>
  );
}

function MultipleChoice({ options, selectedAnswer, onAnswer }) {
  return (
    <div className="space-y-3">
      {options.map((option, index) => (
        <label
          key={index}
          className={`flex items-center p-4 rounded-lg border-2 cursor-pointer transition-all ${
            selectedAnswer === index
              ? 'border-primary-500 bg-primary-50'
              : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
          }`}
        >
          <input
            type="radio"
            name="answer"
            checked={selectedAnswer === index}
            onChange={() => onAnswer(index)}
            className="sr-only"
          />
          <span
            className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center mr-3 ${
              selectedAnswer === index
                ? 'border-primary-500 bg-primary-500'
                : 'border-gray-300'
            }`}
          >
            {selectedAnswer === index && (
              <span className="w-2 h-2 rounded-full bg-white" />
            )}
          </span>
          <span className="text-gray-700">{option}</span>
        </label>
      ))}
    </div>
  );
}

function MultipleSelect({ options, selectedAnswers, onAnswer }) {
  const handleToggle = (index) => {
    const newAnswers = selectedAnswers.includes(index)
      ? selectedAnswers.filter((i) => i !== index)
      : [...selectedAnswers, index];
    onAnswer(newAnswers);
  };

  return (
    <div className="space-y-3">
      <p className="text-sm text-gray-500 mb-2">Select all that apply</p>
      {options.map((option, index) => (
        <label
          key={index}
          className={`flex items-center p-4 rounded-lg border-2 cursor-pointer transition-all ${
            selectedAnswers.includes(index)
              ? 'border-primary-500 bg-primary-50'
              : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
          }`}
        >
          <input
            type="checkbox"
            checked={selectedAnswers.includes(index)}
            onChange={() => handleToggle(index)}
            className="sr-only"
          />
          <span
            className={`flex-shrink-0 w-6 h-6 rounded border-2 flex items-center justify-center mr-3 ${
              selectedAnswers.includes(index)
                ? 'border-primary-500 bg-primary-500'
                : 'border-gray-300'
            }`}
          >
            {selectedAnswers.includes(index) && (
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            )}
          </span>
          <span className="text-gray-700">{option}</span>
        </label>
      ))}
    </div>
  );
}

function TrueFalse({ selectedAnswer, onAnswer }) {
  return (
    <div className="flex space-x-4">
      {[true, false].map((value) => (
        <label
          key={String(value)}
          className={`flex-1 flex items-center justify-center p-4 rounded-lg border-2 cursor-pointer transition-all ${
            selectedAnswer === value
              ? 'border-primary-500 bg-primary-50'
              : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
          }`}
        >
          <input
            type="radio"
            name="trueFalse"
            checked={selectedAnswer === value}
            onChange={() => onAnswer(value)}
            className="sr-only"
          />
          <span className="text-lg font-medium text-gray-700">
            {value ? 'True' : 'False'}
          </span>
        </label>
      ))}
    </div>
  );
}

function FillBlank({ value, onAnswer }) {
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => onAnswer(e.target.value)}
        placeholder="Type your answer here..."
        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-500 focus:ring-0 outline-none transition-colors"
      />
    </div>
  );
}

export default QuizQuestion;

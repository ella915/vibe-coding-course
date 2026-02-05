import { useCourse } from '../../context/CourseContext';

export function BookmarkButton({ sectionId }) {
  const { toggleBookmark, isBookmarked } = useCourse();
  const bookmarked = isBookmarked(sectionId);

  return (
    <button
      onClick={() => toggleBookmark(sectionId)}
      className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
        bookmarked
          ? 'text-yellow-600 bg-yellow-50 hover:bg-yellow-100'
          : 'text-gray-500 bg-gray-100 hover:bg-gray-200'
      }`}
      aria-label={bookmarked ? 'Remove bookmark' : 'Add bookmark'}
    >
      <svg
        className="w-5 h-5"
        fill={bookmarked ? 'currentColor' : 'none'}
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
        />
      </svg>
      <span className="text-sm font-medium">
        {bookmarked ? 'Bookmarked' : 'Bookmark'}
      </span>
    </button>
  );
}

export default BookmarkButton;

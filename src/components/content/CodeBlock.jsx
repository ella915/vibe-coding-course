import { useState } from 'react';

export function CodeBlock({ code, language = 'text', title }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  // Simple syntax highlighting based on language
  const highlightedCode = highlightSyntax(code, language);

  return (
    <div className="my-4 rounded-lg overflow-hidden bg-gray-900 shadow-lg">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
        <div className="flex items-center space-x-2">
          <span className="text-xs font-mono text-gray-400 uppercase">
            {language}
          </span>
          {title && (
            <>
              <span className="text-gray-600">•</span>
              <span className="text-sm text-gray-300">{title}</span>
            </>
          )}
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center space-x-1 px-2 py-1 text-xs text-gray-400 hover:text-white rounded transition-colors"
          aria-label="Copy code"
        >
          {copied ? (
            <>
              <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-green-400">Copied!</span>
            </>
          ) : (
            <>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code */}
      <div className="overflow-x-auto">
        <pre className="p-4 text-sm font-mono leading-relaxed">
          <code
            className="text-gray-100"
            dangerouslySetInnerHTML={{ __html: highlightedCode }}
          />
        </pre>
      </div>
    </div>
  );
}

// Simple syntax highlighting using placeholder tokens to avoid conflicts
function highlightSyntax(code, language) {
  let text = escapeHtml(code);
  const tokens = [];

  // Helper to replace match with a placeholder token
  const tokenize = (regex, className, transform) => {
    text = text.replace(regex, (...args) => {
      const match = args[0];
      // Don't tokenize if it contains a placeholder
      if (match.includes('\x00')) return match;
      const index = tokens.length;
      // Allow custom transform function for complex patterns
      const result = transform ? transform(args, index, tokens) : match;
      if (result === null) return match; // Skip if transform returns null
      tokens.push({ match: result, className });
      return `\x00${index}\x00`;
    });
  };

  // Apply patterns in order (first match wins due to tokenization)

  // Comments first (highest priority)
  tokenize(/(\/\/.*$|#.*$|\/\*[\s\S]*?\*\/)/gm, 'text-gray-500');

  // Strings
  tokenize(/("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|`(?:[^`\\]|\\.)*`)/g, 'text-green-400');

  // Bash-specific patterns
  if (language === 'bash' || language === 'shell') {
    // Commands
    tokenize(/\b(cd|ls|mkdir|rm|cp|mv|touch|cat|echo|pwd|git|npm|npx|node|python|pip|curl|wget|chmod|sudo|export|source|which|man|clear|history|grep|find|head|tail|less|more|nano|vim|code|claude)\b/g, 'text-yellow-400');
    // Flags - match with preceding space, but only highlight the flag
    text = text.replace(/(\s)(-{1,2}[a-zA-Z][a-zA-Z0-9-]*)/g, (match, space, flag) => {
      if (match.includes('\x00')) return match;
      const index = tokens.length;
      tokens.push({ match: flag, className: 'text-cyan-400' });
      return `${space}\x00${index}\x00`;
    });
  }

  // Keywords (for JS/other languages)
  tokenize(/\b(const|let|var|function|return|if|else|for|while|do|switch|case|break|continue|class|extends|import|export|from|default|async|await|try|catch|finally|throw|new|this|typeof|instanceof|true|false|null|undefined|void)\b/g, 'text-purple-400');

  // Function calls
  tokenize(/\b([a-zA-Z_][a-zA-Z0-9_]*)\s*\(/g, 'text-blue-400');

  // Numbers
  tokenize(/\b(\d+\.?\d*)\b/g, 'text-orange-400');

  // Replace tokens with highlighted spans
  text = text.replace(/\x00(\d+)\x00/g, (_, index) => {
    const token = tokens[parseInt(index)];
    return `<span class="${token.className}">${token.match}</span>`;
  });

  return text;
}

function escapeHtml(text) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

export default CodeBlock;

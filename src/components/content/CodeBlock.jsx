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

// Simple syntax highlighting (no external library)
function highlightSyntax(code, language) {
  let highlighted = escapeHtml(code);

  // Common patterns for all languages
  const patterns = {
    comment: {
      regex: /(\/\/.*$|#.*$|\/\*[\s\S]*?\*\/)/gm,
      class: 'text-gray-500',
    },
    string: {
      regex: /("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|`(?:[^`\\]|\\.)*`)/g,
      class: 'text-green-400',
    },
    number: {
      regex: /\b(\d+\.?\d*)\b/g,
      class: 'text-orange-400',
    },
    keyword: {
      regex: /\b(const|let|var|function|return|if|else|for|while|do|switch|case|break|continue|class|extends|import|export|from|default|async|await|try|catch|finally|throw|new|this|typeof|instanceof|true|false|null|undefined|void)\b/g,
      class: 'text-purple-400',
    },
    function: {
      regex: /\b([a-zA-Z_][a-zA-Z0-9_]*)\s*\(/g,
      class: 'text-blue-400',
    },
  };

  // Bash-specific patterns
  if (language === 'bash' || language === 'shell') {
    patterns.command = {
      regex: /\b(cd|ls|mkdir|rm|cp|mv|touch|cat|echo|pwd|git|npm|node|python|pip|curl|wget|chmod|sudo|export)\b/g,
      class: 'text-yellow-400',
    };
    patterns.flag = {
      regex: /\s(-{1,2}[a-zA-Z][a-zA-Z0-9-]*)/g,
      class: 'text-cyan-400',
    };
  }

  // Apply highlighting in specific order to avoid conflicts
  const order = ['comment', 'string', 'command', 'flag', 'keyword', 'function', 'number'];

  order.forEach((type) => {
    if (patterns[type]) {
      highlighted = highlighted.replace(patterns[type].regex, (match) => {
        // Don't highlight if already inside a span
        if (match.includes('<span')) return match;
        return `<span class="${patterns[type].class}">${match}</span>`;
      });
    }
  });

  return highlighted;
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

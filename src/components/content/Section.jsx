import { CodeBlock } from './CodeBlock';
import { HighlightBox } from './HighlightBox';
import { Collapsible } from './Collapsible';
import { Diagram } from './Diagram';
import { ComparisonTable } from './ComparisonTable';

export function Section({ content }) {
  if (!content || !Array.isArray(content)) {
    return null;
  }

  return (
    <div className="prose prose-gray max-w-none">
      {content.map((block, index) => (
        <ContentBlock key={index} block={block} />
      ))}
    </div>
  );
}

function ContentBlock({ block }) {
  switch (block.type) {
    case 'paragraph':
      return (
        <p className="text-gray-700 leading-relaxed mb-4">
          {block.text}
        </p>
      );

    case 'heading':
      const HeadingTag = `h${block.level || 2}`;
      return (
        <HeadingTag className="font-bold text-gray-900 mt-8 mb-4">
          {block.text}
        </HeadingTag>
      );

    case 'code':
      return (
        <CodeBlock
          code={block.code}
          language={block.language}
          title={block.title}
        />
      );

    case 'highlight':
      return (
        <HighlightBox
          variant={block.variant}
          title={block.title}
          text={block.text}
        />
      );

    case 'list':
      return (
        <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700">
          {block.items.map((item, index) => (
            <li key={index} className="leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      );

    case 'numbered-list':
      return (
        <ol className="list-decimal list-inside space-y-2 mb-4 text-gray-700">
          {block.items.map((item, index) => (
            <li key={index} className="leading-relaxed">
              {item}
            </li>
          ))}
        </ol>
      );

    case 'collapsible':
      return (
        <Collapsible title={block.title}>
          <div className="space-y-4">
            {block.content.map((innerBlock, index) => (
              <ContentBlock key={index} block={innerBlock} />
            ))}
          </div>
        </Collapsible>
      );

    case 'diagram':
      return (
        <Diagram
          variant={block.variant}
          title={block.title}
          steps={block.steps}
          data={block.data}
        />
      );

    case 'comparison':
      return (
        <ComparisonTable
          title={block.title}
          headers={block.headers}
          rows={block.rows}
        />
      );

    case 'image':
      return (
        <figure className="my-6">
          <img
            src={block.src}
            alt={block.alt || ''}
            className="rounded-lg shadow-md w-full"
          />
          {block.caption && (
            <figcaption className="text-center text-sm text-gray-500 mt-2">
              {block.caption}
            </figcaption>
          )}
        </figure>
      );

    case 'quote':
      return (
        <blockquote className="border-l-4 border-primary-500 pl-4 py-2 my-4 bg-primary-50 rounded-r-lg">
          <p className="text-gray-700 italic">{block.text}</p>
          {block.author && (
            <cite className="text-sm text-gray-500 not-italic">
              — {block.author}
            </cite>
          )}
        </blockquote>
      );

    case 'divider':
      return <hr className="my-8 border-gray-200" />;

    default:
      console.warn(`Unknown content block type: ${block.type}`);
      return null;
  }
}

export default Section;

import type { ReactNode } from "react";

/**
 * Minimal markdown → React for blog bodies.
 * Supports: paragraphs, ##/### headings, - lists, [links](url), **bold**, *italic*.
 * No external deps — keep posts simple.
 */

function renderInline(text: string, keyPrefix: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  // Order: links, bold, italic
  const pattern =
    /(\[([^\]]+)\]\((https?:\/\/[^)\s]+)\))|(\*\*([^*]+)\*\*)|(\*([^*]+)\*)/g;
  let last = 0;
  let match: RegExpExecArray | null;
  let i = 0;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > last) {
      nodes.push(text.slice(last, match.index));
    }
    if (match[1]) {
      nodes.push(
        <a
          key={`${keyPrefix}-a-${i++}`}
          href={match[3]}
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-600 underline decoration-purple-500/30 underline-offset-2 transition hover:decoration-purple-600"
        >
          {match[2]}
        </a>,
      );
    } else if (match[4]) {
      nodes.push(
        <strong key={`${keyPrefix}-b-${i++}`} className="font-semibold text-cloud-ink">
          {match[5]}
        </strong>,
      );
    } else if (match[6]) {
      nodes.push(
        <em key={`${keyPrefix}-i-${i++}`} className="italic">
          {match[7]}
        </em>,
      );
    }
    last = match.index + match[0].length;
  }

  if (last < text.length) {
    nodes.push(text.slice(last));
  }

  return nodes;
}

export function MarkdownBody({ source }: { source: string }) {
  const blocks = source.trim().split(/\n\n+/);
  const elements: ReactNode[] = [];

  blocks.forEach((block, bi) => {
    const trimmed = block.trim();
    if (!trimmed) return;

    if (trimmed.startsWith("### ")) {
      elements.push(
        <h3
          key={`h3-${bi}`}
          className="mt-8 font-[family-name:var(--font-display)] text-xl font-semibold text-cloud-ink md:text-2xl"
        >
          {renderInline(trimmed.slice(4), `h3-${bi}`)}
        </h3>,
      );
      return;
    }

    if (trimmed.startsWith("## ")) {
      elements.push(
        <h2
          key={`h2-${bi}`}
          className="mt-10 font-[family-name:var(--font-display)] text-2xl font-semibold text-cloud-ink md:text-3xl"
        >
          {renderInline(trimmed.slice(3), `h2-${bi}`)}
        </h2>,
      );
      return;
    }

    const listLines = trimmed.split("\n");
    if (listLines.every((line) => /^[-*]\s+/.test(line.trim()))) {
      elements.push(
        <ul key={`ul-${bi}`} className="mt-4 list-disc space-y-2 pl-5 text-cloud-muted">
          {listLines.map((line, li) => (
            <li key={`li-${bi}-${li}`} className="leading-relaxed">
              {renderInline(line.trim().replace(/^[-*]\s+/, ""), `li-${bi}-${li}`)}
            </li>
          ))}
        </ul>,
      );
      return;
    }

    elements.push(
      <p key={`p-${bi}`} className="mt-4 text-[1.05rem] leading-[1.75] text-cloud-muted">
        {trimmed.split("\n").map((line, li, arr) => (
          <span key={`pl-${bi}-${li}`}>
            {renderInline(line, `p-${bi}-${li}`)}
            {li < arr.length - 1 ? <br /> : null}
          </span>
        ))}
      </p>,
    );
  });

  return <div className="blog-prose">{elements}</div>;
}

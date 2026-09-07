import { useState, type ReactNode } from "react";
import Card from "../Card/Card";

interface ExpandableCardProps {
  emoji: string;
  title: string;
  color: string;
  summary: ReactNode;
  more: ReactNode;
  className?: string;
}

export default function ExpandableCard({
  emoji,
  title,
  color,
  summary,
  more,
  className = "",
}: ExpandableCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <Card glow={color} className={className}>
      <div
        className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl text-xl"
        style={{ backgroundColor: `${color}22`, color }}
      >
        <span aria-hidden="true">{emoji}</span>
      </div>
      <h3 className="mb-2 text-lg font-semibold text-white">{title}</h3>
      <div className="text-sm text-white/75">{summary}</div>

      {expanded && (
        <div className="mt-3 border-t border-white/10 pt-3 text-sm text-white/75">
          {more}
        </div>
      )}

      <button
        onClick={() => setExpanded((current) => !current)}
        className="mt-4 flex items-center gap-1 text-sm font-semibold transition-colors"
        style={{ color }}
        aria-expanded={expanded}
      >
        {expanded ? "Mostrar menos ▲" : "Gostou? Leia mais! ▼"}
      </button>
    </Card>
  );
}

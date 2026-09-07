import Ghost from "./Ghost";

interface GhostSpec {
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  size: number;
  color: string;
  variant?: 1 | 2 | 3;
  delay?: number;
  opacity?: number;
  rotate?: number;
}

interface GhostFieldProps {
  ghosts: GhostSpec[];
  className?: string;
}

/**
 * Camada decorativa de fantasmas flutuantes, posicionados de forma
 * absoluta dentro de um container relativo. Não intercepta cliques.
 */
export default function GhostField({ ghosts, className = "" }: GhostFieldProps) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {ghosts.map((ghost, index) => (
        <div
          key={index}
          className="absolute animate-float"
          style={{
            top: ghost.top,
            bottom: ghost.bottom,
            left: ghost.left,
            right: ghost.right,
            animationDelay: `${ghost.delay ?? index * 0.6}s`,
            opacity: ghost.opacity ?? 0.85,
            ["--ghost-rot" as string]: `${ghost.rotate ?? 0}deg`,
          }}
        >
          <Ghost color={ghost.color} size={ghost.size} variant={ghost.variant ?? 1} />
        </div>
      ))}
    </div>
  );
}

export type { GhostSpec };

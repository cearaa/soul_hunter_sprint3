interface GhostProps {
  color?: string;
  size?: number;
  className?: string;
  style?: React.CSSProperties;
  variant?: 1 | 2 | 3;
}

/**
 * Fantasma em SVG, com aura de brilho colorida.
 * Usado espalhado pelas páginas para mais ar visual do ngc
 */
export default function Ghost({
  color = "#22d3ee",
  size = 80,
  className = "",
  style,
  variant = 1,
}: GhostProps) {
  const bodyPaths: Record<1 | 2 | 3, string> = {
    1: "M50 8C27 8 12 26 12 50v34c0 3 3 5 6 3l7-5 7 6c2 2 5 2 7 0l6-5 6 5c2 2 5 2 7 0l6-5 7 5c3 2 6 0 6-3V50C88 26 73 8 50 8Z",
    2: "M50 6C29 6 14 24 14 48v38c0 3 3 5 6 2l6-6 8 7c2 2 5 2 7 0l5-5 5 5c2 2 5 2 7 0l8-7 6 6c3 3 6 1 6-2V48C86 24 71 6 50 6Z",
    3: "M50 10C30 10 16 27 16 49v33c0 3 3 5 6 3l6-5 8 6c2 1 4 1 6 0l8-6 8 6c2 1 4 1 6 0l8-6 6 5c3 2 6 0 6-3V49C88 27 74 10 50 10Z",
  };

  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={className}
      style={style}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id={`ghost-glow-${color.replace("#", "")}`} cx="50%" cy="45%" r="60%">
          <stop offset="0%" stopColor={color} stopOpacity="0.55" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="50" cy="50" r="48" fill={`url(#ghost-glow-${color.replace("#", "")})`} />
      <path
        d={bodyPaths[variant]}
        fill="white"
        fillOpacity="0.94"
        stroke={color}
        strokeWidth="2"
      />
      <circle cx="39" cy="46" r="4.2" fill={color} />
      <circle cx="61" cy="46" r="4.2" fill={color} />
      <path d="M43 60c3 3 11 3 14 0" stroke={color} strokeWidth="2.2" fill="none" strokeLinecap="round" />
    </svg>
  );
}

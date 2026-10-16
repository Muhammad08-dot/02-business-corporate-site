/**
 * Clean SVG wordmarks for the client strip — drawn, not photographed,
 * monochrome navy at rest, full opacity on hover.
 */
export default function LogoWordmark({
  letters,
  word,
  name,
}: {
  letters: string;
  word: string;
  name: string;
}) {
  return (
    <svg
      viewBox="0 0 176 40"
      role="img"
      aria-label={name}
      className="h-9 w-auto opacity-55 transition-opacity duration-200 hover:opacity-100"
    >
      <rect x="0" y="6" width="28" height="28" rx="3" fill="#0F1F3D" />
      <text
        x="14"
        y="25"
        textAnchor="middle"
        fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
        fontSize="11"
        fontWeight="800"
        fill="#ffffff"
      >
        {letters}
      </text>
      <text
        x="36"
        y="24"
        fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
        fontSize="12.5"
        fontWeight="700"
        letterSpacing="1.5"
        fill="#0F1F3D"
      >
        {word}
      </text>
    </svg>
  );
}

export default function VeteranHomeIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      {/* Flag pole */}
      <line x1="24" y1="14" x2="24" y2="104" stroke="#0F2A4A" strokeWidth="3" strokeLinecap="round" />
      {/* Flag */}
      <path
        d="M24 16 L74 16 L66 30 L74 44 L24 44 Z"
        fill="#A98B5D"
      />
      <line x1="32" y1="20" x2="32" y2="40" stroke="#FFFFFF" strokeWidth="2" opacity="0.5" />
      <line x1="40" y1="20" x2="40" y2="40" stroke="#FFFFFF" strokeWidth="2" opacity="0.5" />
      <line x1="48" y1="20" x2="48" y2="40" stroke="#FFFFFF" strokeWidth="2" opacity="0.5" />
      <line x1="56" y1="20" x2="56" y2="40" stroke="#FFFFFF" strokeWidth="2" opacity="0.5" />

      {/* House sitting at base of pole */}
      <g>
        <rect x="50" y="72" width="48" height="32" fill="#0F2A4A" />
        <path d="M44 76 L74 52 L104 76 L98 76 L74 58 L50 76 Z" fill="#0F2A4A" />
        <rect x="68" y="86" width="14" height="18" fill="#FFFFFF" />
        <rect x="86" y="80" width="9" height="9" fill="#FFFFFF" opacity="0.85" />
      </g>

      {/* Base line */}
      <line x1="14" y1="104" x2="106" y2="104" stroke="#0F2A4A" strokeWidth="2" strokeLinecap="round" opacity="0.3" />
    </svg>
  );
}

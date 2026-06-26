export function ReplenishmentCycle() {
  return (
    <svg viewBox="0 0 440 360" className="block w-full h-auto max-w-[380px] mx-auto" aria-hidden>
      <defs>
        <marker id="rc" markerWidth="9" markerHeight="9" refX="5" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6" fill="none" stroke="#758680" strokeWidth="1.3" />
        </marker>
      </defs>
      <g fill="none" stroke="#B5C7C0" strokeWidth="1.6" markerEnd="url(#rc)">
        <path d="M282,66 C330,80 352,116 358,154" />
        <path d="M358,206 C352,244 330,280 282,294" />
        <path d="M158,294 C110,280 88,244 82,206" />
        <path d="M82,154 C88,116 110,80 158,66" />
      </g>
      <g className="font-sans" fontSize="12" fontWeight="500" fill="#14201D" textAnchor="middle">
        <rect x="160" y="42" width="120" height="40" rx="9" fill="#F4F9F6" stroke="#CDDDD6" />
        <text x="220" y="66">Order placed</text>
        <rect x="300" y="160" width="120" height="40" rx="9" fill="#F4F9F6" stroke="#CDDDD6" />
        <text x="360" y="184">Consumed</text>
        <rect x="160" y="278" width="120" height="40" rx="9" fill="#E0D9F7" stroke="#5B3FBE" />
        <text x="220" y="302">Predict next</text>
        <rect x="20" y="160" width="120" height="40" rx="9" fill="#E0D9F7" stroke="#5B3FBE" />
        <text x="80" y="184">Nudge in time</text>
      </g>
      <text x="220" y="176" textAnchor="middle" className="font-serif" fontSize="12" fill="#758680">the reorder</text>
      <text x="220" y="193" textAnchor="middle" className="font-serif" fontSize="12" fill="#758680">rhythm</text>
    </svg>
  );
}

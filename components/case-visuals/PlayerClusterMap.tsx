const LEFT = [[45,70],[80,60],[115,72],[60,95],[95,100],[130,98],[40,125],[75,128],[110,130],[140,120],[55,155],[90,160],[125,158],[70,188],[105,190],[48,175]];
const COLS = ["#5B3FBE", "#8B73D8", "#758680"];
const OVALS = [
  { y: 60, c: "#5B3FBE", label: "Aggressive openers" },
  { y: 132, c: "#8B73D8", label: "Anchors" },
  { y: 204, c: "#758680", label: "Finishers" },
];
const OFF = [[-34,-7],[30,-5],[-16,10],[22,9],[2,1]];

export function PlayerClusterMap() {
  return (
    <svg viewBox="0 0 740 260" className="block w-full h-auto" aria-hidden>
      <defs>
        <marker id="pcm" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6" fill="none" stroke="#758680" strokeWidth="1.3" />
        </marker>
      </defs>
      {LEFT.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="5" fill={COLS[i % 3]} opacity="0.85" />
      ))}
      <text x="92" y="238" textAnchor="middle" className="font-mono" fontSize="10" letterSpacing="0.5" fill="#4F635D">RAW PLAYERS</text>
      <line x1="168" y1="130" x2="202" y2="130" stroke="#758680" strokeWidth="1.4" markerEnd="url(#pcm)" />
      <rect x="208" y="104" width="112" height="52" rx="10" fill="#F4F9F6" stroke="#5B3FBE" strokeWidth="1.3" />
      <text x="264" y="127" textAnchor="middle" className="font-sans" fontSize="12.5" fontWeight="500" fill="#14201D">Clustering</text>
      <text x="264" y="143" textAnchor="middle" className="font-mono" fontSize="8.5" letterSpacing="0.5" fill="#758680">THE MODEL</text>
      {OVALS.map((o, i) => (
        <g key={i}>
          <path d={`M326,130 C380,130 400,${o.y} 440,${o.y}`} fill="none" stroke="#B5C7C0" strokeWidth="1.5" markerEnd="url(#pcm)" />
          <ellipse cx="500" cy={o.y} rx="54" ry="26" fill="#F4F9F6" stroke="#CDDDD6" />
          {OFF.map(([dx, dy], j) => (
            <circle key={j} cx={500 + dx} cy={o.y + dy} r="4.5" fill={o.c} opacity="0.85" />
          ))}
          <text x="562" y={o.y + 4} className="font-sans" fontSize="11" fill="#2A362F">{o.label}</text>
        </g>
      ))}
    </svg>
  );
}

const CATS = [
  { y: 70, c: "#5B3FBE", cat: "Pet type", items: ["Dog · 0.82", "Cat · 0.18"] },
  { y: 150, c: "#8B73D8", cat: "Category", items: ["Dry food · 0.74", "Treats · 0.55"] },
  { y: 230, c: "#4F635D", cat: "Brand", items: ["Royal Canin · 0.68", "Drools · 0.41"] },
];

export function AffinityMap() {
  return (
    <svg viewBox="0 0 720 300" className="block w-full h-auto" aria-hidden>
      <rect x="12" y="120" width="152" height="52" rx="13" fill="#F4F9F6" stroke="#5B3FBE" strokeWidth="1.6" />
      <text x="88" y="150" textAnchor="middle" className="font-serif" fontSize="13" fontWeight="600" fill="#14201D">Customer affinity</text>
      {CATS.map((c, i) => (
        <g key={i}>
          <path d={`M164,146 C250,146 270,${c.y} 348,${c.y}`} fill="none" stroke={c.c} strokeWidth="2.6" />
          <text x="356" y={c.y + 4} className="font-sans" fontSize="13" fill="#14201D">{c.cat}</text>
          {c.items.map((it, j) => {
            const sy = c.y + (j - (c.items.length - 1) / 2) * 24;
            return (
              <g key={j}>
                <path d={`M466,${c.y} C492,${c.y} 500,${sy} 520,${sy}`} fill="none" stroke={c.c} strokeWidth="1.4" opacity="0.85" />
                <text x="526" y={sy + 3.5} className="font-sans" fontSize="11" fill="#3D4E48">{it}</text>
              </g>
            );
          })}
        </g>
      ))}
    </svg>
  );
}

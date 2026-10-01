// Original generated artwork (SVG) — replace with real photos by adding an `image` field to products.
export default function ProductArt({ product, style }) {
  const [a, b] = product.colors
  const c = product.category
  const shape = {
    camisas: 'M60 40 L90 25 Q100 35 110 25 L140 40 L165 75 L145 88 L138 78 L138 175 L62 175 L62 78 L55 88 L35 75 Z',
    polos: 'M60 45 L88 30 L100 50 L112 30 L140 45 L162 80 L144 90 L138 82 L138 172 L62 172 L62 82 L56 90 L38 80 Z',
    blazers: 'M58 38 L88 24 L100 90 L112 24 L142 38 L160 175 L106 175 L100 120 L94 175 L40 175 Z',
    calcas: 'M68 25 L132 25 L140 178 L110 178 L100 70 L90 178 L60 178 Z',
    acessorios: 'M40 95 Q100 70 160 95 L160 110 Q100 85 40 110 Z M85 86 L115 86 L115 118 L85 118 Z',
  }[c]
  if (product.image) return <img src={product.image} alt={product.name} style={{ width: '100%', aspectRatio: '4/5', objectFit: 'cover', ...style }} />
  return (
    <svg viewBox="0 0 200 250" role="img" aria-label={product.name} style={{ width: '100%', display: 'block', background: '#f1ede6', ...style }}>
      <rect width="200" height="250" fill="#f1ede6" />
      <ellipse cx="100" cy="215" rx="70" ry="8" fill="#000" opacity="0.06" />
      <g transform="translate(0,20)">
        <path d={shape} fill={a} stroke={b} strokeWidth="2" strokeLinejoin="round" />
      </g>
    </svg>
  )
}

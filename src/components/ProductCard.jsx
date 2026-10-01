import { Link } from 'react-router-dom'
import ProductArt from './ProductArt.jsx'
import { formatPrice } from '../data/products.js'

export default function ProductCard({ product }) {
  return (
    <Link to={`/produto/${product.id}`} className="card">
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <ProductArt product={product} />
        {product.tag && <span className="badge">{product.tag}</span>}
      </div>
      <div style={{ padding: '12px 2px', display: 'flex', flexDirection: 'column', gap: 4 }}>
        <span style={{ fontSize: 14 }}>{product.name}</span>
        <span style={{ display: 'flex', gap: 8, alignItems: 'baseline' }}>
          {product.oldPrice && <s style={{ color: '#8a857c', fontSize: 13 }}>{formatPrice(product.oldPrice)}</s>}
          <strong style={{ fontSize: 15 }}>{formatPrice(product.price)}</strong>
        </span>
        <span style={{ fontSize: 12, color: '#6b665e' }}>ou 6x de {formatPrice(product.price / 6)} sem juros</span>
      </div>
    </Link>
  )
}

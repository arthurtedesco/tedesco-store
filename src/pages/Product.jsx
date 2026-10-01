import { useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { categories, products, formatPrice } from '../data/products.js'
import ProductArt from '../components/ProductArt.jsx'
import ProductCard from '../components/ProductCard.jsx'
import { useCart } from '../cart.jsx'

export default function Product() {
  const { id } = useParams()
  const nav = useNavigate()
  const { add } = useCart()
  const p = products.find((x) => x.id === id)
  const [size, setSize] = useState(null)
  const [error, setError] = useState(false)
  if (!p) return <div className="container" style={{ padding: 80, textAlign: 'center' }}>Produto não encontrado.</div>
  const cat = categories.find((c) => c.slug === p.category)
  const related = products.filter((x) => x.category === p.category && x.id !== p.id).slice(0, 4)
  const buy = () => { if (!size) return setError(true); add(p.id, size); nav('/carrinho') }

  return (
    <section className="container" style={{ padding: '32px 0' }}>
      <div style={{ fontSize: 13, color: '#6b665e', marginBottom: 20 }}>
        <Link to="/">Início</Link> / <Link to={`/categoria/${cat.slug}`}>{cat.name}</Link> / {p.name}
      </div>
      <div className="pdp">
        <ProductArt product={p} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <h1 style={{ fontFamily: 'Georgia, serif', fontWeight: 400, margin: 0 }}>{p.name}</h1>
          <div style={{ display: 'flex', gap: 12, alignItems: 'baseline' }}>
            {p.oldPrice && <s style={{ color: '#8a857c' }}>{formatPrice(p.oldPrice)}</s>}
            <strong style={{ fontSize: 24 }}>{formatPrice(p.price)}</strong>
          </div>
          <span style={{ fontSize: 13, color: '#6b665e', marginTop: -12 }}>ou 6x de {formatPrice(p.price / 6)} sem juros</span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <strong style={{ fontSize: 13 }}>Tamanho</strong>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {p.sizes.map((s) => (
                <button key={s} className={`size ${size === s ? 'active' : ''}`} onClick={() => { setSize(s); setError(false) }}>{s}</button>
              ))}
            </div>
            {error && <span style={{ color: '#a33', fontSize: 13 }}>Selecione um tamanho.</span>}
          </div>
          <button className="btn" onClick={buy} style={{ width: '100%' }}>Adicionar à sacola</button>
          <p style={{ color: '#4a453e', lineHeight: 1.6, margin: 0 }}>{p.description}</p>
        </div>
      </div>
      {related.length > 0 && (
        <div style={{ marginTop: 56 }}>
          <h2 className="section-title">Você também pode gostar</h2>
          <div className="grid">{related.map((r) => <ProductCard key={r.id} product={r} />)}</div>
        </div>
      )}
    </section>
  )
}

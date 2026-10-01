import { Link } from 'react-router-dom'
import { categories, products } from '../data/products.js'
import ProductCard from '../components/ProductCard.jsx'
import ProductArt from '../components/ProductArt.jsx'

export default function Home() {
  return (
    <>
      <section style={{ background: '#e9e2d6' }}>
        <div className="container hero">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20, alignItems: 'flex-start' }}>
            <span style={{ letterSpacing: 3, fontSize: 12, color: '#7a6a52' }}>COLEÇÃO VERÃO</span>
            <h1 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(36px, 5vw, 60px)', lineHeight: 1.05, margin: 0, fontWeight: 400 }}>Leveza em cada detalhe</h1>
            <p style={{ maxWidth: 420, color: '#4a453e', margin: 0 }}>Linho, algodão e tricot em tons naturais. Peças pensadas para o calor, com o acabamento que você merece.</p>
            <Link to="/produtos" className="btn">Ver coleção</Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            <ProductArt product={products[0]} />
            <ProductArt product={products[7]} style={{ marginTop: 40 }} />
          </div>
        </div>
      </section>

      <section className="container" style={{ padding: '56px 0 16px' }}>
        <h2 className="section-title">Compre por categoria</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 16 }}>
          {categories.map((c) => {
            const p = products.find((x) => x.category === c.slug)
            return (
              <Link key={c.slug} to={`/categoria/${c.slug}`} className="card" style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <ProductArt product={p} />
                <strong style={{ fontSize: 15 }}>{c.name}</strong>
                <span style={{ fontSize: 12, color: '#6b665e' }}>{c.tagline}</span>
              </Link>
            )
          })}
        </div>
      </section>

      <section className="container" style={{ padding: '40px 0' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
          <h2 className="section-title">Destaques</h2>
          <Link to="/produtos" style={{ fontSize: 14, textDecoration: 'underline' }}>Ver tudo</Link>
        </div>
        <div className="grid">{products.slice(0, 8).map((p) => <ProductCard key={p.id} product={p} />)}</div>
      </section>

      <section style={{ background: '#1c1c1c', color: '#f1ede6' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 24, padding: '40px 0', textAlign: 'center' }}>
          {[['Frete grátis', 'Em compras acima de R$ 399'], ['6x sem juros', 'Em todo o site'], ['Troca fácil', 'Até 30 dias após o recebimento']].map(([t, d]) => (
            <div key={t} style={{ display: 'flex', flexDirection: 'column', gap: 6 }}><strong style={{ color: '#c8a97e' }}>{t}</strong><span style={{ fontSize: 13 }}>{d}</span></div>
          ))}
        </div>
      </section>
    </>
  )
}

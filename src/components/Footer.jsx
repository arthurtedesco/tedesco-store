import { Link } from 'react-router-dom'
import { categories } from '../data/products.js'

export default function Footer() {
  return (
    <footer style={{ background: '#1c1c1c', color: '#d9d4ca', marginTop: 64 }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 32, padding: '48px 0' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <span style={{ fontFamily: 'Georgia, serif', fontSize: 20, letterSpacing: 4, color: '#fff' }}>TEDESCO</span>
          <span style={{ fontSize: 13 }}>Moda masculina atemporal, feita para durar.</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: 14 }}>
          <strong style={{ color: '#fff' }}>Categorias</strong>
          {categories.map((c) => <Link key={c.slug} to={`/categoria/${c.slug}`}>{c.name}</Link>)}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: 14 }}>
          <strong style={{ color: '#fff' }}>Atendimento</strong>
          <span>contato@tedescostore.com</span><span>Seg a Sex, 9h às 18h</span>
        </div>
      </div>
      <div style={{ borderTop: '1px solid #333', textAlign: 'center', fontSize: 12, padding: 16 }}>© {new Date().getFullYear()} Tedesco Store</div>
    </footer>
  )
}

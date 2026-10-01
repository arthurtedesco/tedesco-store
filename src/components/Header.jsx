import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { categories } from '../data/products.js'
import { useCart } from '../cart.jsx'

export default function Header() {
  const { count } = useCart()
  const [open, setOpen] = useState(false)
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 20, background: '#fff', borderBottom: '1px solid #e8e3da' }}>
      <div style={{ background: '#1c1c1c', color: '#f1ede6', fontSize: 12, textAlign: 'center', padding: '8px 16px', letterSpacing: 1 }}>
        FRETE GRÁTIS ACIMA DE R$ 399 · TROCA FÁCIL EM 30 DIAS
      </div>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 68, gap: 16 }}>
        <button className="menu-btn" aria-label="Menu" onClick={() => setOpen(!open)}>☰</button>
        <Link to="/" style={{ fontFamily: 'Georgia, serif', fontSize: 24, letterSpacing: 4 }}>TEDESCO</Link>
        <nav className={`nav ${open ? 'open' : ''}`} onClick={() => setOpen(false)}>
          <NavLink to="/produtos">Novidades</NavLink>
          {categories.map((c) => <NavLink key={c.slug} to={`/categoria/${c.slug}`}>{c.name}</NavLink>)}
        </nav>
        <Link to="/carrinho" style={{ fontSize: 14, display: 'flex', gap: 6, alignItems: 'center' }}>
          Sacola <span style={{ background: '#c8a97e', color: '#1c1c1c', borderRadius: 999, minWidth: 22, height: 22, display: 'inline-grid', placeItems: 'center', fontSize: 12, fontWeight: 600 }}>{count}</span>
        </Link>
      </div>
    </header>
  )
}

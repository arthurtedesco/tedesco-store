import { Link } from 'react-router-dom'
import { useCart } from '../cart.jsx'
import { formatPrice } from '../data/products.js'
import ProductArt from '../components/ProductArt.jsx'

export default function Cart() {
  const { items, update, total } = useCart()
  const shipping = total >= 399 || total === 0 ? 0 : 29.9
  if (!items.length) return (
    <section className="container" style={{ padding: '80px 0', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'center' }}>
      <h1 style={{ fontFamily: 'Georgia, serif', fontWeight: 400, margin: 0 }}>Sua sacola está vazia</h1>
      <Link to="/produtos" className="btn">Continuar comprando</Link>
    </section>
  )
  return (
    <section className="container" style={{ padding: '40px 0' }}>
      <h1 style={{ fontFamily: 'Georgia, serif', fontWeight: 400, marginTop: 0 }}>Sacola</h1>
      <div className="cart">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {items.map((i) => (
            <div key={i.id + i.size} style={{ display: 'grid', gridTemplateColumns: '90px 1fr auto', gap: 16, alignItems: 'center', borderBottom: '1px solid #e8e3da', paddingBottom: 16 }}>
              <ProductArt product={i.product} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <Link to={`/produto/${i.id}`}>{i.product.name}</Link>
                <span style={{ fontSize: 13, color: '#6b665e' }}>Tamanho: {i.size}</span>
                <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                  <button className="qty" onClick={() => update(i.id, i.size, i.qty - 1)}>−</button>
                  <span>{i.qty}</span>
                  <button className="qty" onClick={() => update(i.id, i.size, i.qty + 1)}>+</button>
                  <button onClick={() => update(i.id, i.size, 0)} style={{ border: 0, background: 'none', textDecoration: 'underline', fontSize: 12, cursor: 'pointer', color: '#6b665e' }}>Remover</button>
                </div>
              </div>
              <strong>{formatPrice(i.qty * i.product.price)}</strong>
            </div>
          ))}
        </div>
        <aside style={{ background: '#f6f3ee', padding: 24, display: 'flex', flexDirection: 'column', gap: 12, alignSelf: 'start' }}>
          <strong>Resumo</strong>
          <div className="row"><span>Subtotal</span><span>{formatPrice(total)}</span></div>
          <div className="row"><span>Frete</span><span>{shipping ? formatPrice(shipping) : 'Grátis'}</span></div>
          <div className="row" style={{ borderTop: '1px solid #ddd6c9', paddingTop: 12, fontWeight: 600 }}><span>Total</span><span>{formatPrice(total + shipping)}</span></div>
          <button className="btn" onClick={() => alert('Checkout de demonstração')}>Finalizar compra</button>
        </aside>
      </div>
    </section>
  )
}

import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { categories, products } from '../data/products.js'
import ProductCard from '../components/ProductCard.jsx'

export default function Category() {
  const { slug } = useParams()
  const [sort, setSort] = useState('relevance')
  const cat = categories.find((c) => c.slug === slug)
  let list = slug ? products.filter((p) => p.category === slug) : [...products]
  if (sort === 'asc') list = [...list].sort((a, b) => a.price - b.price)
  if (sort === 'desc') list = [...list].sort((a, b) => b.price - a.price)
  return (
    <section className="container" style={{ padding: '40px 0' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 16, marginBottom: 24 }}>
        <div>
          <h1 style={{ fontFamily: 'Georgia, serif', fontWeight: 400, margin: 0 }}>{cat ? cat.name : 'Todos os produtos'}</h1>
          <span style={{ fontSize: 13, color: '#6b665e' }}>{list.length} produtos</span>
        </div>
        <select value={sort} onChange={(e) => setSort(e.target.value)} style={{ padding: '8px 12px', border: '1px solid #d6d0c4', background: '#fff' }}>
          <option value="relevance">Relevância</option>
          <option value="asc">Menor preço</option>
          <option value="desc">Maior preço</option>
        </select>
      </div>
      <div className="grid">{list.map((p) => <ProductCard key={p.id} product={p} />)}</div>
    </section>
  )
}

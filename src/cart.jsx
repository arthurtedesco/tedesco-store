import { createContext, useContext, useEffect, useState } from 'react'
import { products } from './data/products.js'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    try { return JSON.parse(localStorage.getItem('tedesco-cart')) || [] } catch { return [] }
  })
  useEffect(() => { localStorage.setItem('tedesco-cart', JSON.stringify(items)) }, [items])

  const add = (id, size, qty = 1) => setItems((cur) => {
    const found = cur.find((i) => i.id === id && i.size === size)
    if (found) return cur.map((i) => (i === found ? { ...i, qty: i.qty + qty } : i))
    return [...cur, { id, size, qty }]
  })
  const update = (id, size, qty) => setItems((cur) =>
    qty <= 0 ? cur.filter((i) => !(i.id === id && i.size === size)) : cur.map((i) => (i.id === id && i.size === size ? { ...i, qty } : i)))
  const detailed = items.map((i) => ({ ...i, product: products.find((p) => p.id === i.id) })).filter((i) => i.product)
  const count = detailed.reduce((s, i) => s + i.qty, 0)
  const total = detailed.reduce((s, i) => s + i.qty * i.product.price, 0)

  return <CartContext.Provider value={{ items: detailed, add, update, count, total }}>{children}</CartContext.Provider>
}

export const useCart = () => useContext(CartContext)

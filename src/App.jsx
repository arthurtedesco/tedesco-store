import { Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Category from './pages/Category.jsx'
import Product from './pages/Product.jsx'
import Cart from './pages/Cart.jsx'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categoria/:slug" element={<Category />} />
          <Route path="/produtos" element={<Category />} />
          <Route path="/produto/:id" element={<Product />} />
          <Route path="/carrinho" element={<Cart />} />
          <Route path="*" element={<div className="container" style={{ padding: '80px 0', textAlign: 'center' }}><h1>Página não encontrada</h1></div>} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

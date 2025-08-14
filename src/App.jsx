import React, { useMemo, useState, useEffect } from 'react'
import Header from './components/Header.jsx'
import ProductCard from './components/ProductCard.jsx'
import CartDrawer from './components/CartDrawer.jsx'
import { PRODUCTS, CATEGORIES } from './data/products.js'

const loadCart = () => {
  try { return JSON.parse(localStorage.getItem('cart-v1')) ?? {} } catch { return {} }
}
const saveCart = (c) => localStorage.setItem('cart-v1', JSON.stringify(c))

export default function App(){
  const [cart, setCart] = useState(loadCart) // object {id: qty}
  const [open, setOpen] = useState(false)
  const [category, setCategory] = useState('All')
  const [query, setQuery] = useState('')

  useEffect(()=> saveCart(cart), [cart])

  const cartCount = useMemo(() => Object.values(cart).reduce((a,b)=>a+b,0), [cart])

  const itemsInCart = useMemo(()=> {
    return Object.entries(cart).map(([id, qty]) => {
      const p = PRODUCTS.find(p=>p.id===id)
      return { ...p, qty }
    })
  }, [cart])

  const subtotal = useMemo(()=> itemsInCart.reduce((sum, i)=> sum + i.price * i.qty, 0), [itemsInCart])

  const onAdd = (id) => setCart(prev => ({...prev, [id]: (prev[id]||0)+1}))
  const onIncrease = (id) => setCart(prev => ({...prev, [id]: prev[id]+1}))
  const onDecrease = (id) => setCart(prev => {
    const next = {...prev}; next[id] = Math.max(0, (next[id]||0)-1); if(next[id]===0) delete next[id]; return next
  })
  const onRemove = (id) => setCart(prev => { const next = {...prev}; delete next[id]; return next })
  const onCheckout = () => {
    alert(`Thank you! Order placed. Items: ${cartCount}, Total: ₹${subtotal.toLocaleString('en-IN')}`)
    setCart({})
    setOpen(false)
  }

  const filteredProducts = PRODUCTS.filter(p => 
    (category==='All' || p.category===category) &&
    (query.trim()==='' || (p.name+p.brand+p.category).toLowerCase().includes(query.toLowerCase()))
  )

  return (
    <>
      <Header cartCount={cartCount} onCartToggle={()=> setOpen(true)} />
      <div className="container">
        <div className="category-bar">
          {CATEGORIES.map(c => (
            <button key={c} className={`pill ${c===category ? 'active' : ''}`} onClick={()=> setCategory(c)}>{c}</button>
          ))}
        </div>

        <div className="search" style={{marginBottom:18}}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M21 21l-4.3-4.3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2"/>
          </svg>
          <input placeholder="Search..." value={query} onChange={(e)=> setQuery(e.target.value)} />
        </div>

        <div className="grid">
          {filteredProducts.map(p => (
            <ProductCard key={p.id}
              product={p}
              qtyInCart={cart[p.id]||0}
              onAdd={()=> onAdd(p.id)}
              onIncrease={()=> onIncrease(p.id)}
              onDecrease={()=> onDecrease(p.id)}
            />
          ))}
        </div>

        <div className="footer-note">Designed By Aditya Nanda for the Assignment 3</div>
      </div>

      <CartDrawer
        open={open}
        items={itemsInCart}
        subtotal={subtotal}
        onClose={()=> setOpen(false)}
        onIncrease={onIncrease}
        onDecrease={onDecrease}
        onRemove={onRemove}
        onCheckout={onCheckout}
      />
    </>
  )
}

import React from 'react'

export default function CartDrawer({ open, items, subtotal, onClose, onIncrease, onDecrease, onRemove, onCheckout }){
  return (
    <>
      <div className={`drawer-backdrop ${open ? 'open' : ''}`} onClick={onClose} />
      <div className={`drawer ${open ? 'open' : ''}`} role="dialog" aria-label="Shopping Cart">
        <header className="row">
          <div style={{fontWeight:800}}>Your Cart</div>
          <button className="pill" onClick={onClose}>Close</button>
        </header>

        <div className="items">
          {items.length === 0 ? (
            <div className="empty">Your cart feels lonely. Add some heat 🔥</div>
          ) : items.map(i => (
            <div className="cart-item" key={i.id}>
              <img src={i.image} alt={i.name}/>
              <div style={{flex:1}}>
                <div className="name">{i.name}</div>
                <div className="muted">₹{i.price.toLocaleString('en-IN')}</div>
                <div className="row" style={{marginTop:8}}>
                  <div className="qty">
                    <button onClick={() => onDecrease(i.id)}>−</button>
                    <span>{i.qty}</span>
                    <button onClick={() => onIncrease(i.id)}>+</button>
                  </div>
                  <div className="remove" onClick={() => onRemove(i.id)}>Remove</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <footer>
          <div className="total-row">
            <span>Subtotal</span>
            <span>₹{subtotal.toLocaleString('en-IN')}</span>
          </div>
          <button className="checkout" onClick={onCheckout}>Checkout</button>
          <div className="muted" style={{fontSize:11}}>Shipping & taxes calculated at checkout.</div>
        </footer>
      </div>
    </>
  )
}

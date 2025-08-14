import React from 'react'

export default function ProductCard({ product, qtyInCart, onAdd, onIncrease, onDecrease }){
  return (
    <div className="card">
      <div className="shoe">
        <img src={product.image} alt={product.name} loading="lazy"/>
      </div>
      <div className="title">{product.name}</div>
      <div className="muted">{product.brand} • {product.category}</div>
      <div className="row">
        <div className="price">₹{product.price.toLocaleString('en-IN')}</div>
        {qtyInCart > 0 ? (
          <div className="qty" aria-label="quantity control">
            <button onClick={onDecrease} aria-label="decrease">−</button>
            <span>{qtyInCart}</span>
            <button onClick={onIncrease} aria-label="increase">+</button>
          </div>
        ) : (
          <button className="btn" onClick={onAdd}>Add to cart</button>
        )}
      </div>
    </div>
  )
}

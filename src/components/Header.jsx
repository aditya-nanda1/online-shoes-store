import React from 'react'

export default function Header({ cartCount, onCartToggle }){
  return (
    <header>
      <nav className="nav container">
        <div className="brand">
          <div className="logo" />
          <div>
            <div style={{fontSize:14, opacity:.8, fontWeight:700, letterSpacing:1}}>KICKZ</div>
            <div style={{fontSize:11, opacity:.6}}>Online Shoes</div>
          </div>
        </div>

        <div className="search">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M21 21l-4.3-4.3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2"/>
          </svg>
          <input placeholder="Search sneakers, trainers, brands..." />
          <button className="pill">New</button>
          <button className="pill">Sale</button>
        </div>

        <button className="pill" onClick={onCartToggle}>
          Cart • {cartCount}
        </button>
      </nav>
    </header>
  )
}

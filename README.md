# Kickz — Online Shoes Store (Assignment-3)

Sleek, glassy React + Vite app for an online shoes store. Features:
- Product grid with beautiful hover effects
- Add to cart, remove from cart
- Increase/decrease quantity in both product cards and cart
- Sticky cart drawer with subtotal and **Checkout** button
- Category filters + search
- Cart persisted in `localStorage`
- Built with plain CSS (no Tailwind)

## Quick Start

```bash
# 1) Install dependencies
npm install

# 2) Run locally
npm run dev

# 3) Build for production
npm run build && npm run preview
```

## Deploy (Netlify)
- Create a new site from Git (or drop the build folder).
- Build command: `npm run build`
- Publish directory: `dist`
- If needed, add environment `NODE_VERSION` (>= 18).

## Deploy (Vercel)
- New Project → Import repo → Framework preset: **Vite**
- Build Command: `npm run build`
- Output: `dist`

## What’s inside
```
/src
  App.jsx
  main.jsx
  styles.css
  /components
    Header.jsx
    ProductCard.jsx
    CartDrawer.jsx
  /data
    products.js
```

## Attribution
Product photos are sourced from Unsplash links in `products.js`.

'use client';

import { useMemo, useState } from 'react';

type Product = {
  name: string;
  eyebrow: string;
  price: string;
  monthly: string;
  description: string;
  camera: string;
  chip: string;
  display: string;
  image: string;
  colors: { name: string; hex: string }[];
};

const products: Product[] = [
  {
    name: 'iPhone 16 Pro',
    eyebrow: 'The ultimate iPhone',
    price: '$999',
    monthly: '$41.62/mo. for 24 mo.',
    description: 'Titanium design. Pro camera control. Built for Apple Intelligence.',
    camera: '48MP Pro Fusion',
    chip: 'A18 Pro chip',
    display: '6.3″ Super Retina XDR',
    image: '/iphone-16-pro-realistic-v2.png',
    colors: [
      { name: 'Desert Titanium', hex: '#c9b5a0' },
      { name: 'Natural Titanium', hex: '#aaa59b' },
      { name: 'White Titanium', hex: '#ecebe7' },
      { name: 'Black Titanium', hex: '#3c3b38' },
    ],
  },
  {
    name: 'iPhone 16',
    eyebrow: 'A total powerhouse',
    price: '$799',
    monthly: '$33.29/mo. for 24 mo.',
    description: 'Camera Control. All-day battery. Color that makes a statement.',
    camera: '48MP Fusion',
    chip: 'A18 chip',
    display: '6.1″ Super Retina XDR',
    image: '/iphone-16-realistic-v2.png',
    colors: [
      { name: 'Ultramarine', hex: '#6077d5' },
      { name: 'Teal', hex: '#90b8b2' },
      { name: 'Pink', hex: '#efb6c8' },
      { name: 'White', hex: '#f3f1eb' },
      { name: 'Black', hex: '#303032' },
    ],
  },
  {
    name: 'iPhone 16e',
    eyebrow: 'Everything you need',
    price: '$599',
    monthly: '$24.95/mo. for 24 mo.',
    description: 'Remarkable performance and exceptional value in a durable design.',
    camera: '48MP 2-in-1 camera',
    chip: 'A18 chip',
    display: '6.1″ Super Retina XDR',
    image: '/iphone-16e-realistic-v2.png',
    colors: [
      { name: 'White', hex: '#f2f1ec' },
      { name: 'Black', hex: '#29292a' },
    ],
  },
];

function AppleMark({ compact = false }: { compact?: boolean }) {
  return <span className={compact ? 'apple-mark compact' : 'apple-mark'} aria-hidden="true"><i /><b /></span>;
}

function RealProductImage({ product, compact = false }: { product: Product; compact?: boolean }) {
  return (
    <div className={compact ? 'real-product-wrap compact' : 'real-product-wrap'}>
      <img src={product.image} alt={`${product.name} realistic rear product view`} />
    </div>
  );
}

function ProductCard({ product, index }: { product: Product; index: number }) {
  const [color, setColor] = useState(product.colors[0]);
  return (
    <article className="product-card">
      <div className="product-visual" style={{ '--accent': color.hex } as React.CSSProperties}><div className="new-label">{index < 2 ? 'New' : 'Great value'}</div><RealProductImage product={product} /></div>
      <div className="product-copy">
        <p className="product-eyebrow">{product.eyebrow}</p><h3>{product.name}</h3><p className="product-description">{product.description}</p>
        <div className="color-row" role="group" aria-label={`Choose a color for ${product.name}`}>
          {product.colors.map((item) => <button key={item.name} type="button" className={color.name === item.name ? 'color-dot selected' : 'color-dot'} style={{ '--swatch': item.hex } as React.CSSProperties} aria-label={item.name} aria-pressed={color.name === item.name} title={item.name} onClick={() => setColor(item)} />)}
          <span>{color.name}</span>
        </div>
        <div className="specs"><span>{product.display}</span><span>{product.chip}</span><span>{product.camera}</span></div>
        <div className="price-row"><div><strong>From {product.price}</strong><small>or {product.monthly}</small></div><a href="#compare" className="buy-button" aria-label={`Buy ${product.name}`}>Buy</a></div>
      </div>
    </article>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selected, setSelected] = useState('iPhone 16 Pro');
  const selectedProduct = useMemo(() => products.find((p) => p.name === selected) ?? products[0], [selected]);
  return (
    <main>
      <div className="top-note">Get $40–$650 in credit toward iPhone 16 or iPhone 16 Pro when you trade in iPhone 12 or higher. <a href="#compare">Shop iPhone ›</a></div>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Apple home"><AppleMark /></a>
        <button className="menu-button" type="button" aria-label="Toggle menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><span /><span /></button>
        <nav className={menuOpen ? 'main-nav open' : 'main-nav'} aria-label="Main navigation"><a href="#products">Store</a><a href="#products">iPhone</a><a href="#compare">Compare</a><a href="#why">Why Apple</a><a href="#support">Support</a></nav>
        <div className="header-actions"><button aria-label="Search">⌕</button><button aria-label="Shopping bag">◯</button></div>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy"><p className="kicker">iPhone</p><h1>Designed to be<br /><span>loved.</span></h1><p className="hero-lede">Explore the latest iPhone lineup. Powerful, personal, and available in a finish that feels like you.</p><div className="hero-actions"><a className="primary-button" href="#products">Shop iPhone</a><a className="text-link" href="#compare">Compare models ›</a></div></div>
        <div className="hero-art" aria-hidden="true">
          <video autoPlay muted loop playsInline preload="metadata" poster="/iphone-hero.png">
            <source src="/iphone-experience-loop.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      <section className="lineup" id="products">
        <div className="section-heading"><div><p className="kicker">The lineup</p><h2>Find your iPhone.</h2></div><a href="#compare">Compare all models ›</a></div>
        <div className="product-grid">{products.map((product, index) => <ProductCard key={product.name} product={product} index={index} />)}</div>
      </section>

      <section className="compare" id="compare">
        <div className="compare-copy"><p className="kicker">Quick compare</p><h2>Which iPhone is right for you?</h2><p>Choose a model to see the highlights at a glance.</p></div>
        <div className="compare-panel">
          <div className="compare-tabs" role="tablist" aria-label="iPhone models">{products.map((product) => <button key={product.name} type="button" role="tab" aria-selected={selected === product.name} onClick={() => setSelected(product.name)}>{product.name.replace('iPhone ', '')}</button>)}</div>
          <div className="compare-result"><RealProductImage product={selectedProduct} compact /><div><p className="product-eyebrow">{selectedProduct.eyebrow}</p><h3>{selectedProduct.name}</h3><p>{selectedProduct.description}</p><ul><li>{selectedProduct.display}</li><li>{selectedProduct.chip}</li><li>{selectedProduct.camera}</li></ul><strong>From {selectedProduct.price}</strong><a className="primary-button small" href="#support">Choose this model</a></div></div>
        </div>
      </section>

      <section className="benefits" id="why">
        <div className="section-heading"><div><p className="kicker">Apple makes it easy</p><h2>There’s even more to iPhone.</h2></div></div>
        <div className="benefit-grid">
          <article><span className="benefit-icon">↻</span><h3>Trade in. Trade up.</h3><p>Get credit toward a new iPhone when you trade in an eligible smartphone.</p><a href="#support">See your value ›</a></article>
          <article><span className="benefit-icon">◎</span><h3>Find your finish.</h3><p>Pick the color and storage that suit your style. Free delivery or store pickup.</p><a href="#products">Explore colors ›</a></article>
          <article><span className="benefit-icon">♥</span><h3>Built to last.</h3><p>Premium materials, thoughtful design, and software updates for years to come.</p><a href="#compare">Learn more ›</a></article>
        </div>
      </section>

      <footer id="support"><div className="footer-brand"><AppleMark /><span>iPhone</span></div><div className="footer-links"><a href="#products">Shop</a><a href="#compare">Compare</a><a href="#why">Values</a><a href="mailto:hello@example.com">Contact</a></div><p>Product concept website for demonstration. Apple, iPhone, and the Apple logo are trademarks of Apple Inc. Prices shown in USD.</p></footer>
    </main>
  );
}


import { useEffect, useRef, useState } from 'react'

function Arrow({ diagonal = false, className = '' }: { diagonal?: boolean; className?: string }) {
  return <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d={diagonal ? 'M5 19 19 5M5 5h14v14' : 'M4 12h16m-7-7 7 7-7 7'} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
}

function Sprout({ className = '' }: { className?: string }) {
  return <svg className={className} width="45" height="45" viewBox="0 0 48 48" fill="none" aria-hidden="true"><path d="M24 42V18M24 31C12 31 7 23 9 12c11 0 15 7 15 19ZM24 23C24 12 31 7 41 9c0 10-6 15-17 14Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>
}

function Wordmark({ footer = false }: { footer?: boolean }) {
  return <span className={`wordmark ${footer ? 'wordmark-footer' : ''}`}><Sprout /><span>horticulture<span className="wordmark-sub">INDUSTRIES</span></span></span>
}

const navigation = [
  { href: '#about', label: 'Our roots' },
  { href: '#possibilities', label: 'A world of green' },
  { href: '#approach', label: 'Our approach' },
]

const spaces = [
  { number: '01', title: 'Inside, alive.', detail: 'A little nature. A different feeling.', image: '/images/indoor.webp', alt: 'A sculptural succulent in a pale turquoise pot', tag: 'LIVING SPACES' },
  { number: '02', title: 'Room to grow.', detail: 'Small beginnings. Endless possibility.', image: '/images/growing.webp', alt: 'A gardening trowel and potting soil ready for planting', tag: 'GROWING SPACES' },
  { number: '03', title: 'Naturally inspired.', detail: 'More life in the everyday.', image: '/images/leaf-detail.webp', alt: 'A branch of glossy green leaves against a warm white background', tag: 'EVERYDAY NATURE' },
]

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuButton = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape' && menuOpen) {
        setMenuOpen(false)
        menuButton.current?.focus()
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [menuOpen])

  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <div className="announcement flex items-center justify-center gap-2"><span className="little-star" aria-hidden="true">✳</span> A little more green. A lot more possibility.</div>
      <header className="site-header">
        <div className="container header-inner flex items-center justify-between">
          <a className="brand-link" href="#home" aria-label="Horticulture Industries home"><Wordmark /></a>
          <nav className="desktop-nav flex items-center" aria-label="Main navigation">
            {navigation.map(item => <a key={item.href} href={item.href}>{item.label}</a>)}
          </nav>
          <a href="#connect" className="header-cta flex items-center gap-5">Let’s grow together <Arrow diagonal /></a>
          <button ref={menuButton} className="menu-button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} aria-controls="mobile-menu" onClick={() => setMenuOpen(!menuOpen)}><span /><span className={menuOpen ? 'menu-line-open' : ''} /></button>
        </div>
        {menuOpen && <nav id="mobile-menu" className="mobile-nav" aria-label="Mobile navigation">{[...navigation, { href: '#connect', label: 'Let’s grow together' }].map(item => <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}<Arrow diagonal /></a>)}</nav>}
      </header>

      <main id="main">
        <section id="home" className="hero container">
          <div className="hero-copy">
            <div className="eyebrow flex items-center gap-3"><span className="status-dot" /> HORTICULTURE INDUSTRIES</div>
            <h1>Good things,<br /><span className="serif">growing.</span><svg className="heading-spark" viewBox="0 0 60 60" fill="none" aria-hidden="true"><path d="M30 3v54M3 30h54M11 11l38 38M11 49l38-38" stroke="currentColor" strokeWidth="2" /></svg></h1>
            <p className="hero-description">A fresh perspective on plants, people,<br className="desktop-break" /> and the places we share.</p>
            <a href="#possibilities" className="button button-dark inline-flex items-center justify-between gap-8">Explore a world of green <Arrow diagonal /></a>
            <div className="hero-footnote flex items-center gap-4"><span className="footnote-icon"><Sprout /></span><p>Rooted in nature.<br /><span>Growing toward something better.</span></p></div>
          </div>
          <div className="hero-visual">
            <img className="hero-photo" src="/images/hero-greenhouse.webp" alt="Sunlight pouring into a glass greenhouse filled with lush palms and ferns" fetchPriority="high" width="1200" height="1400" />
            <div className="hero-photo-shade" />
            <div className="growth-seal" aria-label="Rooted in possibility"><svg viewBox="0 0 120 120" aria-hidden="true"><defs><path id="seal-path" d="M60,60m-43,0a43,43 0 1,1 86,0a43,43 0 1,1 -86,0" /></defs><text><textPath href="#seal-path" startOffset="0%">ROOTED IN POSSIBILITY · ROOTED IN POSSIBILITY · </textPath></text></svg><Sprout /></div>
            <div className="photo-caption flex items-end justify-between"><div><span className="caption-label">NATURE HAS A WAY.</span><p>Let’s make room for it.</p></div><a href="#about" className="round-link" aria-label="Discover our roots"><Arrow diagonal /></a></div>
            <span className="photo-index">01 / THE ART OF GROWING</span>
          </div>
        </section>

        <div className="values-strip" aria-label="Our guiding ideas"><div className="container flex items-center justify-between"><span><span aria-hidden="true">✳</span> Plants with purpose</span><span><span aria-hidden="true">✳</span> Spaces with soul</span><span><span aria-hidden="true">✳</span> A greener everyday</span></div></div>

        <section id="about" className="intro-section container">
          <div className="section-label"><span className="tiny-line" /> OUR ROOTS</div>
          <div className="intro-grid grid"><h2>Life looks better<br />with a little <span className="serif">green.</span></h2><div className="intro-copy"><p>There’s something about being around plants. The way a room softens. The way a garden brings us outside. The way something small becomes something extraordinary.</p><p>That’s the possibility at the heart of Horticulture Industries. A closer connection to nature, in the places we call our own.</p><a href="#approach" className="text-link inline-flex items-center gap-6">Get to know our approach <Arrow diagonal /></a></div></div>
        </section>

        <section id="possibilities" className="possibilities-section">
          <div className="container">
            <div className="section-heading flex items-end justify-between"><div><div className="section-label"><span className="tiny-line" /> A WORLD OF GREEN</div><h2>Find your kind of <span className="serif">growing.</span></h2></div><p>From a windowsill to the wide open.<br />There’s a little green for every space.</p></div>
            <div className="spaces-grid grid">{spaces.map(space => <article className="space-card" key={space.number}><div className="space-image"><img src={space.image} alt={space.alt} width="700" height="850" loading="lazy" /><span className="space-tag">{space.tag}</span><span className="space-number">{space.number}</span></div><div className="space-title"><h3>{space.title}</h3><span aria-hidden="true"><Arrow diagonal /></span></div><p>{space.detail}</p></article>)}</div>
          </div>
        </section>

        <section id="approach" className="approach-section">
          <div className="container approach-grid grid">
            <div className="approach-visual"><img src="/images/hero-greenhouse.webp" alt="Layered palms and ferns growing in the warm light of a greenhouse" width="1024" height="1536" loading="lazy" /><div className="approach-note"><Sprout /><span>Good things take roots.</span></div></div>
            <div className="approach-copy"><div className="section-label"><span className="tiny-line" /> NATURALLY FORWARD</div><h2>More than plants.<br />A way of <span className="serif">seeing.</span></h2><p>A greener world starts with the way we see the one around us. An empty corner becomes a small jungle. An ordinary day becomes a reason to step outside.</p><div className="approach-principles"><div><span>01</span><p>Look closer.<small>Find possibility in the everyday.</small></p></div><div><span>02</span><p>Grow thoughtfully.<small>Make space for a connection to nature.</small></p></div><div><span>03</span><p>Keep growing.<small>Let curiosity lead the way.</small></p></div></div></div>
          </div>
        </section>

        <section id="connect" className="connect-section"><div className="container connect-inner flex items-center justify-between"><div><div className="section-label"><span className="tiny-line" /> THE NEXT CHAPTER</div><h2>Something good<br />starts with <span className="serif">a seed.</span></h2></div><div className="connect-aside"><Sprout /><p>A new perspective.<br />A little inspiration.<br />A greener place to begin.</p><a href="#home" className="text-link inline-flex items-center gap-6">Back to our roots <Arrow diagonal /></a></div></div></section>
      </main>

      <footer className="site-footer"><div className="container"><div className="footer-main flex items-start justify-between"><a href="#home" className="brand-link" aria-label="Horticulture Industries home"><Wordmark footer /></a><p>For the spaces we live.<br />And the world we share.</p><a href="#home" className="footer-top inline-flex items-center gap-4">Back to top <Arrow diagonal /></a></div><div className="footer-bottom flex items-center justify-between"><p>© {new Date().getFullYear()} Horticulture Industries</p><span>Brand concept · Draft copy & illustrative imagery</span><p>Good things, growing. <span aria-hidden="true">✳</span></p></div></div></footer>
    </>
  )
}

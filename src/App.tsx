import { useEffect, useRef, useState } from 'react'
import Atmosphere from './Atmosphere'
import Journal from './Journal'

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
  { href: '#possibilities', label: 'Growing systems' },
  { href: '#approach', label: 'Our approach' },
  { href: '#journal', label: 'Field notes' },
]

const spaces = [
  { number: '01', title: 'Precision in every row.', detail: 'Leafy greens, herbs, and hydroponic growing.', image: '/images/hydroponic-greens.webp', alt: 'Commercial hydroponic channels filled with lettuce and leafy herbs beneath a vast glass roof', tag: 'HYDROPONIC GROWING' },
  { number: '02', title: 'Rooted in possibility.', detail: 'Coco-coir substrates. A foundation for growth.', image: '/images/coco-coir-vegetables.webp', alt: 'Trellised tomatoes and cucumbers in coco-coir grow bags with drip irrigation', tag: 'COCO-COIR CULTIVATION' },
  { number: '03', title: 'Space for what’s next.', detail: 'From young vegetable plants to the growing floor.', image: '/images/greenhouse-propagation.webp', alt: 'Large greenhouse benches filled with vegetable transplants and leafy crops', tag: 'GREENHOUSE ENVIRONMENTS' },
]

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [motionPaused, setMotionPaused] = useState(false)
  const menuButton = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    // Resolve section links after React has mounted their target elements.
    const section = document.getElementById(window.location.hash.slice(1))
    section?.scrollIntoView({ behavior: 'instant', block: 'start' })
  }, [])

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
      <Atmosphere paused={motionPaused} />
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
            <p className="hero-description">A fresh perspective on hydroponics,<br className="desktop-break" /> coco coir, and the future of growing.</p>
            <a href="#possibilities" className="button button-dark inline-flex items-center justify-between gap-8">Explore a world of green <Arrow diagonal /></a>
            <div className="hero-footnote flex items-center gap-4"><span className="footnote-icon"><Sprout /></span><p>Rooted in nature. Guided by growing.<br /><span>Hydroponics · Coco coir · Greenhouse environments</span></p></div>
          </div>
          <div className="hero-visual">
            <img className="hero-photo" src="/images/commercial-greenhouse.webp" alt="Sunlight streaming through a vast industrial greenhouse with hydroponic greens and coco-coir vegetable rows" fetchPriority="high" width="1536" height="1024" />
            <div className="hero-photo-shade" />
            <div className="growth-seal" aria-label="Rooted in possibility"><svg viewBox="0 0 120 120" aria-hidden="true"><defs><path id="seal-path" d="M60,60m-43,0a43,43 0 1,1 86,0a43,43 0 1,1 -86,0" /></defs><text><textPath href="#seal-path" startOffset="0%">ROOTED IN POSSIBILITY · ROOTED IN POSSIBILITY · </textPath></text></svg><Sprout /></div>
            <div className="photo-caption flex items-end justify-between"><div><span className="caption-label">THE NEXT GENERATION OF GROWING.</span><p>Possibility, under glass.</p></div><a href="#about" className="round-link" aria-label="Discover our roots"><Arrow diagonal /></a></div>
            <span className="photo-index">01 / THE ART OF GROWING</span>
          </div>
        </section>

        <div className="values-strip" aria-label="Our guiding ideas"><div className="container flex items-center justify-between"><span><span aria-hidden="true">✳</span> Hydroponic growing</span><span><span aria-hidden="true">✳</span> Coco-coir cultivation</span><span><span aria-hidden="true">✳</span> Greenhouse environments</span></div></div>

        <section id="about" className="intro-section container">
          <div className="section-label"><span className="tiny-line" /> OUR ROOTS</div>
          <div className="intro-grid grid"><h2>Better growing.<br />By <span className="serif">design.</span></h2><div className="intro-copy"><p>Light through glass. Water moving through a growing system. Rows of fresh green leaves. Horticulture brings nature and considered design into the same space.</p><p>At the heart of Horticulture Industries is a focus on hydroponics, coco-coir cultivation, and the environments where vegetables and leafy crops grow. A professional perspective, with green at its roots.</p><a href="#approach" className="text-link inline-flex items-center gap-6">Get to know our approach <Arrow diagonal /></a></div></div>
        </section>

        <section id="possibilities" className="possibilities-section">
          <div className="container">
            <div className="section-heading flex items-end justify-between"><div><div className="section-label"><span className="tiny-line" /> A WORLD OF GREEN</div><h2>Considered spaces.<br />Extraordinary <span className="serif">potential.</span></h2></div><p>From the root zone to the growing floor.<br />A closer look at modern horticulture.</p></div>
            <div className="spaces-grid grid">{spaces.map(space => <article className="space-card" key={space.number}><div className="space-image"><img src={space.image} alt={space.alt} width="700" height="850" loading="lazy" /><span className="space-tag">{space.tag}</span><span className="space-number">{space.number}</span></div><div className="space-title"><h3>{space.title}</h3><span aria-hidden="true"><Arrow diagonal /></span></div><p>{space.detail}</p></article>)}</div>
          </div>
        </section>

        <section id="indoor" className="indoor-section container" aria-labelledby="indoor-title">
          <div className="section-heading flex items-end justify-between">
            <div><div className="section-label"><span className="tiny-line" /> INDOOR GROWING</div><h2 id="indoor-title">Growing, in a<br /><span className="serif">new light.</span></h2></div>
            <p>Leafy greens below. Vine crops above.<br />A closer look at the light, air, and structure<br className="desktop-break" /> of an indoor growing space.</p>
          </div>
          <figure className="indoor-figure">
            <img src="/images/indoor-led-violet.webp" alt="Purple LED fixtures illuminate short hydroponic lettuce and basil, medium-height kale and peppers, and tall trellised vegetable crops in an industrial indoor grow room, with exposed ventilation ducts, fans, and a large pleated air-filter bank clearly visible" width="1536" height="1024" loading="lazy" />
            <figcaption><span>ANOTHER PERSPECTIVE ON GROWING</span><span>AI-generated indoor cultivation concept</span></figcaption>
          </figure>
          <div className="indoor-details">
            <div><span>01 / THE LIGHT</span><h3>LEDs in view.</h3><p>Suspended fixtures bring a violet glow to the growing floor.</p></div>
            <div><span>02 / THE AIR</span><h3>The whole environment.</h3><p>Exposed ductwork, circulation fans, and industrial air filtration.</p></div>
            <div><span>03 / THE CROP</span><h3>Room for every height.</h3><p>Low leafy greens, mid-height vegetables, and tall trellised crops.</p></div>
          </div>
        </section>

        <section id="approach" className="approach-section">
          <div className="container approach-grid grid">
            <div className="approach-visual"><img src="/images/coco-coir-vegetables.webp" alt="Sunlit commercial vegetable greenhouse with coco-coir substrates, drip irrigation, and trellised crops" width="1536" height="1024" loading="lazy" /><div className="approach-note"><Sprout /><span>Good things take roots.</span></div></div>
            <div className="approach-copy"><div className="section-label"><span className="tiny-line" /> NATURALLY FORWARD</div><h2>Nature. Structure.<br />A shared <span className="serif">purpose.</span></h2><p>A growing environment is more than the space beneath a roof. It’s the relationship between the crop, the root zone, and the systems around them. That connection shapes the way we think about horticulture.</p><div className="approach-principles"><div><span>01</span><p>Start with the crop.<small>Keep the plant at the center of the conversation.</small></p></div><div><span>02</span><p>Consider the system.<small>Connect the growing medium, water, and environment.</small></p></div><div><span>03</span><p>Keep looking forward.<small>Let observation and curiosity guide the next step.</small></p></div></div></div>
          </div>
        </section>

        <Journal />

        <section id="connect" className="connect-section"><div className="container connect-inner flex items-center justify-between"><div><div className="section-label"><span className="tiny-line" /> THE NEXT CHAPTER</div><h2>Something good<br />starts with <span className="serif">a seed.</span></h2></div><div className="connect-aside"><Sprout /><p>A new perspective.<br />A little inspiration.<br />A greener place to begin.</p><a href="#home" className="text-link inline-flex items-center gap-6">Back to our roots <Arrow diagonal /></a></div></div></section>
      </main>

      <footer className="site-footer"><div className="container"><div className="footer-main flex items-start justify-between"><a href="#home" className="brand-link" aria-label="Horticulture Industries home"><Wordmark footer /></a><p>For the spaces we grow.<br />And the future we share.</p><a href="#home" className="footer-top inline-flex items-center gap-4">Back to top <Arrow diagonal /></a></div><div className="footer-bottom flex items-center justify-between"><p>© {new Date().getFullYear()} Horticulture Industries</p><span>Brand concept · AI-generated growing imagery</span><button type="button" className="motion-toggle" aria-pressed={motionPaused} onClick={() => setMotionPaused(!motionPaused)}><span aria-hidden="true">☼</span> {motionPaused ? 'Resume light' : 'Pause light'}</button></div></div></footer>
    </>
  )
}

import { useEffect, useRef, useState } from 'react'

type FieldNote = { slug: string; category: string; title: string; excerpt: string; image: string; alt: string; paragraphs: string[]; source: { label: string; url: string } }

const notes: FieldNote[] = [
  {
    slug: 'hydroponics-starts-with-the-system', category: 'HYDROPONICS', title: 'Start with the system.',
    excerpt: 'A closer look at the relationship between crop, roots, and growing system.',
    image: '/images/hydroponic-greens.webp', alt: 'Commercial hydroponic channels filled with lettuce and leafy herbs',
    paragraphs: [
      'A greenhouse full of green begins with decisions beneath the canopy. Hydroponics describes a family of growing systems, rather than a single piece of equipment. Some systems place roots in a nutrient solution; others support plants in a soilless substrate and deliver water and nutrients through irrigation.',
      'That distinction matters when thinking about a growing space. A channel of leafy greens and a row of trellised vegetables can ask different things of their infrastructure. Crop choice, root support, access for maintenance, and the way water moves through the system all deserve attention before a layout is settled.',
      'The most useful starting point is a clear question: what does this crop need, and how will the system deliver it consistently? From there, the greenhouse becomes a connected working environment, with the crop at the center of every decision.',
    ],
    source: { label: 'Penn State Extension · Hydroponic systems and plant nutrition', url: 'https://extension.psu.edu/hydroponics-systems-and-principles-of-plant-nutrition-essential-nutrients-function-deficiency-and-excess' },
  },
  {
    slug: 'coco-coir-a-growing-foundation', category: 'COCO COIR', title: 'A different kind of foundation.',
    excerpt: 'Why the growing medium belongs in the bigger conversation about crop production.',
    image: '/images/coco-coir-vegetables.webp', alt: 'Tomato vines in white coco-coir grow bags with visible drip irrigation',
    paragraphs: [
      'Coco coir is a growing substrate made from coconut husks. In commercial greenhouse production, coir can be used in containers and lay-flat grow bags, with a drip system delivering water and nutrients to the root zone.',
      'It is helpful to think of the substrate and irrigation system together. Choosing a medium does not remove the need to understand the crop, the water supply, or the way moisture behaves around the roots. The growing environment is a collection of connected decisions.',
      'A thoughtful coir-based layout also leaves room for the practical work: inspecting emitters, reaching plants, maintaining clear aisles, and observing changes through the crop cycle. Those details may sit quietly below the leaves, but they are part of the everyday structure of a professional growing space.',
    ],
    source: { label: 'UF/IFAS Extension · Greenhouse vegetable production systems', url: 'https://ask.ifas.ufl.edu/publication/CV263' },
  },
  {
    slug: 'the-daily-rhythm-of-a-greenhouse', category: 'GREENHOUSE NOTES', title: 'The daily rhythm of growing.',
    excerpt: 'Observation, careful records, and a closer connection to the crop.',
    image: '/images/greenhouse-propagation.webp', alt: 'Young vegetable plants on commercial greenhouse propagation benches',
    paragraphs: [
      'The architecture of a greenhouse is easy to notice. Its everyday rhythm is quieter: walking the rows, looking closely at plants, and paying attention to the systems that support them.',
      'In hydroponic production, nutrient-solution conditions can change as crops take up water and nutrients. Regular monitoring and maintenance remain important, even in a growing space with carefully organized infrastructure. A good record helps give each observation context.',
      'Keep the questions practical. Does the crop look consistent from one row to the next? Are irrigation lines clear and accessible? Have conditions changed since the previous check? These observations help frame a conversation with a qualified grower or crop adviser, rather than replacing crop-specific guidance.',
      'A professional growing environment is built through that attention over time. Good systems create the framework. People keep learning from what grows inside it.',
    ],
    source: { label: 'University of Missouri Extension · Controlled environment agriculture', url: 'https://extension.missouri.edu/publications/g6986' },
  },
]

function selectedFromUrl() {
  const slug = new URLSearchParams(window.location.search).get('article')
  return notes.find(note => note.slug === slug) ?? null
}

function Article({ note, dismiss }: { note: FieldNote; dismiss: () => void }) {
  const dialog = useRef<HTMLDialogElement>(null)
  useEffect(() => {
    const element = dialog.current
    const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    element?.showModal()
    return () => { document.body.style.overflow = previousOverflow; element?.close(); previousFocus?.focus({ preventScroll: true }) }
  }, [note])
  return <dialog ref={dialog} className="article-dialog" aria-labelledby="article-title" onCancel={event => { event.preventDefault(); dismiss() }} onClick={event => { if (event.target === event.currentTarget) dismiss() }}>
    <article className="article-content"><div className="article-toolbar"><span>HORTICULTURE INDUSTRIES / FIELD NOTES</span><button type="button" autoFocus onClick={dismiss} aria-label="Close article">Close <span aria-hidden="true">×</span></button></div><img className="article-cover" src={note.image} alt={note.alt} width="1536" height="1024" /><div className="article-body"><div className="section-label">{note.category}</div><h2 id="article-title">{note.title}</h2><p className="article-deck">{note.excerpt}</p>{note.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}<aside className="article-source"><span>FURTHER READING</span><a href={note.source.url} target="_blank" rel="noreferrer">{note.source.label} <span aria-hidden="true">↗</span></a></aside></div></article>
  </dialog>
}

export default function Journal() {
  const [selected, setSelected] = useState<FieldNote | null>(selectedFromUrl)
  useEffect(() => {
    const onPopState = () => setSelected(selectedFromUrl())
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])
  function openArticle(note: FieldNote) {
    const url = new URL(window.location.href)
    url.searchParams.set('article', note.slug)
    window.history.pushState({}, '', url)
    setSelected(note)
  }
  function dismissArticle() {
    const url = new URL(window.location.href)
    url.searchParams.delete('article')
    window.history.replaceState({}, '', url)
    setSelected(null)
  }
  return <>
    <section id="journal" className="journal-section"><div className="container"><div className="section-heading flex items-end justify-between"><div><div className="section-label"><span className="tiny-line" /> FROM THE GROWING FLOOR</div><h2>A little knowledge.<br />A lot of <span className="serif">possibility.</span></h2></div><p>Field notes on hydroponics, coco coir,<br />and the spaces where good things grow.</p></div><div className="journal-grid">{notes.map(note => <article className="journal-card" key={note.slug}>
      <a className="journal-image" href={`?article=${note.slug}#journal`} onClick={event => { if (event.button === 0 && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey) { event.preventDefault(); openArticle(note) } }} aria-label={`Read ${note.title}`}><img src={note.image} alt={note.alt} width="1536" height="1024" loading="lazy" /><span aria-hidden="true">↗</span></a>
      <div className="journal-meta"><span>{note.category}</span><span>{Math.max(1, Math.ceil(note.paragraphs.join(' ').split(/\s+/).length / 180))} MIN READ</span></div><h3><a href={`?article=${note.slug}#journal`} onClick={event => { if (!event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey) { event.preventDefault(); openArticle(note) } }}>{note.title}</a></h3><p>{note.excerpt}</p><button type="button" className="journal-read" onClick={() => openArticle(note)}>Read field note <span aria-hidden="true">↗</span></button>
    </article>)}</div></div></section>
    {selected && <Article note={selected} dismiss={dismissArticle} />}
  </>
}

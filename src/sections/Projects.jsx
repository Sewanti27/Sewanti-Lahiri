import React, { useState, useMemo, useEffect } from 'react';
import '../styles/projects.css';

// NOTE: Using existing ScatteredThoughts.avif until a .png version is added.
const projectData = [
  // Page 1 (Books)
  {
    id: 'scattered-thoughts',
    title: 'Scattered Thoughts (Book)',
    subtitle: 'Published Poetry & Reflections',
    description: 'A published collection capturing reflective narratives and expressive poetry. There is emotion, memory, and identity through minimalist structure.',
    image: './ScatteredThoughts.avif',
    tags: ['Books', 'Writing'],
    link: 'https://ebooks.bookleafpub.com/product-page/scattered-thoughts-1'
  },
  {
    id: 'mending-melodies',
    title: 'Mending Unheard Melodies',
    subtitle: 'Poetry & Emotional Narrative',
    description: 'A companion poetic work centering on emotions, healing, and introspective narrative flow with evocative minimal presentation.',
    image: './MendingUnheardMelodies.jpg',
    tags: ['Books', 'Writing'],
    link: 'https://www.amazon.in/Mending-Unheard-Melodies-Sewanti-Lahiri/dp/9358738286'
  },
  // Page 2 (Automation / Workflows)
  {
    id: 'n8n-linkedin-newsletter',
    title: 'LinkedIn Newsletter Automation (n8n)',
    subtitle: 'Workflow Orchestration & Delivery',
    description: 'Automated LinkedIn newsletter preparation qne publishing workflow using n8n—templating, scheduling, content normalization, and delivery pipeline.',
    image: './N8Nnewsletter.webp',
    tags: ['Automation', 'Workflow'],
    link: '#'
  },
  {
    id: 'invoice-parser',
    title: 'Invoice PDF Parser to Excel',
    subtitle: 'Data Extraction Automation',
    description: 'Automated ingestion of PDF invoices, structured entity extraction, normalization, and export into Excel-ready tabular format via workflow nodes.',
    image: './InvoicePDFparser.png',
    tags: ['Automation', 'Parsing'],
    link: '#'
  },
  // Page 3 (AI / Systems)
  {
    id: 'brainwave-ai',
    title: 'Brainwave Site + AI Chatbot',
    subtitle: 'Functional Marketing Site POC',
    description: 'Deployed landing experience integrating an AI assistant. Showcases prompt-driven interaction, modular UI composition, and responsive layout techniques.',
    image: './Brainwave.png',
    tags: ['Frontend', 'AI'],
    link: 'https://sewanti27.github.io/brainwave_site_deploy/'
  },
  {
    id: 'smart-factory-fire',
    title: 'Smart Factory Fire Detection',
    subtitle: 'Vision + Early Alert System',
    description: 'Industrial-oriented fire detection prototype integrating sensor fusion and AI-driven anomaly detection for proactive facility safety response.',
    image: './SmartFactoryDetection.jpg',
    tags: ['Automation', 'AI'],
    link: '#'
  }
];

const filters = ['All', 'Books', 'Writing', 'Automation', 'Workflow', 'Parsing', 'AI', 'Frontend'];

export default function Projects() {
  const [activeFilter, setFilter] = useState('All');
  const [page, setPage] = useState(0); // page index
  const [activeId, setActiveId] = useState(projectData[0].id);

  const filtered = useMemo(() => (
    activeFilter === 'All' ? projectData : projectData.filter(p => p.tags.includes(activeFilter))
  ), [activeFilter]);

  // Chunk projects into pages of 2
  const pages = useMemo(() => {
    const out = [];
    for (let i = 0; i < filtered.length; i += 2) out.push(filtered.slice(i, i + 2));
    return out;
  }, [filtered]);

  const totalPages = pages.length || 1;
  const safePage = Math.min(page, totalPages - 1);

  // Ensure active project stays valid when filtering or page changes
  useEffect(() => {
    const currentPageProjects = pages[safePage] || [];
    if (!currentPageProjects.find(p => p.id === activeId)) {
      if (currentPageProjects[0]) setActiveId(currentPageProjects[0].id);
    }
  }, [pages, safePage, activeId]);

  const active = useMemo(() => filtered.find(p => p.id === activeId), [filtered, activeId]);

  function next() { setPage(p => (p + 1) % totalPages); }
  function prev() { setPage(p => (p - 1 + totalPages) % totalPages); }
  function goToPage(i) { setPage(i); }

  return (
    <section id="projects" className="projects-section">
      <div className="projects-head">
        <h2 className="projects-title">Let's have a look at my <span className="accent">Portfolio</span></h2>
        <a href="#projects" className="see-all-btn">See All</a>
      </div>

      <div className="projects-carousel">
        <button className="p-nav prev" onClick={prev} aria-label="Previous projects page">‹</button>
        <div className="carousel-viewport">
          <div className="pages-track" style={{ width: `${totalPages * 100}%`, transform: `translateX(-${safePage * (100 / totalPages)}%)` }}>
            {pages.map((group, i) => (
              <div className="page" key={i} style={{ width: `${100 / totalPages}%` }} aria-hidden={i !== safePage}>
                {group.map(p => {
                  const isActive = p.id === activeId;
                  return (
                    <figure
                      key={p.id}
                      className={'slide' + (isActive ? ' active' : '')}
                      onClick={() => setActiveId(p.id)}
                      tabIndex={0}
                      onKeyDown={(e) => { if (e.key === 'Enter') setActiveId(p.id); }}
                      aria-label={`Select project ${p.title}`}
                    >
                      <img src={p.image} alt={p.title} className="slide-img" />
                      <figcaption className="slide-caption">{p.title.split(' ').slice(0,2).join(' ')}</figcaption>
                      <button className="slide-arrow" type="button" onClick={next} aria-label="Next page">
                        <img src="./projectarrow.png" alt="Next" className="inner-arrow" />
                      </button>
                    </figure>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
        <button className="p-nav next" onClick={next} aria-label="Next projects page">›</button>
      </div>

      <div className="dots" role="tablist">
        {pages.map((_, i) => (
          <button key={i} className={'dot' + (i === safePage ? ' active' : '')} onClick={() => setPage(i)} aria-label={`Go to page ${i + 1}`} />
        ))}
      </div>

      <div className="filter-chips">
        {filters.map(f => (
          <button
            key={f}
            className={'chip' + (f === activeFilter ? ' active' : '')}
            onClick={() => {
              setFilter(f);
              setPage(0);
              // after filter change choose the first project in new filtered list
              const nextList = f === 'All' ? projectData : projectData.filter(p => p.tags.includes(f));
              if (nextList[0]) setActiveId(nextList[0].id);
            }}
          >
            {f}
          </button>
        ))}
      </div>

      {active && (
        <div className="project-detail">
          <div className="detail-head">
            <h3 className="detail-title">{active.title} <span className="detail-icon" aria-hidden="true">↗</span></h3>
          </div>
          <p className="detail-sub">{active.subtitle}</p>
          <p className="detail-desc">{active.description}</p>
          <div className="detail-tags">
            {active.tags.map(t => <span key={t} className="d-tag">{t}</span>)}
          </div>
          <div className="detail-cta">
            <a className="visit-link" href={active.link} target="_blank" rel="noopener noreferrer">Visit Project ↗</a>
          </div>
        </div>
      )}
    </section>
  );
}

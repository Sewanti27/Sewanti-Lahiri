import React, { useState } from 'react';
import '../styles/services.css';

// Two pages of three service cards each
const pages = [
  [
    { id: 'blogging', title: 'Blogging', image: '/cardimages.png', desc: 'Strategic, SEO-aligned articles that build topical authority & trust.' },
    { id: 'smm', title: 'Social Media Management', image: '/secondcardimage.png', desc: 'Consistent brand voice, engagement & content planning across channels.' },
    { id: 'landing', title: 'Landing Page', image: '/cardimages.png', desc: 'Conversion-focused pages with clear narrative & persuasive structure.' }
  ],
  [
    { id: 'seo', title: 'SEO', image: '/secondcardimage.png', desc: 'Technical + on-page optimization to increase qualified organic traffic.' },
    { id: 'linkedin', title: 'LinkedIn & Cold Email Outreach', image: '/cardimages.png', desc: 'Targeted outbound frameworks that warm prospects before the pitch.' },
    { id: 'ads', title: 'Ads Management', image: '/secondcardimage.png', desc: 'Data-driven ad campaigns with continuous creative & funnel iteration.' }
  ]
];

export default function Services() {
  const [page, setPage] = useState(0); // 0 or 1
  const totalPages = pages.length;
  const next = () => setPage(p => (p + 1) % totalPages);
  const prev = () => setPage(p => (p - 1 + totalPages) % totalPages);

  return (
    <section id="services" className="services-section">
      <div className="services-shell">
        <header className="services-head">
          <div className="services-head-left">
            <h2 className="services-title">My <span className="accent">Services</span></h2>
          </div>
          <p className="services-lead">A complete growth system for your business, from audience attraction, engagement, conversion and retention through strategic content, optimized pages & performance channels.</p>
        </header>

        <div className="carousel">
          <button className="nav-btn prev" onClick={prev} aria-label="Previous page">‹</button>
          <div className="carousel-viewport">
            <div
              className="pages-track"
              style={{
                width: `${totalPages * 100}%`,
                transform: `translateX(-${page * (100 / totalPages)}%)`
              }}
            >
              {pages.map((cards, i) => (
                <div
                  className="page"
                  key={i}
                  aria-hidden={i !== page}
                  style={{ width: `${100 / totalPages}%` }}
                >
                  {cards.map(card => (
                    <article className="card" key={card.id}>
                      <div className="card-inner">
                        <div className="card-header-line" />
                        <h3 className="card-title">{card.title}</h3>
                        <div className="card-image-slot">
                          <img src={card.image} alt="" className="card-img" />
                        </div>
                        <p className="card-desc">{card.desc}</p>
                        <a className="card-arrow" href="#discuss" aria-label={`Start a project about ${card.title}`}>
                          <img src="/arrow.png" alt="" />
                        </a>
                      </div>
                    </article>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <button className="nav-btn next" onClick={next} aria-label="Next page">›</button>
        </div>

        <div className="dots" role="tablist">
          {pages.map((_, i) => (
            <button key={i} className={"dot" + (i === page ? ' active' : '')} onClick={() => setPage(i)} aria-label={`Go to page ${i + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
}

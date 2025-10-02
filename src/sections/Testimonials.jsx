import React, { useState } from 'react';
import '../styles/testimonials.css';

const testimonials = [
  { id: 1, name: 'Sonechka Lughin', role: 'UI/UX Designer', rating: 5, text: 'Working with you was a seamless experience. Your ability to translate ambiguous ideas into clear, compelling solutions was impressive.' },
  { id: 2, name: 'Samuel Hofstadter', role: 'Product Lead', rating: 5, text: 'Your structured thinking and communication made collaboration easy. Rapid iterations while maintaining clarity stood out.' },
  { id: 3, name: 'Amit Verma', role: 'Automation Engineer', rating: 5, text: 'Exceptionally strong at connecting technical depth with outcome-focused execution. A reliable partner for complex deliverables.' }
];

export default function Testimonials() {
  const [index, setIndex] = useState(1);
  const active = testimonials[index];

  function prev() { setIndex(i => (i - 1 + testimonials.length) % testimonials.length); }
  function next() { setIndex(i => (i + 1) % testimonials.length); }

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="t-bg-overlay" />
      <div className="t-inner">
        <header className="t-head">
          <h2 className="t-title">Testimonials That<br /><span className="accent">Speak to My Results</span></h2>
          <p className="t-intro">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.</p>
          <img src="/testimonialdesign.png" alt="decorative" className="t-decor t-decor-left" />
          <img src="/testimonialdesign.png" alt="decorative" className="t-decor t-decor-right" />
        </header>

        <div className="t-cards-row">
          {testimonials.map((t, i) => {
            const state = i === index ? 'active' : i === (index - 1 + testimonials.length) % testimonials.length ? 'prev' : i === (index + 1) % testimonials.length ? 'next' : 'out';
            return (
              <article key={t.id} className={`t-card ${state}`} onClick={() => setIndex(i)}>
                <div className="t-quote-icon">“”</div>
                <div className="t-card-body">
                  <div className="t-person only-text">
                    <h3 className="t-name">{t.name}</h3>
                    <p className="t-role">{t.role}</p>
                  </div>
                  <div className="t-rating" aria-label={`${t.rating} star rating`}>
                    {Array.from({ length: t.rating }).map((_, r) => <span key={r}>★</span>)}
                    <span className="t-score">{t.rating.toFixed(1)}</span>
                  </div>
                  <p className="t-text">{t.text}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

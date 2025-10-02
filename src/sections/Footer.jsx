import React, { useState } from 'react';
import '../styles/footer.css';

export default function Footer(){
  const year = new Date().getFullYear();
  const [email,setEmail] = useState('');
  const [done,setDone] = useState(false);

  function submit(e){
    e.preventDefault();
    if(!email.trim()) return;
    setDone(true);
    setTimeout(()=> setDone(false), 3500);
    setEmail('');
  }

  return (
    <footer className="site-footer" id="contact">
      <div className="f-container">
        <div className="f-head-row">
          <h2 className="f-heading">Lets Connect there</h2>
          <a href="#discuss" className="f-hire-btn">Hire me ↗</a>
        </div>
        <hr className="f-sep" />
        <div className="f-grid">
          <div className="f-brand-block">
            <div className="f-logo">SL</div>
            <p className="f-desc">I connect design, engineering, and clear thinking to deliver practical, aesthetic, and measurable product outcomes. Always curious, always iterating.</p>
            <div className="f-socials" aria-label="Social links">
              <a href="https://github.com/Sewanti27" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="s-link icon-link">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 1.5c-5.25 0-9.5 4.42-9.5 9.87 0 4.37 2.75 8.07 6.57 9.38.48.09.66-.22.66-.48 0-.24-.01-.87-.01-1.71-2.68.6-3.25-1.18-3.25-1.18-.43-1.13-1.05-1.43-1.05-1.43-.86-.61.07-.6.07-.6.95.07 1.45 1 1.45 1 .85 1.5 2.24 1.07 2.78.82.09-.63.33-1.06.6-1.31-2.14-.25-4.39-1.1-4.39-4.92 0-1.09.38-1.98 1-2.68-.1-.26-.44-1.3.09-2.71 0 0 .81-.27 2.65 1.02A8.9 8.9 0 0 1 12 6.84c.82.01 1.64.11 2.41.33 1.84-1.29 2.65-1.02 2.65-1.02.53 1.41.19 2.45.09 2.71.62.7 1 1.59 1 2.68 0 3.83-2.25 4.66-4.4 4.91.34.31.64.9.64 1.82 0 1.31-.01 2.37-.01 2.69 0 .26.18.58.67.48 3.81-1.31 6.56-5.01 6.56-9.38 0-5.45-4.25-9.87-9.5-9.87Z" />
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter / X" className="s-link icon-link">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M18 2h3l-7.5 9 7 11H15L9.8 14.7 4.8 22H2l8-10.2L3 2h6l4.6 6.5L18 2Z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/sewanti-lahiri/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="s-link icon-link">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7.5 0h3.7l.3 1.7c.8-1.1 2.1-2 3.9-2 2.76 0 4.6 1.9 4.6 5.2V21h-4v-6.3c0-1.7-.7-2.7-2.1-2.7-1.24 0-2 .83-2.3 1.63-.12.27-.18.64-.18 1.02V21h-4V9Z" />
                </svg>
              </a>
            </div>
          </div>

          <nav className="f-nav" aria-label="Footer navigation">
            <h4 className="f-col-title">Navigation</h4>
            <ul className="f-list">
              <li><a href="#services">Services</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#discuss">Discuss</a></li>
            </ul>
          </nav>

          <div className="f-contact">
            <h4 className="f-col-title">Contact</h4>
            <ul className="f-list plain">
              <li><a href="tel:+0000000000">+91 7439638048</a></li>
              <li><a href="mailto:lahirisewanti2002@gmail.com">lahirisewanti2002@gmail.com</a></li>
              <li><a href="https://github.com/Sewanti27" target="_blank" rel="noopener noreferrer">My Github</a></li>
            </ul>
          </div>

          <div className="f-news">
            <h4 className="f-col-title">Get the latest information</h4>
            <form className="f-news-form" onSubmit={submit} aria-label="Newsletter signup">
              <input type="email" required placeholder="Email Address" value={email} onChange={e=> setEmail(e.target.value)} aria-label="Email address" />
              <button type="submit" disabled={done} aria-label="Subscribe">{done? '✓' : '>'}</button>
            </form>
            <p className="f-note">No spam. Unsubscribe anytime.</p>
          </div>
        </div>
        <hr className="f-sep" />
        <div className="f-bottom">
          <p className="f-copy">Copyright © {year} Sewanti. All rights reserved.</p>
          <p className="f-legal"><a href="#">User Terms & Conditions</a> | <a href="#">Privacy Policy</a></p>
        </div>
      </div>
    </footer>
  );
}

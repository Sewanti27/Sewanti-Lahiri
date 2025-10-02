import React, { useState, useMemo } from 'react';
import '../styles/header.css';

const RESUME_URL = 'https://drive.google.com/file/d/1XIUxFR2aoXT3czwrEApI5K6u8MrQUfXv/view?usp=sharing';
const ALL_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#home' }, // About also scrolls to hero
  { label: 'Service', href: '#services' },
  { label: 'Resume', href: RESUME_URL, external: true },
  { label: 'Project', href: '#projects' },
  { label: 'Contact', href: '#discuss' }
];

export default function Header() {
  const [active, setActive] = useState('Home');
  const [mobileOpen, setMobileOpen] = useState(false);

  const leftLinks = useMemo(() => ALL_LINKS.slice(0, 3), []); // Home, About, Service
  const rightLinks = useMemo(() => ALL_LINKS.slice(3), []);   // Resume, Project, Contact

  function handleClick(label) {
    setActive(label);
    setMobileOpen(false);
  }

  return (
    <header className="site-header" role="banner">
      <div className="nav-inner" aria-label="Primary navigation">
        {/* Desktop left group */}
        <nav className="nav-group left-nav" aria-label="Primary">
          <ul>
            {leftLinks.map(l => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={active === l.label ? 'active' : ''}
                  onClick={() => handleClick(l.label)}
                  {...(l.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Brand centered */}
        <div className="brand" aria-label="Site brand">
          <span className="brand-icon">SL</span>
          <span className="brand-text">Sewanti Lahiri</span>
        </div>

        {/* Desktop right group */}
        <nav className="nav-group right-nav" aria-label="Secondary">
          <ul>
            {rightLinks.map(l => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={active === l.label ? 'active' : ''}
                  onClick={() => handleClick(l.label)}
                  {...(l.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile toggle */}
        <button className={"nav-toggle" + (mobileOpen ? ' open' : '')}
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(o => !o)}>
          <span />
          <span />
          <span />
        </button>

        {/* Mobile panel */}
        <div className={"mobile-nav " + (mobileOpen ? 'open' : '')}>
          <ul>
            {ALL_LINKS.map(l => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={active === l.label ? 'active' : ''}
                  onClick={() => handleClick(l.label)}
                  {...(l.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >{l.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}

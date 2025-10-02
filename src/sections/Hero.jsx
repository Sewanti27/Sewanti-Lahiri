import React from 'react';
import '../styles/hero.css';

import portrait from 'public/PortfolioImage.png';
import helloDesign from 'public/Hellodesign.png';
import productDesign from 'public/productdesign.png';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-inner">
        {/* Left column with testimonial */}
        <div className="hero-left">
          <div className="testimonial-block">
            <p className="testimonial left"><span className="quote-mark">“</span>  I am a Content & Digital Marketing Specialist with over a year of professional experience, specializing in SEO-driven content strategy and technical writing</p>
          </div>
        </div>

        {/* Center content */}
        <div className="center-stack">
          <div className="hello-wrap">
            <div className="hello-chip">Hello!</div>
            <img src={helloDesign} className="hello-design" alt="" aria-hidden="true" />
          </div>
          <h1 className="hero-title">
            I'm <span className="accent">Sewanti</span>, <br />
            <span className="title-break">Digital Marketer</span>
            <img src={productDesign} className="product-design" alt="" aria-hidden="true" />
          </h1>
          <div className="hero-visual">
            <div className="semi-circle" aria-hidden="true" />
            <img src={portrait} alt="Sewanti" className="hero-portrait" />
            <div className="hero-cta-overlay">
              <div className="cta-combo floating">
                <a href="https://drive.google.com/file/d/1XIUxFR2aoXT3czwrEApI5K6u8MrQUfXv/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn primary" aria-label="View resume / portfolio">Portfolio ↗</a>
                <a href="#discuss" className="btn secondary" aria-label="Hire me">Hire me</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
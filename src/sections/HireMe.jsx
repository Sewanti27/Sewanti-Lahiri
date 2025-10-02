import React from 'react';
import '../styles/hireme.css';

const portrait = '/Portfolio image.png';

export default function HireMe() {
  return (
    <section id="hire" className="hire-section">
      <div className="hire-shell">
        <div className="hire-media">
          <div className="shape" aria-hidden="true" />
          <img src={portrait} alt="Profile" className="hire-image" />
        </div>
        <div className="hire-content">
          <h2 className="hire-title">Why <span className="accent">Hire me?</span></h2>
          <p className="hire-lead">
            I bring together content strategy, SEO expertise, and creativity to deliver measurable results. With hands-on experience in SEO-driven content creation, technical writing, and frontend development, I know how to blend storytelling with data to drive visibility and engagement.
          </p>
          <div className="hire-stats aligned">
            <div className="stat">
              <span className="num big">70+</span>
              <span className="label">SEO blogs</span>
            </div>
            <div className="stat">
              <span className="num big">AI-powered</span>
              <span className="label">content workflows &amp; advanced SEO tools</span>
            </div>
          </div>
          <a href="#discuss" className="hire-btn">Hire Me</a>
        </div>
      </div>
    </section>
  );
}

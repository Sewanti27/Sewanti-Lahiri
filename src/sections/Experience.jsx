import React from 'react';
import '../styles/experience.css';

// Data structure for timeline entries
const experienceData = [
  {
    role: 'Business Associate (Content & SEO)',
    period: '01/2025 – Present',
    company: 'ZenTrades · Pune',
    companyDesc: 'A business focusing on automating trading solutions',
    bullets: [
      'Authored 70 SEO-optimized blogs across TOFU/MOFU/BOFU improving SERP visibility and closing competitor keyword gaps',
      'Built & executed monthly social media content calendars with channel-specific posts; sustained engagement growth',
      'Managed Google Business Profile optimization & location-focused posts to increase local search interactions',
      'Researched & proposed SEO tools/calculators for Resources hub to strengthen organic acquisition & lead intent'
    ]
  },
  {
    role: 'Sustainability COE Intern',
    period: '01/2024 – 07/2024',
    company: 'Honeywell Technology Solutions · Madurai',
    companyDesc: 'A global technology company',
    bullets: [
      'Produced Life Cycle Assessment (LCA) documentation and ESG reports used by stakeholder teams',
      'Created visual presentations simplifying sustainability standards & environmental impact insights'
    ]
  },
  {
    role: 'Frontend Content Developer',
    period: '07/2022 – 10/2022',
    company: 'MavenMagnet · New York (Remote)',
    companyDesc: 'A digital media agency',
    bullets: [
      'Designed interactive dashboard content & improved data visualization for intuitive user analysis',
      'Optimized landing pages to increase organic traffic & conversions'
    ]
  },
  {
    role: 'Frontend Developer',
    period: '01/2022 – 06/2022',
    company: 'SHMT · Noida',
    companyDesc: 'A digital solutions and services company',
    bullets: [
      'Built responsive websites emphasizing UX, performance & consistent visual standards',
      'Produced on-brand visuals and site content that expanded audience reach'
    ]
  },
  {
    role: 'Technical Writer',
    period: '01/2021 – 12/2021',
    company: 'Freelance · Remote',
    companyDesc: 'Writing services for various clients',
    bullets: [
      'Delivered keyword-rich technical articles, guides & documentation for diverse client needs',
      'Translated complex topics into clear, engaging content aligned with brand tone'
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="exp-shell">
        <h2 className="exp-heading">My <span className="accent">Work Experience</span></h2>
        <div className="timeline" role="list">
          {experienceData.map((item, idx) => (
            <div className="timeline-row" key={item.role} role="listitem">
              <div className="col col-left">
                <h3 className="company">{item.company}</h3>
                <div className="period">{item.period}</div>
                <p className="company-desc">{item.companyDesc}</p>
              </div>
              <div className="col col-axis">
                <div className="axis-line" aria-hidden="true" />
                <div className={"axis-node" + (idx === 0 ? ' current' : '')} aria-hidden="true" />
              </div>
              <div className="col col-right">
                <h3 className="role">{item.role}</h3>
                <ul className="bullets">
                  {item.bullets.map(b => <li key={b}>{b}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React, { useState, useMemo } from 'react';
import '../styles/blog.css';

const blogData = [
  // Page 1 (original first three)
  { id: 'initial-steps', title: '6 Initial Steps I Took To Fix Myself', author: 'Sewanti', read: '6 min read', date: 'Nov 2, 2023', image: './6initialsteps.webp', link: 'https://medium.com/p/a7b1fae117de' },
  { id: 'toxic-people', title: 'The Habit of Attracting Toxic People', author: 'Sewanti', read: '6 min read', date: 'Mar 3, 2024', image: './rightpersonwrong.webp', link: 'https://medium.com/@lahirisewanti2002/the-habit-of-attracting-toxic-people-ccf0d91bb427' },
  { id: 'fungi-planets', title: 'Can Fungi Help Us Colonize Other Planets?', author: 'Sewanti', read: '5 min read', date: 'Dec 9, 2024', image: './fungi.webp', link: 'https://medium.com/@lahirisewanti2002/can-fungi-help-us-colonize-other-planets-277eab99dcf3' },
  // Page 2 (new set specified)
  { id: 'fire-hydrant-price-2025', title: 'A Complete Guide To Fire Hydrant Price In 2025', author: 'Sewanti', read: '9 min read', date: 'Feb 26, 2025', image: './firehydrantpricing.webp', link: 'https://zentrades.pro/zenfire/blog/guide-to-fire-hydrant-price' },
  { id: 'become-electrician-california-2025', title: 'How Do I Become An Electrician In California In 2025?', author: 'Sewanti', read: '9 min read', date: 'May 23, 2025', image: './californiaelectrician.webp', link: 'https://zentrades.pro/zenelectrical/blog/how-do-i-become-an-electrician-in-california' },
  { id: 'fire-dept-inspection-vs-inspector', title: 'Fire Department Inspection or Fire Inspector? Know the Facts', author: 'Sewanti', read: '9 min read', date: 'May 23, 2025', image: './firedepartment.jpg', link: 'https://zentrades.pro/zenfire/blog/fire-department-inspection-or-fire-inspector-know-the-facts' },
  // Page 3 (new set specified)
  { id: 'nfpa-exit-door-2025', title: 'NFPA Emergency Exit Door Requirements For 2025', author: 'Sewanti', read: '9 min read', date: 'May 5, 2025', image: './nfpaexitdoor.webp', link: 'https://zentrades.pro/zenfire/blog/nfpa-emergency-exit-door-requirements' },
  { id: 'fire-hydrant-system-guide', title: 'A Complete Fire Hydrant Fire System Guide: How It Works?', author: 'Sewanti', read: '9 min read', date: 'May 2025', image: './firehydrantguide.jpg', link: 'https://zentrades.pro/zenfire/blog/guide-to-fire-hydrant-fire-system' },
  { id: 'standard-vs-custom-iot-psu', title: 'Choosing between Standard & Custom Power Supplies for your IoT Product', author: 'Sewanti', read: '5 min read', date: 'Sep 16, 2025', image: './customIot.jpg', link: 'https://conexatech.com/2025/09/16/choosing-between-standard-and-custom-power-supplies-for-your-iot-product/' },
  // Page 4 (remaining original three moved here)
  { id: 'love-science', title: 'Is Love Really All About Science?', author: 'Sewanti', read: '7 min read', date: 'Dec 18, 2024', image: './loveallboutscience.webp', link: 'https://medium.com/@lahirisewanti2002/is-love-really-all-about-science-ec6e972e85e1' },
  { id: 'right-person', title: 'There’s No Such Thing as “Right Person, Wrong Time”', author: 'Sewanti', read: '8 min read', date: 'May 5, 2024', image: './toxic.webp', link: 'https://medium.com/@lahirisewanti2002/theres-no-such-thing-as-right-person-wrong-time-6fd5bac0b1b1' },
  { id: 'hating-yourself', title: 'Stop Hating Yourself And Get Your Life Together', author: 'Sewanti', read: '6 min read', date: 'Jul 18, 2025', image: './hatingyourself.webp', link: 'https://medium.com/@lahirisewanti2002/stop-hating-yourself-and-get-your-life-together-a26d8d5a4022' }
];

// Build pages of 3 (now 4 pages after expansion). Logic remains dynamic.
const pageSize = 3;

export default function BlogPosts(){
  const [page, setPage] = useState(0); // index of current page
  const pages = useMemo(()=> {
    const out=[]; for(let i=0;i<blogData.length;i+=pageSize) out.push(blogData.slice(i,i+pageSize)); return out;
  },[]);
  const total = pages.length;
  const safePage = Math.min(page, total-1);

  function next(){ setPage(p=> (p+1)%total); }
  function prev(){ setPage(p=> (p-1+total)%total); }

  return (
    <section id="blog" className="blog-section">
      <div className="blog-head">
        <h2 className="blog-title">From my <br/> <span className="accent">blog posts</span></h2>
        <a className="blog-see-all" href="https://medium.com/@lahirisewanti2002" target="_blank" rel="noopener noreferrer">See All</a>
      </div>

      <div className="blog-carousel">
        <button className="blog-nav prev" onClick={prev} aria-label="Previous blogs">‹</button>
        <div className="blog-viewport">
          <div className="blog-track" style={{width:`${total*100}%`, transform:`translateX(-${safePage*(100/total)}%)`}}>
            {pages.map((grp,i)=> (
              <div className="blog-page" key={i} style={{width:`${100/total}%`}}>
                {grp.map(post => (
                  <a key={post.id} href={post.link} target="_blank" rel="noopener noreferrer" className="blog-card" aria-label={`Read: ${post.title}`}>
                    <div className="blog-media">
                      <img src={post.image} alt={post.title} loading="lazy" />
                    </div>
                    <div className="blog-meta-top">
                      <span className="pill">{post.read}</span>
                    </div>
                    <div className="blog-meta-row">
                      <span className="dot-author">• {post.author}</span>
                      <span className="dot-date">• {post.date}</span>
                    </div>
                    <h3 className="blog-card-title">{post.title}</h3>
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>
        <button className="blog-nav next" onClick={next} aria-label="Next blogs">›</button>
      </div>

      <div className="blog-dots">
        {pages.map((_,i)=> <button key={i} className={'b-dot'+(i===safePage?' active':'')} onClick={()=> setPage(i)} aria-label={`Go to page ${i+1}`} />)}
      </div>
    </section>
  );
}

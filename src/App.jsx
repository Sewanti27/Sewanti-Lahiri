import React from 'react';
import Header from './components/Header.jsx';
import Hero from './sections/Hero.jsx';
import Services from './sections/Services.jsx';
import Experience from './sections/Experience.jsx';
import HireMe from './sections/HireMe.jsx';
import Projects from './sections/Projects.jsx';
import Testimonials from './sections/Testimonials.jsx';
import Discuss from './sections/Discuss.jsx';
import './styles/services.css';
import './styles/header.css';
import './styles/hero.css';
import './styles/testimonials.css';
import './styles/discuss.css';
import BlogPosts from './sections/BlogPosts.jsx';
import './styles/blog.css';
import Footer from './sections/Footer.jsx';
import './styles/footer.css';

export default function App() {
  return (
    <>
      <Header />
      <main>
    <Hero />
    <Services />
    <Experience />
  <HireMe />
  <Projects />
  <Testimonials />
  <Discuss />
  <BlogPosts />
  <Footer />
      </main>
    </>
  );
}

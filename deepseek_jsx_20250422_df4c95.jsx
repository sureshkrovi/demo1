import React from 'react';
import { Helmet } from 'react-helmet';
import { useMediaQuery } from 'react-responsive';
import './App.css';

const MobileFriendlyWebsite = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <div className="app-container">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Mobile-First React Website | Optimized for SEO & Performance</title>
        <meta 
          name="description" 
          content="A high-performance, mobile-friendly React website optimized for SEO with fast loading times and excellent user experience." 
        />
        <meta name="keywords" content="React, mobile-friendly, SEO, PWA, web development" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Mobile-First React Website" />
        <meta property="og:description" content="Optimized for SEO & Performance" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://yourwebsite.com/react-mobile-seo" />
      </Helmet>

      {/* Structured Data */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Mobile-First React Website",
            "url": "https://yourwebsite.com",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://yourwebsite.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          }
        `}
      </script>

      {/* Header */}
      <header className={`header ${isMobile ? 'mobile-header' : ''}`}>
        <div className="logo">
          <h1>React Mobile SEO</h1>
        </div>
        <nav className={`nav ${isMobile ? 'mobile-nav' : ''}`}>
          <button className="nav-toggle" aria-label="Menu">
            <span className="hamburger"></span>
          </button>
          <ul className="nav-list">
            <li><a href="#features">Features</a></li>
            <li><a href="#benefits">Benefits</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h2>Mobile-Optimized React Solutions</h2>
          <p>High-performance websites with SEO built-in from the start</p>
          <button className="cta-button">Get Started</button>
        </div>
        <div className="hero-image">
          <img 
            src="mobile-react-hero.jpg" 
            alt="Mobile friendly React development" 
            loading="lazy"
            width="600"
            height="400"
          />
        </div>
      </section>

      {/* Main Content */}
      <main className="main-content">
        <section id="features" className="content-section">
          <h2>Key Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>Mobile-First Design</h3>
              <p>Responsive layouts that work perfectly on all device sizes with touch-friendly interfaces.</p>
            </div>
            <div className="feature-card">
              <h3>SEO Optimized</h3>
              <p>Server-side rendering options, semantic HTML, and optimized metadata for better search rankings.</p>
            </div>
            <div className="feature-card">
              <h3>Fast Loading</h3>
              <p>Code splitting, lazy loading, and optimized assets for lightning-fast performance.</p>
            </div>
          </div>
        </section>

        <section id="benefits" className="content-section">
          <h2>Why Choose Our Solution</h2>
          <ul className="benefits-list">
            <li>Improved search engine rankings with technical SEO best practices</li>
            <li>Better user experience with intuitive mobile navigation</li>
            <li>Faster page speeds with optimized React code</li>
            <li>Accessibility compliance for wider audience reach</li>
          </ul>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>About Us</h3>
            <p>We specialize in creating mobile-friendly React applications with SEO built into the foundation.</p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/portfolio">Portfolio</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; {new Date().getFullYear()} React Mobile SEO. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default MobileFriendlyWebsite;
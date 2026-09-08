import React, { useState, useEffect } from 'react';
import { Menu, X, FileDown, Send } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({ activeSection }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Accolades', href: '#hackathons' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <a href="#hero" className="nav-brand">
          <div className="brand-badge">RL</div>
          <span className="brand-title">
            Ranjith<span className="gradient-text">.dev</span>
          </span>
        </a>

        {/* Desktop Links */}
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className={`nav-link ${activeSection === link.href.substring(1) ? 'active' : ''}`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Action CTAs */}
        <div className="nav-actions">
          <a
            href={personalInfo.resumeUrl}
            download="Ranjith_LK_Resume.pdf"
            className="btn btn-secondary btn-sm"
            title="Download Resume"
          >
            <FileDown size={16} />
            <span>Resume</span>
          </a>
          <a href="#contact" className="btn btn-primary btn-sm">
            <Send size={15} />
            <span>Let's Talk</span>
          </a>
          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-menu-drawer">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem' }}>
            <a
              href={personalInfo.resumeUrl}
              download="Ranjith_LK_Resume.pdf"
              className="btn btn-secondary btn-sm"
              style={{ flex: 1 }}
              onClick={() => setMobileMenuOpen(false)}
            >
              <FileDown size={16} />
              <span>Download CV</span>
            </a>
            <a
              href="#contact"
              className="btn btn-primary btn-sm"
              style={{ flex: 1 }}
              onClick={() => setMobileMenuOpen(false)}
            >
              <Send size={15} />
              <span>Contact</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

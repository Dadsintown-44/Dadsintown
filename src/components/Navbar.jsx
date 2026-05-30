'use client';
import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const navLinks = ['Home', 'About us', 'How we work', 'Services', 'Portfolio'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    if (window.lenis) {
      window.lenis.scrollTo(el, { offset: -8 });
    } else {
      el.scrollIntoView({ behavior: 'smooth' });
    }

    setMenuOpen(false);
  };

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>

        {/* ↓ Logo image replaces the text anchor */}
        <a href="#" className={styles.logo}>
          <img
            src="/dadsintown-logo-source1.png"
            alt="Dadsintown logo"
            className={styles.logoImg}
          />
        </a>

        <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
          {navLinks.map((link) => (
            <li key={link}>
              <button
                className={styles.link}
                onClick={() => scrollTo(link.toLowerCase().replace(/\s+/g, '-'))}
              >
                {link}
              </button>
            </li>
          ))}
        </ul>

        <button
          className={styles.cta}
          onClick={() => scrollTo('contact')}
        >
          Contact Us
        </button>

        <button
          className={styles.burger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`${styles.bar} ${menuOpen ? styles.barOpen : ''}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.barOpen : ''}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.barOpen : ''}`} />
        </button>
      </div>
    </nav>
  );
}
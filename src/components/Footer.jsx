'use client';

import styles from './Footer.module.css';

const footerLinks = {
  Company: [
    { label: 'Home', href: '#home' },
    { label: 'About us', href: '#about-us' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Contact', href: '#contact' },
  ],

  Specialties: [
    { label: 'How we work', href: '#how-we-work' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Digital Marketing', href: '#services' },
    { label: 'Website Development', href: '#services' },
    { label: 'Brand Optimization', href: '#services' },
  ],
};

const contactItems = [
  { icon: '📞', label: '+91 9167736515', href: 'tel:+919167736515' },
  { icon: '📍', label: 'Andheri, Mumbai' },
];

const socialLinks = [
  { label: 'Instagram', href: 'https://www.instagram.com/dadsintown/' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/red-box-agency/' },
];

export default function Footer() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    if (window.lenis) {
      window.lenis.scrollTo(el, { offset: -8 });
    } else {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const id = href.replace('#', '');
    scrollTo(id);
  };

  return (
    <footer className={styles.footer} data-animate-section>
      <div className={styles.container}>

        <div className={styles.top}>

          <div className={styles.brand}>
            <h2 className={styles.logo} data-animate>
              Dadsintown.
            </h2>

            <p className={styles.tagline} data-animate>
              Turning brands into conversation starters through strategy, storytelling, digital experiences, and meaningful brand growth.
            </p>

            <div className={styles.contactInfo} data-animate>
              {contactItems.map(({ icon, label, href }) => (
                <a
                  key={label}
                  className={styles.contactItem}
                  href={href ?? '#'}
                  onClick={(e) => {
                    if (href?.startsWith('#')) handleLinkClick(e, href);
                  }}
                >
                  <span className={styles.contactIcon}>{icon}</span>
                  <span>{label}</span>
                </a>
              ))}
            </div>

            <div className={styles.socialList} data-animate>
              {socialLinks.map(({ label, href }) => (
                <a
                  key={label}
                  className={styles.socialLink}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                >
                  {label[0]}
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([col, links]) => (
            <div key={col} className={styles.col} data-animate>
              <h4 className={styles.colTitle}>{col}</h4>
              <ul className={styles.colLinks}>
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className={styles.colLink}
                      onClick={(e) => handleLinkClick(e, href)}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className={styles.col} data-animate>
            <h4 className={styles.colTitle}>Connect</h4>
            <ul className={styles.colLinks}>
              {socialLinks.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} target="_blank" rel="noopener noreferrer" className={styles.colLink}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className={styles.bottom} data-animate>
          <span className={styles.copy}>
            © 2026 Dadsintown. All rights reserved.
          </span>

          <span className={styles.made}>
            Crafted with creativity ✦
          </span>
        </div>

      </div>
    </footer>
  );
}
import styles from './Footer.module.css';

const footerLinks = {
  Home: ['About us', 'Services', 'Portfolio', 'Testimonials'],
  Support: ['FAQ', 'Pricing', 'Contact', 'Privacy'],
  'Social Media': ['Twitter', 'Instagram', 'LinkedIn', 'Dribbble'],
};

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <span className={styles.logo}>creatiwise.</span>
            <p className={styles.tagline}>
              We craft brands and digital experiences that matter.
            </p>
          </div>

          {Object.entries(footerLinks).map(([col, links]) => (
            <div key={col} className={styles.col}>
              <h4 className={styles.colTitle}>{col}</h4>
              <ul className={styles.colLinks}>
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className={styles.colLink}>{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.bottom}>
          <span className={styles.copy}>© 2024 Creatiwise. All rights reserved.</span>
          <span className={styles.made}>Crafted with care.</span>
        </div>
      </div>
    </footer>
  );
}

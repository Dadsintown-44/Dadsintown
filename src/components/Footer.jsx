import styles from './Footer.module.css';

const footerLinks = {
  Company: [
    'About us',
    'Services',
    'Portfolio',
    'Contact',
  ],

  Specialties: [
    'Digital Marketing',
    'Website Development',
    'Social Media Marketing',
    'Search Engine Optimisation',
    'Brand Optimization',
  ],
};

export default function Footer() {
  return (
    <footer className={styles.footer} data-animate-section>
      <div className={styles.container}>

        {/* Top Section */}
        <div className={styles.top}>

          {/* Brand Section */}
          <div className={styles.brand}>
            <h2
              className={styles.logo}
              data-animate
              data-scramble
            >
              Dadsintown.
            </h2>

            <p className={styles.tagline} data-animate>
              Turning brands into conversation starters through
              strategy, storytelling, digital experiences,
              and meaningful brand growth.
            </p>

            <div className={styles.contactInfo} data-animate>
              <p>📞 +91 9167736515</p>
              <p>📍 Andheri, Mumbai</p>
            </div>
          </div>

          {/* Dynamic Footer Columns */}
          {Object.entries(footerLinks).map(([col, links]) => (
            <div key={col} className={styles.col} data-animate>
              <h4 className={styles.colTitle}>
                {col}
              </h4>

              <ul className={styles.colLinks}>
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className={styles.colLink}>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Social Media Section */}
          <div className={styles.col} data-animate>
            <h4 className={styles.colTitle}>
              Connect
            </h4>

            <ul className={styles.colLinks}>
              <li>
                <a
                  href="https://www.instagram.com/dadsintown/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.colLink}
                >
                  Instagram
                </a>
              </li>

              <li>
                <a
                  href="https://www.linkedin.com/company/red-box-agency/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.colLink}
                >
                  LinkedIn
                </a>
              </li>
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
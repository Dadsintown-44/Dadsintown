'use client';
import styles from './Hero.module.css';

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToAbout = () => {
    document.getElementById('about-us')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.container}>
        {/* Left column */}
        <div className={styles.left}>
          <span className={styles.welcomeBadge}>Welcome to Creatiwise</span>

          <h1 className={styles.headline}>
            We Craft Brands
            <span className={styles.ampersand}>&</span>
            Digital
            <span className={styles.italic}> Experiences</span>
            <span className={styles.star} aria-hidden="true">✦</span>
          </h1>

          <p className={styles.subtext}>
            Elevate Your Brand with Exceptional Design Solutions. From branding to UI,
            we bring your vision to life with tailored online design services.
          </p>

          <div className={styles.actions}>
            <button className={styles.btnPrimary} onClick={scrollToContact}>
              Let&apos;s talk
              <span className={styles.btnArrow}>↗</span>
            </button>
          </div>
        </div>

        {/* Right column */}
        <div className={styles.right}>
          <div className={styles.statsBar}>
            <div className={styles.stat}>
              <span className={styles.statNum}>250+</span>
              <span className={styles.statLabel}>Satisfied<br />Clients</span>
            </div>
            <div className={styles.avatarGroup}>
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className={styles.avatar} style={{ '--i': i }} />
              ))}
            </div>
          </div>

          <div className={styles.imageCard}>
            <div className={styles.heroImagePlaceholder}>
              <div className={styles.imageMock}>
                <div className={styles.imageMockCircle} />
                <div className={styles.imageMockLines}>
                  <span /><span /><span />
                </div>
              </div>
            </div>

            <div className={styles.floatingBadge} onClick={scrollToAbout}>
              <span>Solutions for Brand Identity</span>
              <span className={styles.badgeArrow}>→</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative doodle lines */}
      <svg className={styles.doodle} viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M5 20 Q30 5 60 20 Q90 35 115 20" stroke="#111" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        <path d="M10 30 Q40 15 70 30 Q100 45 110 28" stroke="#111" strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.3"/>
      </svg>
    </section>
  );
}
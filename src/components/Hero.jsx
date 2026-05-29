'use client';

import styles from './Hero.module.css';
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
  const scrollToContact = () => {
    document
      .getElementById('contact')
      ?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    document
      .getElementById('about-us')
      ?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.container}>

        {/* Left column */}
        <div className={styles.left}>
          <span className={styles.welcomeBadge}>
            Welcome to Dadsintown
          </span>

          <h1 className={styles.heading}>
            TURNING BRANDS INTO <br />
            <span className={styles.animatedText}>
              <TypeAnimation
                sequence={[
                  'IDENTITIES',
                  2000,
                  'EXPERIENCES',
                  2000,
                  'STORIES',
                  2000,
                  'IMPACT',
                  2000,
                  'CONNECTIONS',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                cursor={true}
                deletionSpeed={90}
              />
            </span>
          </h1>

          <p className={styles.subtext}>
            Crafting memorable brands, meaningful stories and digital experiences that move people.
          </p>

          <div className={styles.actions}>
            <button
              className={styles.btnPrimary}
              onClick={scrollToContact}
            >
              Let&apos;s Build Together 
              <span className={styles.btnArrow}>↗</span>
            </button>
          </div>
        </div>

        {/* Right column */}
        <div className={styles.right}>

          <div className={styles.statsBar}>
            <div className={styles.stat}>
              <span className={styles.statNum}>100+</span>
              <span className={styles.statLabel}>
                Projects <br />
                Delivered
              </span>
            </div>

            <div className={styles.avatarGroup}>
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className={styles.avatar}
                  style={{ '--i': i }}
                />
              ))}
            </div>
          </div>

          <div className={styles.imageCard}>

            <div className={styles.heroCardsContainer}>

              <div
                className={`${styles.reviewCard} ${styles.card1}`}
              >
                <div className={styles.clientTop}>
                  <img
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                    alt="client"
                    className={styles.clientImg}
                  />

                  <div>
                    <h4>Social Media</h4>
                    <p>@GlowBeauty</p>
                  </div>
                </div>

                <span className={styles.reviewQuote}>
                  “Our engagement doubled in weeks.”
                </span>
              </div>

              <div
                className={`${styles.reviewCard} ${styles.card2}`}
              >
                <div className={styles.clientTop}>
                  <img
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt="client"
                    className={styles.clientImg}
                  />

                  <div>
                    <h4>Website Design</h4>
                    <p>Urban Homes</p>
                  </div>
                </div>

                <span className={styles.reviewQuote}>
                  “Clean, premium and exactly our vibe.”
                </span>
              </div>

              <div
                className={`${styles.reviewCard} ${styles.card3}`}
              >
                <div className={styles.clientTop}>
                  <img
                    src="https://randomuser.me/api/portraits/women/68.jpg"
                    alt="client"
                    className={styles.clientImg}
                  />

                  <div>
                    <h4>Brand Identity</h4>
                    <p>Nova Studio</p>
                  </div>
                </div>

                <span className={styles.reviewQuote}>
                  “They made our brand unforgettable.”
                </span>
              </div>

            </div>

            <div
              className={styles.floatingBadge}
              onClick={scrollToAbout}
            >
              <span>Let&apos;s Build Your Brand</span>
              <span className={styles.badgeArrow}>→</span>
            </div>

          </div>
        </div>
      </div>

      {/* Decorative doodle lines */}
      <svg
        className={styles.doodle}
        viewBox="0 0 120 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M5 20 Q30 5 60 20 Q90 35 115 20"
          stroke="#111"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M10 30 Q40 15 70 30 Q100 45 110 28"
          stroke="#111"
          strokeWidth="1"
          fill="none"
          strokeLinecap="round"
          opacity="0.3"
        />
      </svg>
    </section>
  );
}
import styles from './About.module.css';

const tags = [
  'Brand Identity',
  'Social Media',
  'Website Design',
  'Digital Marketing',
  'Creative Strategy'
];

export default function About() {
  return (
    <section id="about-us" className={styles.about}>
      <div className={styles.container}>

        {/* Top row */}
        <div className={styles.topRow}>

          <div className={styles.textCol}>
            <span className="section-tag">About us</span>

            <h2 className={styles.heading}>
              Turning Brands Into <br />
              Conversation Starters
            </h2>

            <p className={styles.body}>
              At Dadsintown, we craft memorable brand identities,
              digital stories, and experiences that people remember.
              From branding and social media to websites and campaigns,
              we help businesses create impact that goes beyond visibility.
            </p>
          </div>

          <div className={styles.imageCol}>
            <div className={styles.imageCard}>

              <div className={styles.imagePlaceholder}>
                <div className={styles.serviceCard}>
                  ✨ Brand Identity
                </div>

                <div className={styles.serviceCard}>
                  📱 Social Media
                </div>

                <div className={styles.serviceCard}>
                  💻 Website Design
                </div>

                <div className={styles.serviceCard}>
                  🚀 Digital Growth
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom black section */}
        <div className={styles.statsBand}>

          <div className={styles.statsLeft}>
            <span className={styles.statBig}>100+</span>
            <span className={styles.statDesc}>
              Projects Successfully Delivered
            </span>

            <svg
              className={styles.waveDecor}
              viewBox="0 0 200 60"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M0 30 Q25 10 50 30 Q75 50 100 30 Q125 10 150 30 Q175 50 200 30"
                stroke="rgba(255,255,255,0.3)"
                strokeWidth="1.5"
                fill="none"
              />
            </svg>
          </div>

          <div className={styles.statsRight}>

            <div className={styles.tagCloud}>
              {tags.map((tag) => (
                <span key={tag} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>

            <div className={styles.bgImageCard}>
  <div className={styles.overlayContent}>
    <span className={styles.smallTag}>
      Creative • Strategy • Growth
    </span>

    <h4>Helping brands stand out.</h4>

    <p>
      Strategy + creativity + storytelling
      that turns attention into trust.
    </p>
  </div>
</div>

          </div>
        </div>

      </div>
    </section>
  );
}
import styles from './About.module.css';

const tags = ['Marketing', 'Web Design', 'Product Design', 'SEO', 'Brand Positioning'];

export default function About() {
  return (
    <section id="about-us" className={styles.about}>
      <div className={styles.container}>

        {/* Top row: text + image */}
        <div className={styles.topRow}>
          <div className={styles.textCol}>
            <span className="section-tag">About us</span>
            <h2 className={styles.heading}>
              Meet Creatiwise:<br />
              Your Design Partners
            </h2>
            <p className={styles.body}>
              We&apos;re not just designers; we&apos;re creators, problem-solvers, and your
              brand&apos;s best friends. At Creatiwise, we live and breathe design, from
              captivating visuals to seamless digital experiences. Think of us as an
              extension of your team, ready to bring your ideas to life.
            </p>
          </div>

          <div className={styles.imageCol}>
            <div className={styles.imageCard}>
              <div className={styles.imagePlaceholder}>
                <div className={styles.imgMockGrid}>
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className={styles.imgMockTile} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats band */}
        <div className={styles.statsBand}>
          <div className={styles.statsLeft}>
            <span className={styles.statBig}>40%</span>
            <span className={styles.statDesc}>Increased growth revenues</span>
            <svg className={styles.waveDecor} viewBox="0 0 200 60" fill="none" aria-hidden="true">
              <path d="M0 30 Q25 10 50 30 Q75 50 100 30 Q125 10 150 30 Q175 50 200 30"
                stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" fill="none"/>
              <path d="M0 40 Q25 20 50 40 Q75 60 100 40 Q125 20 150 40 Q175 60 200 40"
                stroke="rgba(255,255,255,0.15)" strokeWidth="1" fill="none"/>
            </svg>
          </div>

          <div className={styles.statsRight}>
            <div className={styles.tagCloud}>
              {tags.map((tag) => (
                <span key={tag} className={styles.tag}>{tag}</span>
              ))}
            </div>
            <div className={styles.teamImageCard}>
              <div className={styles.teamImgPlaceholder}>
                <div className={styles.teamMock}>
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className={styles.teamFace} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
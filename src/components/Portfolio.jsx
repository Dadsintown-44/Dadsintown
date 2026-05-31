import styles from './Portfolio.module.css';
import Link from 'next/link';
import projects from '../data/projects';

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className={styles.portfolio}
      data-animate-section
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <span
            className="section-tag"
            data-animate
          >
            Portfolio
          </span>
          <div className={styles.headerRow}>
            <h2
              className={styles.heading}
              data-animate
            >
              Explore our most<br />successful projects
            </h2>
            <a href="#" className={styles.viewAll} data-animate>
              All projects →
            </a>
          </div>
        </div>

        <div className={styles.grid}>
          {projects.map((p, i) => (
            <div
              key={p.slug}
              className={styles.cardWrapper}
              data-animate
              data-parallax
              data-parallax-strength={(i % 2 === 0 ? 14 : -14)}
            >
              <Link href={`/projects/${p.slug}`} className={styles.card}>
                <div
                  className={styles.thumb}
                  style={{
                    backgroundColor: p.color || 'transparent',
                    backgroundImage: p.image ? `url(${p.image})` : 'none',
                  }}
                >
                  <div className={styles.thumbInner}>
                    <div className={styles.thumbShape} />
                    <div className={styles.thumbLines}>
                      <span /><span /><span />
                    </div>
                  </div>
                  <span className={styles.viewBtn}>View Project →</span>
                </div>
                <div className={styles.meta}>
                  <span className={styles.projectCat}>{p.cat}</span>
                  <h3 className={styles.projectTitle}>{p.title}</h3>
                  <p className={styles.projectDescription}>{p.description}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

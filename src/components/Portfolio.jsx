import styles from './Portfolio.module.css';
import Link from 'next/link';
import projects from '../data/projects';

export default function Portfolio() {
  return (
    <section id="portfolio" className={styles.portfolio}>
      <div className={styles.bgBubbles}>
        <div className={`${styles.bubble} ${styles.bubble1}`} />
        <div className={`${styles.bubble} ${styles.bubble2}`} />
        <div className={`${styles.bubble} ${styles.bubble3}`} />
      </div>
      <div className={styles.container}>
        <div className={styles.header} data-animate-section>
          <span className={styles.tag} data-animate>OUR WORK</span>
          <h2 className={styles.heading} data-animate>Projects</h2>
        </div>

        <div className={styles.list}>
          {projects.map((p, i) => (
            <div 
              key={p.slug} 
              className={styles.card}
              style={{ '--card-index': i }}
              data-animate-section
            >
              <div className={styles.cardHeader} data-animate>
                <div className={styles.headerLeft}>
                  <span className={styles.num}>{(i + 1).toString().padStart(2, '0')}</span>
                  <div className={styles.titleWrap}>
                    <span className={styles.catLabel}>{p.cat}</span>
                    <h3 className={styles.titleLabel}>{p.title}</h3>
                  </div>
                </div>
                <Link href={`/projects/${p.slug}`} className={styles.viewBtn}>
                  LIVE PROJECT
                </Link>
              </div>
              <div className={styles.imagesWrap} data-animate>
                <div className={styles.largeImageBox}>
                  {p.image && <img src={p.image} alt={p.title} className={styles.img} />}
                </div>
                <div className={styles.smallImagesWrap}>
                  <div className={styles.smallImageBox}>
                    {p.image && <img src={p.image} alt={`${p.title} detail 1`} className={styles.img} />}
                  </div>
                  <div className={styles.smallImageBox}>
                    {p.image && <img src={p.image} alt={`${p.title} detail 2`} className={styles.img} />}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className={styles.footer} data-animate-section>
          <Link href="/projects" className={styles.viewAllBtn} data-animate>
            VIEW ALL PROJECTS ↗
          </Link>
        </div>
      </div>
    </section>
  );
}

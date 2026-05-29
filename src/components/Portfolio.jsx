import styles from './Portfolio.module.css';

const projects = [
  { title: 'Al product', cat: 'Brand Identity', color: '#e8f4e8' },
  { title: 'Al product', cat: 'UI/UX Design', color: '#e8e8f4' },
  { title: 'Al product', cat: 'Web Design', color: '#f4e8e8' },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className={styles.portfolio}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className="section-tag">Portfolio</span>
          <div className={styles.headerRow}>
            <h2 className={styles.heading}>
              Explore our most<br />successful projects
            </h2>
            <a href="#" className={styles.viewAll}>
              All projects →
            </a>
          </div>
        </div>

        <div className={styles.grid}>
          {projects.map((p, i) => (
            <div key={i} className={styles.card}>
              <div
                className={styles.thumb}
                style={{ background: p.color }}
              >
                {/* Placeholder visual */}
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

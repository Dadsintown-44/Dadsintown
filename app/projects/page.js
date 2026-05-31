import Navbar from '../../src/components/Navbar';
import Footer from '../../src/components/Footer';
import projects from '../../src/data/projects';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
  title: 'Projects — Dadsintown',
  description: 'A curated list of projects and case studies.',
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className={styles.page}>
        <section className={styles.hero}>
          <span className="section-tag">Projects</span>
          <h1>Selected work built for modern brands.</h1>
          <p>
            Explore premium case studies, digital experiences, and high-impact websites created for businesses seeking quality design and strong performance.
          </p>
        </section>

        <section className={styles.grid}>
          {projects.map((p) => (
            <Link
              key={p.slug}
              href={`/projects/${p.slug}`}
              className={styles.card}
            >
              <div
                className={styles.cardImage}
                style={{
                  backgroundColor: p.color || 'var(--color-bg-card)',
                  backgroundImage: p.image ? `url(${p.image})` : 'none',
                }}
              />
              <div className={styles.cardBody}>
                <span className={styles.badge}>{p.cat}</span>
                <h2 className={styles.cardTitle}>{p.title}</h2>
                <p className={styles.cardDesc}>{p.metaDescription || p.description}</p>
                <div className={styles.cardMeta}>
                  {p.client && <span>Client: {p.client}</span>}
                  {p.year && <span>{p.year}</span>}
                </div>
                <span className={styles.link}>View Project →</span>
              </div>
            </Link>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}

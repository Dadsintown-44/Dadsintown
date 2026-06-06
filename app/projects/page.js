import Navbar from '../../src/components/Navbar';
import Footer from '../../src/components/Footer';
import projects from '../../src/data/projects';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
  title: 'All Projects — Dadsintown',
  description: 'Explore every premium website, brand experience, and case study crafted by Dadsintown.',
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className={styles.page}>
        <section className={styles.hero} data-animate-section>
          <span className="section-tag" data-animate>All projects</span>
          <div className={styles.heroRow}>
            <h1 data-animate>Selected work for modern brands.</h1>
            <p data-animate>
              A clean archive of websites and digital experiences crafted with strong visuals, smooth interactions, and business-focused execution.
            </p>
          </div>
        </section>

        <section className={styles.grid} data-animate-section>
          {projects.map((project, index) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className={styles.card}
              data-animate
            >
              <div
                className={styles.cardImage}
                style={{
                  backgroundColor: project.color || 'var(--color-bg-card)',
                  backgroundImage: project.image ? `url(${project.image})` : 'none',
                }}
              />

              <div className={styles.cardBody}>
                <div className={styles.cardMeta}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <span>{project.cat}</span>
                  {project.year && <span>{project.year}</span>}
                </div>

                <h2 className={styles.cardTitle}>{project.title}</h2>
                <p className={styles.cardDesc}>{project.description}</p>

                <span className={styles.link}>View project →</span>
              </div>
            </Link>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}

import projects from '../../../src/data/projects';
import { notFound } from 'next/navigation';
import Navbar from '../../../src/components/Navbar';
import Footer from '../../../src/components/Footer';
import styles from './page.module.css';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: 'Project not found' };
  return {
    title: `${project.title} — Dadsintown`,
    description: project.metaDescription || project.description,
    openGraph: {
      title: project.title,
      description: project.metaDescription || project.description,
      images: [project.image || '/dadsintown.png'],
    },
    twitter: {
      card: 'summary_large_image',
      title: project.title,
      description: project.metaDescription || project.description,
      images: [project.image || '/dadsintown.png'],
    },
  };
}

export default async function ProjectDetail({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  return (
    <>
      <Navbar />
      <main className={styles.page}>
        <section className={styles.hero}>
          <div
            className={styles.heroImage}
            style={{
              backgroundColor: project.color || 'var(--color-bg-card)',
              backgroundImage: project.image ? `url(${project.image})` : 'none',
            }}
          />
          <div className={styles.heroCopy}>
            <span className="section-tag">{project.cat}</span>
            <h1>{project.title}</h1>
            <p>{project.metaDescription || project.description}</p>
            <div className={styles.heroMeta}>
              {project.client && (
                <div>
                  <strong>Client</strong>
                  <span>{project.client}</span>
                </div>
              )}
              {project.year && (
                <div>
                  <strong>Year</strong>
                  <span>{project.year}</span>
                </div>
              )}
              {project.industry && (
                <div>
                  <strong>Industry</strong>
                  <span>{project.industry}</span>
                </div>
              )}
              {project.website && (
                <div>
                  <strong>Website</strong>
                  <span>
                    <a href={project.website} target="_blank" rel="noreferrer">
                      Visit Live Site
                    </a>
                  </span>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className={styles.sectionContent}>
          <div className={styles.sectionBlock}>
            <h2>Project Overview</h2>
            <p>{project.description}</p>
          </div>

          <div className={styles.sectionBlock}>
            <h2>Key highlights</h2>
            {project.features && (
              <ul className={styles.listGrid}>
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            )}
          </div>

          {project.services && (
            <div className={styles.sectionBlock}>
              <h2>Services delivered</h2>
              <ul className={styles.listGrid}>
                {project.services.map((service, index) => (
                  <li key={index}>{service}</li>
                ))}
              </ul>
            </div>
          )}

          {project.tech && (
            <div className={styles.sectionBlock}>
              <h2>Tech stack</h2>
              <ul className={styles.listGrid}>
                {project.tech.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </div>
          )}

          {project.caseStudy && (
            <div className={styles.sectionBlock}>
              <h2>Case study</h2>
              <div
                className={styles.caseStudy}
                dangerouslySetInnerHTML={{ __html: project.caseStudy }}
              />
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}

import styles from './Services.module.css';

const services = [
  {
    icon: '◈',
    title: 'Brand Identity',
    desc: 'Logo design, color systems, typography, and brand guidelines that create a lasting impression.',
  },
  {
    icon: '◇',
    title: 'Illustration',
    desc: 'Custom illustrations and visual storytelling that bring your brand personality to life.',
  },
  {
    icon: '◉',
    title: 'UI/UX Design',
    desc: 'Intuitive interfaces and seamless user experiences designed for engagement and conversion.',
  },
  {
    icon: '⟐',
    title: 'Frontend Design',
    desc: 'Pixel-perfect, responsive web experiences built with clean code and modern frameworks.',
  },
  {
    icon: '◎',
    title: 'Android/iOS App',
    desc: 'Native and cross-platform mobile app design and development tailored to your users.',
  },
  {
    icon: '◻',
    title: 'Software Development',
    desc: 'End-to-end web and software development, from architecture to deployment.',
  },
];

export default function Services() {
  return (
    <section id="services" className={styles.services}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className="section-tag">What we do</span>
          <div className={styles.headerRow}>
            <h2 className={styles.heading}>
              We design meaningful not just<br />
              quick impressions
            </h2>
            <p className={styles.subtext}>
              From brand identity to full-stack development — we cover the complete
              spectrum of digital design services under one roof.
            </p>
          </div>
        </div>

        <div className={styles.grid}>
          {services.map((svc) => (
            <div key={svc.title} className={styles.card}>
              <span className={styles.icon} aria-hidden="true">{svc.icon}</span>
              <h3 className={styles.cardTitle}>{svc.title}</h3>
              <p className={styles.cardDesc}>{svc.desc}</p>
              <span className={styles.cardArrow}>→</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

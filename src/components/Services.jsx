import styles from './Services.module.css';

const services = [
  {
    icon: '✦',
    title: 'Logo Design',
    desc: 'Memorable logos and visual identities that make your brand instantly recognizable.',
  },
  {
    icon: '✧',
    title: 'Brand Identity',
    desc: 'Complete branding systems including colors, typography, visuals, and brand guidelines.',
  },
  {
    icon: '◉',
    title: 'Website Design',
    desc: 'Modern, responsive websites crafted to elevate your digital presence and conversions.',
  },
  {
    icon: '◎',
    title: 'Social Media Handling',
    desc: 'Creative content, strategy, and consistent management to grow your online community.',
  },
  {
    icon: '⬢',
    title: 'Digital Marketing',
    desc: 'Campaigns that increase visibility, engagement, and meaningful audience connections.',
  },
  {
    icon: '✺',
    title: 'Content Creation',
    desc: 'Visual storytelling, creative posts, videos, and content designed to spark conversations.',
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className={styles.services}
      data-animate-section
    >
      <div className={styles.container}>
        
        {/* Header */}
        <div className={styles.header}>
          <span
            className="section-tag"
            data-animate
            data-scramble
          >
            What we do
          </span>

          <div className={styles.headerRow}>
            <h2
              className={styles.heading}
              data-animate
              data-scramble
            >
              We turn brands into<br />
              unforgettable experiences
            </h2>

            <p className={styles.subtext} data-animate>
              From branding and logo design to digital marketing, social media,
              websites, and content creation — we help brands stand out,
              connect, and grow with purpose.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className={styles.grid}>
          {services.map((svc, i) => (
            <div
              key={svc.title}
              className={styles.card}
              data-animate
              data-parallax
              data-parallax-strength={i % 2 === 0 ? 10 : -10}
            >
              
              <span
                className={styles.icon}
                aria-hidden="true"
              >
                {svc.icon}
              </span>

              <h3 className={styles.cardTitle}>
                {svc.title}
              </h3>

              <p className={styles.cardDesc}>
                {svc.desc}
              </p>

              <span className={styles.cardArrow}>
                →
              </span>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
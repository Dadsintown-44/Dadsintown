import styles from './Services.module.css';

const services = [
  {
    icon: '✦',
    title: 'Logo Design',
    desc: 'Unique, memorable logos that capture your brand\'s essence and leave a lasting impression.',
  },
  {
    icon: '✧',
    title: 'Brand Identity',
    desc: 'Complete brand systems including color, typography, and guidelines that build strong recognition.',
  },
  {
    icon: '◉',
    title: 'Website Design',
    desc: 'Modern, responsive websites designed to deliver seamless experiences and drive conversions.',
  },
  {
    icon: '◎',
    title: 'Social Media Handling',
    desc: 'Creative content and strategy to grow your audience and keep your brand active across platforms.',
  },
  {
    icon: '⬢',
    title: 'Digital Marketing',
    desc: 'Data-driven campaigns that increase visibility, generate leads, and maximize your ROI.',
  },
  {
    icon: '✺',
    title: 'Content Creation',
    desc: 'Engaging visuals, videos, and copy that tell your brand\'s story and spark real connections.',
  },
];

export default function Services() {
  return (
    <section id="services" className={styles.services}>
      <div className={styles.container}>
        
        {/* Hero Section */}
        <div className={styles.heroSection} data-animate-section>
          <div className={styles.heroLeft}>
            <span className="section-tag" data-animate data-scramble>
              Our Services
            </span>

            <h2 className={styles.heroHeading} data-animate data-scramble>
              Services that build brands and drive growth.
            </h2>

            <p className={styles.heroDesc} data-animate>
              From branding to digital growth, we offer end-to-end solutions that help your brand stand out, connect, and scale.
            </p>

            <button className={styles.ctaButton} data-animate>
              Let's Build Together
              <span>→</span>
            </button>
          </div>

          <div className={styles.heroRight} data-animate>
            <div className={styles.imagePlaceholder}>
              {/* Image placeholder - user will add image */}
            </div>
          </div>
        </div>

        {/* Services Grid Section */}
        <div className={styles.gridSection} data-animate-section>
          <div className={styles.gridHeader}>
            <span className={styles.gridTag}>What we do</span>
            <h3 className={styles.gridHeading}>
              Complete digital solutions<br />for your brand
            </h3>
          </div>

          <div className={styles.grid}>
            {services.map((svc) => (
              <div key={svc.title} className={styles.card} data-animate>
                <span className={styles.icon} aria-hidden="true">
                  {svc.icon}
                </span>

                <h3 className={styles.cardTitle}>{svc.title}</h3>

                <p className={styles.cardDesc}>{svc.desc}</p>

                <a href="#contact" className={styles.cardLink}>
                  Explore
                  <span className={styles.cardArrow}>→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
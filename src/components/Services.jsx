import styles from './Services.module.css';

const services = [
  {
    num: '01',
    title: 'Website Design',
    desc: 'Modern, responsive websites designed to deliver seamless experiences and drive conversions.',
  },
  {
    num: '02',
    title: 'Social Media Handling',
    desc: 'Creative content and strategy to grow your audience and keep your brand active across platforms.',
  },
  {
    num: '03',
    title: 'Digital Marketing',
    desc: 'Data-driven campaigns that increase visibility, generate leads, and maximize your ROI.',
  },
  {
    num: '04',
    title: 'Content Creation',
    desc: 'Engaging visuals, videos, and copy that tell your brand\'s story and spark real connections.',
  },
];

export default function Services() {
  return (
    <section id="services" className={styles.services} data-animate-section>
      <div className={styles.bgBubbles}>
        <div className={`${styles.bubble} ${styles.bubble1}`} />
        <div className={`${styles.bubble} ${styles.bubble2}`} />
      </div>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.tag} data-animate>WHAT WE DO</span>
          <h2 className={styles.heading} data-animate>Services</h2>
        </div>

        <div className={styles.list}>
          {services.map((svc) => (
            <div key={svc.num} className={styles.card} data-animate>
              <div className={styles.num}>{svc.num}</div>
              <div className={styles.content}>
                <h3 className={styles.title}>{svc.title}</h3>
                <p className={styles.desc}>{svc.desc}</p>
              </div>
              <div className={styles.arrowWrap}>
                <span className={styles.arrow}>↗</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
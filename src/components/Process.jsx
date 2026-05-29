import styles from './Process.module.css';

const steps = [
  {
    num: '01',
    title: 'Define',
    body: 'We start by deeply understanding your brand, audience, and goals. This discovery phase sets the strategic foundation for everything that follows.',
    rot: '2deg',
    delay: '0s',
  },
  {
    num: '02',
    title: 'Design',
    body: 'Our creative team translates strategy into stunning visuals — crafting identities, interfaces, and experiences that resonate and inspire.',
    rot: '-3deg',
    delay: '0.1s',
  },
  {
    num: '03',
    title: 'Build',
    body: 'We bring designs to life with clean, performant code. Every interaction is refined to deliver seamless digital experiences across all devices.',
    rot: '1.5deg',
    delay: '0.2s',
  },
  {
    num: '04',
    title: 'Launch',
    body: 'We deploy, test, and iterate — making sure everything performs perfectly. Post-launch support ensures your brand keeps growing.',
    rot: '-2deg',
    delay: '0.3s',
  },
];

export default function Process() {
  return (
    <section id="how-we-work" className={styles.process}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className="section-tag">How we work</span>
          <h2 className={styles.heading}>
            Let us show you how we drive<br />
            your brand to new heights
          </h2>
          <p className={styles.subtext}>
            A proven four-step process designed to deliver exceptional results —
            from first brief to final launch.
          </p>
        </div>

        <div className={styles.notesArea}>
          {/* Dashed path */}
          <svg className={styles.path} viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path
              d="M100 80 Q400 180 680 120 Q500 300 200 340 Q450 420 680 500"
              stroke="#ccc"
              strokeWidth="1.5"
              strokeDasharray="8 6"
              fill="none"
            />
          </svg>

          <div className={styles.notesGrid}>
            {steps.map((step) => (
              <div
                key={step.num}
                className={styles.note}
                style={{ '--rot': step.rot, '--delay': step.delay }}
              >
                <div className={styles.pin} />
                <span className={styles.stepNum}>{step.num}</span>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepBody}>{step.body}</p>
              </div>
            ))}
          </div>

          <div className={styles.readyBadge}>
            <span className={styles.badgeCurve}>
              <em>✦ Ready to be delivered!</em>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section
      id="contact"
      className={styles.contact}
      data-animate-section
    >
      <div className={styles.container}>
        <div
          className={styles.card}
          data-animate
          data-parallax
          data-parallax-strength="8"
        >
          <div className={styles.content}>
            <span
              className={styles.eyebrow}
              data-animate
            >
              Get in touch
            </span>
            <h2
              className={styles.heading}
              data-animate
            >
              Let&apos;s start designing<br />your project
            </h2>
            <p className={styles.subtext} data-animate>
              Want to see how to transform your brand into a unique style?
              Tell us about your project.
            </p>
            <a
              href="mailto:dadsintown@gmail.com"
              className={styles.cta}
              data-animate
            >
              Send a message →
            </a>
          </div>

          <div
            className={styles.visual}
            data-animate
            data-parallax
            data-parallax-strength="-12"
          >
            <div className={styles.visualInner}>
              <span className={styles.visualStar}>✦</span>
              <div className={styles.visualRing} />
              <div className={styles.visualRing2} />
              <div className={styles.visualRing3} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

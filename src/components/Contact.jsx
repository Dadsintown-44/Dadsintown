import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.content}>
            <span className={styles.eyebrow}>Get in touch</span>
            <h2 className={styles.heading}>
              Let&apos;s start designing<br />your project
            </h2>
            <p className={styles.subtext}>
              Want to see how to transform your brand into a unique style?
              Tell us about your project.
            </p>
            <a href="mailto:hello@creatiwise.com" className={styles.cta}>
              Send a message →
            </a>
          </div>

          <div className={styles.visual}>
            <div className={styles.visualInner}>
              <span className={styles.visualStar}>✦</span>
              <div className={styles.visualRing} />
              <div className={styles.visualRing2} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

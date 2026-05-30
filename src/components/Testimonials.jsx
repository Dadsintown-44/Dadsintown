'use client';
import { useState } from 'react';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    quote: "Working with Creatiwise transformed our brand completely. Their design thinking is unparalleled — they understood our vision immediately and delivered something we could never have imagined on our own.",
    name: 'John D.',
    role: 'CEO, TechStart',
    initials: 'JD',
  },
  {
    quote: "The team's attention to detail and creative process is unlike anything I've experienced. They delivered our rebrand on time and the results speak for themselves — 40% growth in the first quarter.",
    name: 'Sarah M.',
    role: 'Founder, Bloom Co.',
    initials: 'SM',
  },
  {
    quote: "Creatiwise didn't just design our app — they elevated the entire experience. Users love it and our retention has never been higher. True design partners.",
    name: 'Alex K.',
    role: 'Product Lead, Nexus',
    initials: 'AK',
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="testimonials"
      className={styles.testimonials}
      data-animate-section
    >
      <div className={styles.container}>
        <span
          className="section-tag"
          data-animate
          data-scramble
        >
          Reviews
        </span>
        <h2
          className={styles.heading}
          data-animate
          data-scramble
        >
          Here&apos;s what people say about<br />our work
        </h2>

        <div
          className={styles.card}
          data-animate
          data-parallax
          data-parallax-strength="-10"
        >
          <div className={styles.quoteIcon}>&ldquo;</div>
          <p className={styles.quote}>{testimonials[active].quote}</p>

          <div className={styles.author}>
            <div className={styles.avatar}>
              {testimonials[active].initials}
            </div>
            <div>
              <div className={styles.name}>{testimonials[active].name}</div>
              <div className={styles.role}>{testimonials[active].role}</div>
            </div>
          </div>
        </div>

        <div className={styles.dots} data-animate>
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === active ? styles.dotActive : ''}`}
              onClick={() => setActive(i)}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './About.module.css';

const tags = ['Marketing', 'Web Design', 'Product Design', 'SEO', 'Brand Positioning'];

export default function About() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    if (!section || !video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const visible = entry.isIntersecting && entry.intersectionRatio >= 0.35;
        setIsVisible(visible);

        if (visible) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: [0.35, 0.5, 0.75] }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const toggleMute = () => setIsMuted((current) => !current);

  return (
    <section id="about-us" className={styles.about} ref={sectionRef}>
      <div className={styles.container}>

        {/* Top row: text + image */}
        <div className={styles.topRow}>
          <div className={styles.textCol}>
            <span className="section-tag">About us</span>
            <h2 className={styles.heading}>
              Turning brands into conversation starters
            </h2>
            <p className={styles.body}>
              At Dadsintown, we craft memorable brand identities, digital stories, and experiences that people remember. From branding and social media to websites and campaigns, we help businesses create impact that goes beyond visibility.
            </p>
            <p className={styles.subtext}>
              A short visual introduction to our process, with crisp playback only while this section is in view.
            </p>
          </div>

          <div className={styles.imageCol}>
            <div className={styles.imageCard}>
              <video
                ref={videoRef}
                className={styles.aboutVideo}
                autoPlay
                loop
                muted={isMuted}
                playsInline
              >
                <source src="/about-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              <div className={styles.videoOverlay}>
                <span className={styles.videoBadge}>
                  {isVisible ? 'Playing while visible' : 'Paused when off-screen'}
                </span>
                <button
                  type="button"
                  className={styles.audioToggle}
                  onClick={toggleMute}
                >
                  {isMuted ? 'Sound Off' : 'Sound On'}
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Stats band */}
        <div className={styles.statsBand}>
          <div className={styles.statsLeft}>
            <span className={styles.statBig}>100+</span> <br></br>
            <span className={styles.statDesc}>Projects Delivered</span>
            <svg className={styles.waveDecor} viewBox="0 0 200 60" fill="none" aria-hidden="true">
              <path
                d="M0 30 Q25 10 50 30 Q75 50 100 30 Q125 10 150 30 Q175 50 200 30"
                stroke="rgba(255,255,255,0.3)"
                strokeWidth="1.5"
                fill="none"
              />
              <path
                d="M0 40 Q25 20 50 40 Q75 60 100 40 Q125 20 150 40 Q175 60 200 40"
                stroke="rgba(255,255,255,0.15)"
                strokeWidth="1"
                fill="none"
              />
            </svg>
          </div>

          <div className={styles.statsRight}>
            <div className={styles.tagCloud}>
              {tags.map((tag) => (
                <span key={tag} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>

            <div className={styles.teamImageCard}>
              <div className={styles.teamImgPlaceholder}>
                <div className={styles.teamMock}>
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className={styles.teamFace} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
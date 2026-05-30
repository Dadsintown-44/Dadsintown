import styles from './Marquee.module.css';

const brands = ['Branding', 'Digital Marketing', 'WEBSITE DESIGN', 'SOCIAL MEDIA', 'CONTENT CREATION', 
  'SEO'];
  
export default function Marquee() {
  return (
    <div className={styles.wrapper} data-animate-section>
      <div
        className={styles.track}
        data-animate
        data-marquee-track
      >
        {[...brands, ...brands].map((brand, i) => (
          <span key={i} className={styles.item}>
            <span className={styles.dot}>+</span>
            <span className={styles.brandName}>{brand}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
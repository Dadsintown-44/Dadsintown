import styles from './Marquee.module.css';

const brands = ['Salon', 'Salon', 'Yububa', 'Digg', 'Cinfores', 'Adobe', 'Figma', 'Notion'];

export default function Marquee() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.track}>
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
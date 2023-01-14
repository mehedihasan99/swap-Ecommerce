import styles from "../styles/IconCard.module.css";
import Image from "next/image";
export default function iconCard() {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.leftCard}>
        <div className={`${styles["leftCardBg"]} ${styles["cardStyle"]}`}>
          <div className={styles.iconTextContainer}>
            <h2>Need Clash?</h2>
            <p>Sell your unneeded things</p>
          </div>
          <div className={styles.iconContainer}>
            <img src="/Vector1.png" alt="" width="22.6" height="36" />
            <img src="/Vector2.png" alt="" width="52.55" height="36" />
            <img src="/Vector3.png" alt="" width="44.73" height="36" />
            <img src="/dolar.png" alt="" width="35" height="36" />
            <img src="/Vector2.png" alt="" width="52.55" height="36" />
          </div>
        </div>
      </div>
      <div className={styles.rightCard}>
        <div className={`${styles["rightCardBg"]} ${styles["cardStyle"]}`}>
          <div className={styles.iconTextContainer}>
            <h2>Looking for Something?</h2>
            <p>Buy now.</p>
          </div>
          <div className={styles.iconContainer}>
            <img src="/Vector1.png" alt="" width="22.6" height="36" />
            <img src="/Vector2.png" alt="" width="52.55" height="36" />
            <img src="/Vector3.png" alt="" width="44.73" height="36" />
            <img src="/dolar.png" alt="" width="35" height="36" />
            <img src="/Vector2.png" alt="" width="52.55" height="36" />
          </div>
        </div>
      </div>
    </div>
  );
}

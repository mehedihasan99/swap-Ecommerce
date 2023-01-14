import styles from "../styles/cardItem.module.css";
import Image from "next/image";
export default function iconCard() {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.leftCard}>
        <div className={`${styles["leftCardBg"]} ${styles["cardStyle"]}`}>
          <div className={styles.iconTextContainer}>
            <h2>Display Items</h2>
            <p>
              In order to get people to buy your products or services you must
              solve a problem that they have.
            </p>
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
            <h2>Valuable resource?</h2>
            <p>
              Picture this. You’re in the market for a new mattress, and the
              sales rep at one of the mattress companies you are considering
              provides stellar service. Not only do they actively listen to your
              concerns with your current mattress and understand what you’re
              looking for in your next purchase, they’re able to confidently
              speak to how their product is the perfect fit for you.
            </p>
          </div>
          {/* <div className={styles.iconContainer}>
            <img src="/Vector1.png" alt="" width="22.6" height="36" />
            <img src="/Vector2.png" alt="" width="52.55" height="36" />
            <img src="/Vector3.png" alt="" width="44.73" height="36" />
            <img src="/dolar.png" alt="" width="35" height="36" />
            <img src="/Vector2.png" alt="" width="52.55" height="36" />
          </div> */}
        </div>
      </div>
    </div>
  );
}

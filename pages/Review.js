import styles from "../styles/review.module.css";
import Image from "next/image";
export default function iconCard() {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.leftCard}>
        <h2 className={styles.reviewH2}>Consumer benefit</h2>
        <div className={`${styles["leftCardBg"]} ${styles["cardStyle"]}`}>
          <div className={styles.iconTextContainer}>
            <p>
              The key consumer benefit — or KCB for short — is the primary
              benefit that a feature within your product provides to the
              customer. Now, this isn’t a free pass to rattle off all the
              features of your product and ask your prospect to buy it.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.leftCard}>
        <h2 className={styles.reviewH2}>Biased your product</h2>
        <div className={`${styles["leftCardBg"]} ${styles["cardStyle"]}`}>
          <div className={styles.iconTextContainer}>
            <p>
              I see far too many reps pretending to be unbiased in an effort to
              sound "credible." The buyer, who is both educated and experienced,
              expects sales reps to be biased. In fact, nothing you say will
              make a customer forget that ultimately.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.leftCard}>
        <h2 className={styles.reviewH2}>Be transparent </h2>
        <div className={`${styles["leftCardBg"]} ${styles["cardStyle"]}`}>
          <div className={styles.iconTextContainer}>
            <p>
              Along the same lines of being biased about your product, you want
              to be transparent about it, too. Sometimes, that means admitting
              when your product doesn’t do something exactly the way the client
              would prefer.
            </p>
          </div>
        </div>
      </div>{" "}
      <div className={styles.leftCard}>
        <h2 className={styles.reviewH2}>Find common ground</h2>
        <div className={`${styles["leftCardBg"]} ${styles["cardStyle"]}`}>
          <div className={styles.iconTextContainer}>
            <p>
              Your prospects want to find a connection with you, even if it
              doesn’t seem that way at first. Give them what they want by doing
              your research beforehand. Find something you have in common, and
              if you can’t make it your mission to find common ground.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.leftCard}>
        <h2 className={styles.reviewH2}>Decision convenient</h2>
        <div className={`${styles["leftCardBg"]} ${styles["cardStyle"]}`}>
          <div className={styles.iconTextContainer}>
            <p>
              When tasks are inconvenient or complicated to complete, we’re less
              likely to do them. That’s one reason why businesses like Uber,
              Instacart, and Amazon are so ingrained into our lives.
            </p>
          </div>
        </div>
      </div>{" "}
      <div className={styles.leftCard}>
        <h2 className={styles.reviewH2}>Keep the conversation</h2>
        <div className={`${styles["leftCardBg"]} ${styles["cardStyle"]}`}>
          <div className={styles.iconTextContainer}>
            <p>
              If you don’t succeed in making the sale the first time you pitch,
              don’t be discouraged. By using the tricks above, you likely have
              built a level of trust with the prospect that is invaluable.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

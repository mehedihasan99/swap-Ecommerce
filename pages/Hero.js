import styles from "../styles/Hero.module.css";
import Image from "next/image";
export default function Hero() {
  return (
    <div className={styles.heroImg}>
      <Image src="/hero-img.jpg" width="1128" height="380" />
    </div>
  );
}

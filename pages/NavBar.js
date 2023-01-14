import styles from "../styles/NavBar.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faSearch,
  faUser,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
export default function NavBar() {
  return (
    <div className={styles.container}>
      <div className={styles.leftPart}>
        <div>
          <Image src="/swap.png" alt="logo" width="90" height="30" />
        </div>
        <div>
          <ul className={styles.menuLiContainer}>
            <li>
              <a href="#">Sell</a>
            </li>
            <li>
              <a href="#">Buy</a>
            </li>
            <li>
              <a href="#">Swap</a>
            </li>
            <li>
              <a href="#">More</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.userElementContainer}>
        <div></div>
        <div className={styles.users}>
          <div className="location">
            <FontAwesomeIcon icon={faLocationDot} /> Dhaka
          </div>
          <div className="user-icon">
            <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
          </div>
          <div className="shopping-card">
            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
          </div>
        </div>
      </div>
    </div>
  );
}

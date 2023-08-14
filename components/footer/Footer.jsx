import styles from "./footer.module.css";
import { BsTelephone, BsInstagram } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.head}>Squid Game</div>
      <div className={styles.contact}>
        <div className={styles.icon}>
          <BsTelephone />
        </div>
        <span>070-879-60-14</span>
        <a
          href="https://www.instagram.com/squidgame_baku/"
          className={styles.icon}
          target="_blank"
          rel="noreferrer"
        >
          <BsInstagram />
        </a>
      </div>
      <div className={styles.location}>
        <h2>Ünvan</h2>
        <div className={styles.textIcon}>
          <HiLocationMarker />
          <span>Sabit Rəhman</span>
        </div>
      </div>
      <hr className={styles.bar} />
      <div className={styles.production}>
        <h1>Squid Game</h1>
        <p>© 2023 Suid Game -DevZiya</p>
      </div>
    </div>
  );
};

export default Footer;

import styles from "./footer.module.css";
import { BsTelephone, BsInstagram } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.head}>Koza</div>
      <div className={styles.contact}>
        <div className={styles.icon}>
          <BsTelephone />
        </div>
        <span>070-879-60-14</span>
        <div className={styles.icon}>
          <BsInstagram />
        </div>
      </div>
      <div className={styles.location}>
        <h2>Ünvan</h2>
        <div className={styles.textIcon}>
          <HiLocationMarker />
          <span>Mixail Kaveroçkin</span>
        </div>
      </div>
      <hr className={styles.bar}/>
      <div className={styles.production}>
        <h1>KOZA.AZ</h1>
        <p>© 2022 Koza.az - Z Company</p>
      </div>
    </div>
  );
};

export default Footer;

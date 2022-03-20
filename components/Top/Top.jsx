import styles from "./top.module.css";

const Top = () => {
  return (
    <div className={styles.topContainer}>
      <div className={styles.circle}></div>
      <div className={styles.logoContainer}>
        <div className={styles.logoDiv}>
        </div>
      </div>
    </div>
  );
};

export default Top;

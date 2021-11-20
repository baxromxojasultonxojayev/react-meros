import React from "react";
import styles from "./Connect.module.css";

const Connect = () => {
  return (
    <div className={styles.offer}>
      <p className={styles.offerText}>Bog'lanish uchun</p>
      <ul className={styles.offerList}>
        <li className={styles.offerItem}>
          <a href="/">+99897 330 74 24</a>
        </li>
        <li className={styles.offerItem}>
          <a href="/">+99897 707 77 77</a>
        </li>
        <li className={styles.offerItem}>
          <a href="/">merosshop@gmail.com</a>
        </li>
      </ul>
    </div>
  );
};

export default Connect;

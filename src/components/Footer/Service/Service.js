import React from "react";
import styles from "./Service.module.css";

const Service = () => {
  return (
    <div className={styles.offer}>
      <p className={styles.offerText}>Xizmatlar</p>
      <ul className={styles.offerList}>
        <li className={styles.offerItem}>
          <a href="/">Brendlar</a>
        </li>
        <li className={styles.offerItem}>
          <a href="/">Xizmatlar</a>
        </li>
        <li className={styles.offerItem}>
          <a href="/">To'lov</a>
        </li>
        <li className={styles.offerItem}>
          <a href="/">Yetkazib berish </a>
        </li>
        <li className={styles.offerItem}>
          <a href="/">Qayta aloqa</a>
        </li>
        <li className={styles.offerItem}>
          <a href="/">Savol va Javoblar</a>
        </li>
        <li className={styles.offerItem}>
          <a href="/">Ommaviy taklif</a>
        </li>
      </ul>
    </div>
  );
};

export default Service;

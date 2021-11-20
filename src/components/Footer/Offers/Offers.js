import React from "react";
import styles from "./Offers.module.css";

const Offers = () => {
  return (
    <div className={styles.offer}>
      <p className={styles.offerText}>Bizning takliflar</p>
      <ul className={styles.offerList}>
        <li className={styles.offerItem}>
          <a href="/">Meros Chegirma</a>
        </li>
        <li className={styles.offerItem}>
          <a href="/">Meros savdo brendi</a>
        </li>
        <li className={styles.offerItem}>
          <a href="/">Chegirmalar</a>
        </li>
        <li className={styles.offerItem}>
          <a href="/">Yangi tovarlar </a>
        </li>
        <li className={styles.offerItem}>
          <a href="/">To'plamlar</a>
        </li>
        <li className={styles.offerItem}>
          <a href="/">Sotiladigan to'plamlar</a>
        </li>
        <li className={styles.offerItem}>
          <a href="/">Ommabop tovarlar </a>
        </li>
        <li className={styles.offerItem}>
          <a href="/">Tavsiya etilgan mahsulotlar </a>
        </li>
      </ul>
    </div>
  );
};

export default Offers;

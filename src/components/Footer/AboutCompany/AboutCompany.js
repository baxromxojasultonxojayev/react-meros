import React from "react";
import styles from "./AboutCompany.module.css";

const AboutCompany = () => {
  return (
    <div className={styles.offer}>
      <p className={styles.offerText}>Kompaniyamiz haqida</p>
      <ul className={styles.offerList}>
        <li className={styles.offerItem}>
          <a href="/">Biz haqimizda</a>
        </li>
        <li className={styles.offerItem}>
          <a href="/">Sharhlar</a>
        </li>
        <li className={styles.offerItem}>
          <a href="/">Qanday boriladi</a>
        </li>
        <li className={styles.offerItem}>
          <a href="/">Ish joylari va Karyera </a>
        </li>
        <li className={styles.offerItem}>
          <a href="/">Nima uchun bizga ishonishadi</a>
        </li>
      </ul>
    </div>
  );
};

export default AboutCompany;

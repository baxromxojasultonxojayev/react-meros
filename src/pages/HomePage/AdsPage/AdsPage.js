import React from "react";
import firstImage from "./images/firstImage.png";
import secondImage from "./images/secondImage.png";
import thirdImage from "./images/thirdImage.png";
import styles from "./AdsPage.module.css";
const AdsPage = () => {
  return (
    <div className={styles.adds}>
      <h4 className={styles.addText}>Siz uchun maxsus</h4>
      <ul className={styles.addList}>
        <li className={styles.addItem}>
          <a href="/">
            <img src={firstImage} alt="" />
          </a>
        </li>
        <li className={styles.addItem}>
          <a href="/">
            <img src={secondImage} alt="" />
          </a>
        </li>
        <li className={styles.addItem}>
          <a href="/">
            <img src={thirdImage} alt="" />
          </a>
        </li>
      </ul>
    </div>
  );
};

AdsPage.propTypes = {};

export default AdsPage;

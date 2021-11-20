import React from "react";
import styles from "./DiscountPage.module.css";
import firstImage from "./images/discount.png";
import secondImage from "./images/secure.png";
import thirdImage from "./images/tech.png";
import fourthImage from "./images/breakfast.png";

const DiscountPage = () => {
  return (
    <div className={styles.imagePage}>
      <div className={styles.images}>
        <img className={styles.firstImage} src={firstImage} alt="img" />
        <div className={styles.rightImage}>
          <img className={styles.secondImage} src={secondImage} alt="img" />
          <img className={styles.thirdImage} src={thirdImage} alt="img" />
        </div>
      </div>
      <div className={styles.fourthImage}>
        <img src={fourthImage} alt="" />
      </div>
    </div>
  );
};

DiscountPage.propTypes = {};

export default DiscountPage;

import React from "react";
import firstImage from "./images/firstImage.png";
import thirdImage from "./images/thirdImage.png";
import secondImage from "./images/secondImage.png";
import styles from "./Payment.module.css";

const Payment = () => {
  return (
    <div className={styles.payment}>
      <ul className={styles.paymentList}>
        <li className={styles.paymentItem}>
          <div className={styles.leftSide}>
            <p className={styles.paymenttext}>O'zbekiston bo'ylab yetkazib berish</p>
            <p className={styles.paymentLink}>
              <a href="/">Yetkazib berish shartlari</a>
            </p>
          </div>
          <img className={styles.images} src={firstImage} alt="" />
        </li>
        <li className={styles.paymentItem}>
          <div className={styles.leftSide}>
            <p className={styles.paymenttext}>Mobil ilovani yukalb oling</p>
            <p className={styles.paymentLink}>
              <a href="/">Yuklash</a>
            </p>
          </div>

          <img className={styles.images} src={secondImage} alt="" />
        </li>
        <li className={styles.paymentItem}>
          <div className={styles.leftSide}>
            <p className={styles.paymenttext}>Naqd tolash yoki karta bilan</p>
            <p className={styles.paymentLink}>
              <a href="/">To'lov shartlari</a>
            </p>
          </div>
          <img className={styles.images} src={thirdImage} alt="" />
        </li>
      </ul>
    </div>
  );
};

Payment.propTypes = {};

export default Payment;

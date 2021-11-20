import React from "react";
import AboutCompany from "./AboutCompany/AboutCompany";
import Connect from "./Connect/Connect";
import styles from "./Footer.module.css";
import Offers from "./Offers/Offers";
import Service from "./Service/Service";
import SocialNetwork from "./SocialNetwork/SocialNetwork";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <ul className={styles.footerTop}>
        <li className={styles.footerItem}>
          <Offers />
        </li>
        <li className={styles.footerItem}>
          <Service />
        </li>
        <li className={styles.footerItem}>
          <AboutCompany />
        </li>
        <li className={styles.footerItem}>
          <Connect />
        </li>
        <li className={styles.footerItem}>
          <SocialNetwork />
        </li>
      </ul>
      <p className={styles.footerText}> Meros Shop © 2020. Все права защищены.</p>
    </div>
  );
};

export default Footer;

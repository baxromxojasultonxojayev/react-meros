import React from "react";
import styles from "./SocialNetwork.module.css";
import { BsInstagram as Instagram } from "react-icons/bs";
import { BsTelegram as Telegram } from "react-icons/bs";
import { BsFacebook as Facebook } from "react-icons/bs";
import googleStore from './images/GoogleStore.png'
import iosStore from "./images/IosStore.png"

const SocialNetwork = () => {
  return (
    <div className={styles.offer}>
      <p className={styles.offerText}>Ijtimoiy tarmoqlarimiz</p>
      <ul className={styles.offerList}>
        <li className={styles.socialNetwork}>
          <a href="/">
            <Instagram />
          </a>
          <a href="/">
            <Telegram />
          </a>
          <a href="/">
            <Facebook />
          </a>
        </li>
        <li className={styles.offerItem}>
          <a href="/">
            <img src={googleStore}/>
          </a>
        </li>
        <li className={styles.offerItem}>
          <a href="/">
            <img src={iosStore} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialNetwork;

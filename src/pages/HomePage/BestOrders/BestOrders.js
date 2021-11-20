import React from "react";
import ItemCard from "../../../components/ItemCard/ItemCard";
import leftSide from "./images/leftImage.png";
import firstImage from "./images/firstImage.png";
import secondImage from "./images/secondImage.png";
import thirdImage from "./images/thirdImage.png";
import fourthImage from "./images/fourthImage.png";
import fifthImage from "./images/fifthImage.png";
import sixthImage from "./images/sixthImage.png";
import seventhImage from "./images/seventhImage.png";
import eigthImage from "./images/eigthImage.png";
import ninthImage from "./images/ninthImage.png";

import styles from "./BestOrders.module.css";

const BestOrders = () => {
  return (
    <div>
      <div className={styles.order}>
        <div>
          <h3 className={styles.orderText}>Ajoyib takliflar!</h3>
          <div className={styles.sideBar}>
            <img src={leftSide} className={styles.leftImage} alt="img" />
          </div>
        </div>
        <ul className={styles.orderList}>
          <li className={styles.orderItem}>
            <a href="/">
              <ItemCard
                src={firstImage}
                main={{
                  titleOne: "Kitoblar",
                  titleTwo: "Quron Kitobi",
                }}
                data={[
                  {
                    valueOne: "120 000 so'm",
                    valueTwo: "220 000 so'm",
                  },
                ]}
              />
            </a>
          </li>
          <li className={styles.orderItem}>
            <a href="/">
              <ItemCard
                src={secondImage}
                main={{
                  titleOne: "Disklar",
                  titleTwo: "Oltin surasi Yasin al Qur'on o'qish ",
                }}
                data={[
                  {
                    valueOne: "140 000 so'm",
                  },
                ]}
              />
            </a>
          </li>
          <li className={styles.orderItem}>
            <a href="/">
              <ItemCard
                src={thirdImage}
                main={{
                  titleOne: "Disklar",
                  titleTwo: "Equantu surah al quran mp3 ",
                }}
                data={[
                  {
                    valueOne: "120 000 so'm",
                    valueTwo: "220 000 so'm",
                  },
                ]}
              />
            </a>
          </li>
          <li className={styles.orderItem}>
            <a href="/">
              <ItemCard
                src={fourthImage}
                main={{
                  titleOne: "Atributka",
                  titleTwo: "Agar narsalar mos kelmasa, Kokette bilaguzuk.",
                }}
                data={[
                  {
                    valueOne: "95 000 so'm",
                  },
                ]}
              />
            </a>
          </li>
          <li className={styles.orderItem}>
            <a href="/">
              <ItemCard
                src={fifthImage}
                main={{
                  titleOne: "Atributka",
                  titleTwo: "Odyssey pasport qopqog'i.",
                }}
                data={[
                  {
                    valueOne: "30 000 so'm",
                  },
                ]}
              />
            </a>
          </li>
          <li className={styles.orderItem}>
            <a href="/">
              <ItemCard
                src={sixthImage}
                main={{
                  titleOne: "Kitoblar",
                  titleTwo: "Sovg'a to'plami Qur'on bilan ",
                }}
                data={[
                  {
                    valueOne: "140 000 so'm",
                    valueTwo: "280 000 so'm",
                  },
                ]}
              />
            </a>
          </li>
          <li className={styles.orderItem}>
            <a href="/">
              <ItemCard
                src={seventhImage}
                main={{
                  titleOne: "Konstovarlar",
                  titleTwo: "Kalitlar dastasi",
                }}
                data={[
                  {
                    valueOne: "80 000 so'm",
                  },
                ]}
              />
            </a>
          </li>
          <li className={styles.orderItem}>
            <a href="/">
              <ItemCard
                src={eigthImage}
                main={{
                  titleOne: "Konstovarlar",
                  titleTwo: "Kalitlar dastasi.",
                }}
                data={[
                  {
                    valueOne: "50 000 so'm",
                    valueTwo: "80 000 so'm",
                  },
                ]}
              />
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.images}>
        <img src={ninthImage} alt="img" />
      </div>
    </div>
  );
};

BestOrders.propTypes = {};

export default BestOrders;

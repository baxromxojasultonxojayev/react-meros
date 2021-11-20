import React from "react";
import ItemCard from "../../../components/ItemCard/ItemCard";
import rightSide from "./images/rightImage.png";
import firstImage from "./images/firstImage.png";
import secondImage from "./images/secondImage.png";
import thirdImage from "./images/thirdImage.png";
import fourthImage from "./images/fourthImage.png";
import fifthImage from "./images/fifthImage.png";
import sixthImage from "./images/sixthImage.png";
import seventhImage from "./images/seventhImage.png";
import eigthImage from "./images/eigthImage.png";
import styles from "./DiscountProduct.module.css";

const DiscountProduct = () => {
  return (
    <div className={styles.products}>
      <div className={styles.order}>
        <div>
          <h3 className={styles.orderText}>Barcha maxsulotlar chegirmali!</h3>
        </div>
        <ul className={styles.orderList}>
          <li className={styles.orderItem}>
            <a href="/">
              <ItemCard
                src={firstImage}
                main={{
                  titleOne: "Erkaklar uchun",
                  titleTwo: "Thobe Thawb Caftan Suit",
                }}
                data={[
                  {
                    valueOne: "160 000 so'm",
                    valueTwo: "300 000 so'm",
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
                  titleOne: "Ayollar uchun",
                  titleTwo: "Kaftan Turkiya  ",
                }}
                data={[
                  {
                    valueOne: "190 000 so'm",
                    valueTwo: "320 000 so'm",
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
                  titleOne: "Erkaklar uchun",
                  titleTwo: "Allohga va Uning elchisiga  ishoning  ",
                }}
                data={[
                  {
                    valueOne: "125 000 so'm",
                    valueTwo: "250 000 so'm",
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
                  titleOne: "Ayollar uchun",
                  titleTwo: "Musulmon hisoblagichlar bosh barmog'i xh136 .",
                }}
                data={[
                  {
                    valueOne: "100 000 so'm",
                    valueTwo: "180 000 so'm",
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
                  titleOne: "Kitoblar",
                  titleTwo: "“Hadis va hayot” 1-juz. Kirish .",
                }}
                data={[
                  {
                    valueOne: "100 000 so'm",
                    valueTwo: "180 000 so'm"
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
                  titleOne: "Oziq-ovqat maxsulotlari ",
                  titleTwo: "Xurmolar",
                }}
                data={[
                  {
                    valueOne: "10 000 so'm",
                    valueTwo: "15 000 so'm",
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
                  titleOne: "Zargarlik buyumlari ",
                  titleTwo: "Sirg'a",
                }}
                data={[
                  {
                    valueOne: "110 000 so'm",
                    valueTwo: "220 000 so'm"
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
                  titleOne: "Siz uchun tavsiyalar",
                  titleTwo: "Apple iPhone X 64 GB smartfoni.",
                }}
                data={[
                  {
                    valueOne: "7 500 000 so'm",
                    valueTwo: "8 900 000 so'm",
                  },
                ]}
              />
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.sideBar}>
        <img src={rightSide} className={styles.leftImage} alt="img" />
      </div>
    </div>
  );
};

DiscountProduct.propTypes = {};

export default DiscountProduct;

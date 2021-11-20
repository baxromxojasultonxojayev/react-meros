import React from "react";
import { SliderData } from "./SliderData";
import styles from "./Brands.module.css";

const Brands = () => {
  return (
    <div>
      <h3 className={styles.brand}>Brendlarimiz</h3>
      <div className={styles.brandLogo}>
        {SliderData.map((item) => (
          <img src={item.image} alt="img" />
        ))}
      </div>
      {/* <Slider slides={SliderData}/> */}
    </div>
  );
};

export default Brands;

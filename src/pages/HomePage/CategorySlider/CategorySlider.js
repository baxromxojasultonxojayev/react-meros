import React from "react";
import { Slider } from "../../../components/Slider/Slider";
import { SliderData } from "./SliderImage";
import styles from './CategorySlider.module.css'

export const CategorySlider = () => {
  return (
    <div className={styles.categorySlider}>
      <Slider label="Ommabop kategoriyalar " slides={SliderData} />
    </div>
  );
};

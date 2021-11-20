import React, { useRef, useState } from "react";
import { Next, Previous } from "../../ui-lib/icons";
import classNames from "classnames";

import styles from "./Slider.module.css";

export const Slider = ({ label, slides, data, main }) => {
  const [current, setCurrent] = useState(0);
  const listRef = useRef();
  const length = slides.length;

  const handleClick = (direction) => {
    let distance = listRef.current.getBoundingClientRect().x;
    if (direction === "left" && current > 0) {
      setCurrent(current - 1);
      listRef.current.style.transform = `translate(${310 + distance}px)`;
    }

    if (direction === "right" && current < 6) {
      setCurrent(current + 1);
      listRef.current.style.transform = `translate(${-310 + distance}px)`;
    }
    console.log(distance);
  };

  return (
    <div>
      <div className={styles.categoryText}>
        <h3 className={styles.categoryTitle}>{label}</h3>
        <div className={styles.buttonSlider}>
          <button
            className={classNames(styles.prevButton, styles.left)}
            onClick={() => handleClick("left")}
          >
            <Previous />
          </button>

          <button
            className={classNames(styles.nextButton, styles.right)}
            onClick={() => handleClick("right")}
          >
            <Next />
          </button>
        </div>
      </div>
      <div className={styles.slider} ref={listRef}>
        {slides.map((item, index) => {
          return (
            <div className={styles.itemSlider}>
              <div className={styles.imageBlock} key={index}>
                <img className={styles.image} src={item.image} alt="img" />
                <p>{item.title}</p>
              </div>
            </div>
          );
        })}
        {/* <img className={styles.image} src={slides.image} alt="img" /> */}
      </div>
    </div>
  );
};

// Slider.propTypes= {
//   label: PropsType.string.isRequired,
// }

// export default Slider

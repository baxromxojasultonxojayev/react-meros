import React from "react";
import PropTypes from "prop-types";
import star from './star.png'
import styles from "./ItemCard.module.css";
const ItemCard = ({ main, data, src }) => {
  const rate = [star, star, star,star, star]
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <img className={styles.img} src={src} alt='img'/>
      </div>
      <div className={styles.header}>
        <p className={styles.firstText}>{main.titleOne}</p>
        <p className={styles.secondText}>{main.titleTwo}</p>
      </div>
      <div className={styles.rate}>{rate.map(item => (
        <img className={styles.star} src={item} alt='img'/>

      ))}
      </div>
      <div className={styles.price}>
        {data.map((el) => (
          <div>
            <p className={styles.firstPrice}>{el.valueOne}</p>
            <p className={styles.secondPrice}><deL> {el.valueTwo} </deL></p>
          </div>
        ))}
      </div>
    </div>
  );
};

ItemCard.propTypes = {
  main: PropTypes.shape({
    titleOne: PropTypes.string.isRequired,
    titleTwo: PropTypes.string.isRequired,
  }).isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      valueOne: PropTypes.string.isRequired,
      valueTwo: PropTypes.string.isRequired,
    })
  ).isRequired,
  src: PropTypes.string.isRequired
};

export default ItemCard;

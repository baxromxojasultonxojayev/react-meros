import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import AdsPage from "./AdsPage/AdsPage";
import BestOrders from "./BestOrders/BestOrders";
import Brands from "./Brands/Brands";
import { CategorySlider } from "./CategorySlider/CategorySlider";
import DiscountImage from "./DiscountImage/DiscountPage";
import DiscountProduct from "./DiscountProduct/DiscountProduct";
import Payment from "./Payment/Payment";
import styles from './HomePage.module.css'

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <Navbar />
      <DiscountImage />
      <AdsPage />
      <BestOrders />
      <DiscountProduct />
      <Payment />
      <CategorySlider />
      <Brands />
      <Footer />
    </div>
  );
};

HomePage.propTypes = {};

export default HomePage;

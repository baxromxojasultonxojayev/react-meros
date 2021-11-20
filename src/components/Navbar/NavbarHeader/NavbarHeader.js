import React from "react";
import TopHeader from "./TopHeader";
import styles from "./NavbarHeader.module.css";
import {
  AccountCircle,
  Menu,
  Search,
  Shopping,
  Star,
} from "../../../ui-lib/icons";
import logo from "./images/logo.png";
import TextInput from "../../../ui-lib/TextInput/TextInput";
import { MdSdCard, MdStar } from "react-icons/md";
import { useHistory } from "react-router";

const NavbarHeader = () => {
  const history = useHistory()
  const click = () => {
    history.push('/')
  }
  return (
    <div className={styles.header}>
      <TopHeader />
      <div className={styles.catalogHeader}>
        <img onClick={click} className={styles.logo} src={logo} alt="logo" />
        <button className={styles.catalog}>
          <Menu className={styles.menu}/>
          Katalog
        </button>
        <div className={styles.searchInput}>
          <TextInput placeholder="Поиск по товаром..." />
          <div className={styles.search}>
            <Search />
          </div>
        </div>
        <div className={styles.rightSide}>
          <a href='/login-page' className={styles.entrance}>
            <AccountCircle />
            <p>Kirish</p>
          </a>
          <a href='/' className={styles.wishList}>
            <Star />
            <p>Sevimlilar</p>
          </a>
          <a href='/' className={styles.storage}>
            <Shopping />
            <p>Savatcha(Omborxona)</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavbarHeader;

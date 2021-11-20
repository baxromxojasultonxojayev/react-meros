import React from 'react';
import styles from './NavbarList.module.css'
import PropTypes from 'prop-types';

const NavbarList = () => {
  return (
    <ul className={styles.navbarList}>
      <li className={styles.navbarItem}><a href=''>Kitoblar</a></li>
      <li className={styles.navbarItem}><a href=''>Suvenerlar</a></li>
      <li className={styles.navbarItem}><a href=''>Erkaklar uchun</a></li>
      <li className={styles.navbarItem}><a href=''>Ayolar uchun</a></li>
      <li className={styles.navbarItem}><a href=''>Bolalar uchun</a></li>
      <li className={styles.navbarItem}><a href=''>Atributlar</a></li>
      <li className={styles.navbarItem}><a href=''>Shifo va sog'lom </a></li>
      <li className={styles.navbarItem}><a href=''>Oziq-ovqat maxsulotlari </a></li>
      <li className={styles.navbarItem}><a href=''>Sovg'a g'oyalari </a></li>
      <li className={styles.navbarItem}><a href=''>Meros savdosi </a></li>
      <li className={styles.navbarItem}><a href=''>Meros chegirmasi </a></li>

    </ul>
  );
};

NavbarList.propTypes = {};

export default NavbarList;
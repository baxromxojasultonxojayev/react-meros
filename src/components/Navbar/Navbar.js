import React from 'react';
import PropTypes from 'prop-types';
import NavbarHeader from './NavbarHeader/NavbarHeader';
import NavbarList from './NavbarList/NavbarList';
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <div>
      <NavbarHeader />
      <div className={styles.navbar}>
        <NavbarList />
      </div>
    </div>
  );
};

Navbar.propTypes = {};

export default Navbar;
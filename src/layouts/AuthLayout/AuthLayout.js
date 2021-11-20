import React from "react";
import PropTypes from "prop-types";
import styles from './AuthLayout.module.css'

const AuthLayout = ({children}) => {
  return <div className={styles.container }>{children}</div>;
};

AuthLayout.propTypes = {
  children: PropTypes.node.isRequired 
};

export default AuthLayout;

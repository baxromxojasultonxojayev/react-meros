import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./Button.module.css";

const Button = ({ label, variation, onClick, isDisable, isBlock }) => {
  return (
    <button
      className={classNames(styles.button, styles[variation], {[styles.isBlock]: isBlock})}
      type="button"
      onClick={onClick}
      disabled={isDisable}
      isBlock={isBlock}
    >
      {label}
    </button>
  );
};

Button.defaultProps = {
  variation: "primary",
  isDisable: false,
  isBlock: false
};

Button.propTypes = {
  variation: PropTypes.oneOf(["primary", "outline, full"]),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isDisable: PropTypes.bool,
};

export default Button;

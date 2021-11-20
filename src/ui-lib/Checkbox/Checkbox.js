import React from "react";
import { Done } from "../icons";
import PropTypes from 'prop-types'

const Checkbox = ({ isChecked, onToggle, label }) => {
  return (
    <div>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={(e) => onToggle(e.target.checked)}

      />
      {label}
    </div>
  );
};

Checkbox.propTypes = {
  onToggle: PropTypes.func.isRequired,
  isChecked: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired
}

export default Checkbox;

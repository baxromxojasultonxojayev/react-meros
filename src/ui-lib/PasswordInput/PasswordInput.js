import React from "react";
import BaseInput from "../BaseInput/BaseInput";
import PropsType from "prop-types";

const PasswordInput = ({
  placeholder,
  onInput,
  value,
  isDisabled,
  isBlock,
}) => {
  return (
    <BaseInput
      type="password"
      placeholder={placeholder}
      onInput={onInput}
      value={value}
      isDisabled={isDisabled}
      isBlock={isBlock}
    />
  );
};

PasswordInput.defaultProps = {
  isDisabled: false,
  isBlock: false,
  onInput: () => {}
}

PasswordInput.propTypes = {
  isDisabled: PropsType.bool,
  isBlock: PropsType.bool,
  onInput: PropsType.func.isRequired,
  value: PropsType.string.isRequired,
  placeholder: PropsType.string.isRequired,
};

export default PasswordInput;

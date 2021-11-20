import React from "react";
import PropsType from "prop-types";
import BaseInput from "../BaseInput/BaseInput";

const EmailInput = ({ placeholder, value, onInput, isBlock, isDisabled }) => {
  return (
    <BaseInput
      type="email"
      placeholder={placeholder}
      value={value}
      onInput={onInput}
      isDisabled={isDisabled}
      isBlock={isBlock}
    />
  );
};

EmailInput.defalutProps = {
  isDisabled: false,
  isBlock: false,
  onInput: () => {}
};

EmailInput.propTypes = {
  isDisabled: PropsType.bool,
  isBlock: PropsType.bool,
  onInput: PropsType.func.isRequired,
  value: PropsType.string.isRequired,
  placeholder: PropsType.string.isRequired,
}

export default EmailInput;

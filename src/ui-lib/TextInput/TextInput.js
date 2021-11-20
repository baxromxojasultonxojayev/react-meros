import React from "react";
import PropsType from 'prop-types'
import BaseInput from "../BaseInput/BaseInput";

const TextInput = ({placeholder, value, onInput, isDisabled, isBlock}) => {
  return (
    <BaseInput
      type="text"
      placeholder={placeholder}
      value={value}
      onInput={onInput}
      isDisabled={isDisabled}
      isBlock={isBlock}
    />
  );
};

TextInput.defalutProps = {
  isDisabled: false,
  isBlock: false,
  onInput: () => {}
};

TextInput.propTypes = {
  isDisabled: PropsType.bool,
  isBlock: PropsType.bool,
  onInput: PropsType.func,
  value: PropsType.string.isRequired,
  placeholder: PropsType.string.isRequired,
};

export default TextInput;

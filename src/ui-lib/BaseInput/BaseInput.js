import classNames from "classnames";
import PropsType from "prop-types";
import styles from "./BaseInput.module.css";

function BaseInput({ type, placeholder, isBlock, value, onInput, isDisabled }) {
  const handleChange = (e) => {
    onInput(e.target.value);
  };
  return (
    <input
      className={classNames(styles.input, { [styles.isBlock]: isBlock })}
      type={type}
      value={value}
      onInput={handleChange}
      placeholder={placeholder}
      disabled={isDisabled}
    />
  );
}

BaseInput.defaultPorps = {
  isDisabled: false,
  isBlock: false,
  onInput: () => {}
};

BaseInput.protoTypes = {
    isDisabled: PropsType.bool,
    isBlock: PropsType.bool,
    onInput: PropsType.func,
    type: PropsType.string.isRequired,
    value: PropsType.string.isRequired,
    placeholder: PropsType.string.isRequired,
};

export default BaseInput;

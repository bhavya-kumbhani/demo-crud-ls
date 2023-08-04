import PropTypes from "prop-types";
import React from "react";

const Input = ({
  label, type, name, value, onChange, max, error, placeholder
}) => {
  return (
    <>
      <label>{label}</label>
      <input placeholder={placeholder} type={type} name={name} value={value} onChange={onChange} max={max} />
      <span className='text-err'>{error}</span>
    </>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  // icon: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  // onKeyDown: PropTypes.func,
  error: PropTypes.string,
  // isRemoveBottomMargin: PropTypes.bool,
  // onIconClick: PropTypes.func,
  // isRequired: PropTypes.bool,
  // disabled: PropTypes.bool,
};

export default Input;

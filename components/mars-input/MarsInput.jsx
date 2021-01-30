import React from 'react';
import PropTypes from 'prop-types';
import styles from './MarsInput.module.css'

const MarsInput = ({
  type,
  id,
  disabled,
  onChange,
  onEnter,
  placeholder,
  value,
  name,
  className
}) => {
  const handleChange = (e) => {
    if (disabled) return;

    onChange(e);
  };

  const onKeyDown = (e) => {
    const theCode = e.keyCode || e.which || e.charCode;

    if (theCode === 13) {
      onEnter();
    }

    return
  };
  
  return (
    <input
        name={name}
        className={`${className} ${styles['input']}`}
        type={type}
        id={id}
        disabled={disabled}
        onChange={handleChange}
        value={value}
        placeholder={placeholder}
        onKeyDown={onKeyDown}
      />
  );
};

MarsInput.defaultProps = {
};

MarsInput.propTypes = {
};

export default MarsInput;

import React, { useEffect } from 'react';
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
  useEffect(() => {
    import("@web-inmars/mars-textfield/dist/mars-textfield.js");
  }, []);

  const handleChange = (e) => {
    if (disabled) return;

    onChange && onChange(e);
  };

  const onKeyDown = (e) => {
    const theCode = e.keyCode || e.which || e.charCode;

    if (theCode === 13) {
      onEnter();
    }

    return
  };
  
  return (
    <mars-textfield
        name={name}
        class={`${className} ${styles['input']}`}
        type={type}
        id={id}
        disabled={disabled}
        onInput={handleChange}
        value={value}
        label={placeholder}
        onKeyDown={onKeyDown}
      />
  );
};

MarsInput.defaultProps = {
};

MarsInput.propTypes = {
};

export default MarsInput;

import React from 'react';
import PropTypes from 'prop-types';
import styles from './MarsTextarea.module.css'

const MarsTextarea = ({
  children,
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
    <textarea 
      name={name}
      disabled={disabled} 
      placeholder={placeholder} 
      value={children || value} 
      disabled={disabled}
      onChange={handleChange}
      placeholder={placeholder}
      onKeyDown={onKeyDown}
      className={`${className} ${styles['textarea']}`}>
    </textarea>
  );
};

MarsTextarea.defaultProps = {
};

MarsTextarea.propTypes = {
};

export default MarsTextarea;

import React, {useEffect} from 'react';
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
  useEffect(() => {
    import("@web-inmars/mars-textarea/mars-textarea.js");
  }, []);

  const handleChange = (e) => {
    if (disabled) return;

    onChange && onChange(e);
  };

  const onKeyDown = (e) => {
    const theCode = e.keyCode || e.which || e.charCode;

    if (theCode === 13 && onEnter) {
      onEnter();
    }

    return
  };
  
  return (
    <mars-textarea 
      name={name}
      disabled={disabled} 
      placeholder={placeholder} 
      value={value} 
      onInput={handleChange}
      label={placeholder}
      onKeyDown={onKeyDown}
      class={`${className}`}/>
  );
};

MarsTextarea.defaultProps = {
};

MarsTextarea.propTypes = {
};

export default MarsTextarea;

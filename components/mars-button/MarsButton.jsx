import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './MarsButton.module.css'

const MarsButton = ({
  children,
  className,
  secondary
}) => {
  const [isSecondary, setIsSecondary] = useState(secondary);

  return (
    <button className={`${className} ${styles['button']} ${isSecondary ? styles['secondary'] : ''}`}>
      {children}
    </button>
  );
};

MarsButton.defaultProps = {
  secondary: false,
  className: '',
};

MarsButton.propTypes = {
  secondary: PropTypes.bool,
  className: PropTypes.string,
};

export default MarsButton;

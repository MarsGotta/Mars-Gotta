import React, { useState } from 'react';
import { useRouter } from 'next/router'
import PropTypes from 'prop-types';
import styles from './MarsButton.module.css'

const MarsButton = ({
  children,
  className,
  secondary,
  href
}) => {
  const [isSecondary, setIsSecondary] = useState(secondary);
  
  const router = useRouter()

  const onClickHandler = () => {
    if(href) router.push(href);
    return;
  }

  return (
    <button className={`${className} ${styles['button']} ${isSecondary ? styles['secondary'] : ''}`} onClick={onClickHandler}>
      {children}
    </button>
  );
};

MarsButton.defaultProps = {
  secondary: false,
  className: '',
  href: '',
};

MarsButton.propTypes = {
  secondary: PropTypes.bool,
  className: PropTypes.string,
  href: PropTypes.string,
};

export default MarsButton;

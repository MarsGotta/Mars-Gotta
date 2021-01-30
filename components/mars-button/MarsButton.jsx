import React, { useState } from 'react';
import { useRouter } from 'next/router'
import PropTypes from 'prop-types';
import styles from './MarsButton.module.css'

const MarsButton = ({
  children,
  className,
  secondary,
  href,
  onClick
}) => {
  const [isSecondary] = useState(secondary);
  
  const router = useRouter()

  const onClickHandler = (e) => {
    if(href) router.push(href);
    onClick(e);
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
  onClick: () => {},
};

MarsButton.propTypes = {
  secondary: PropTypes.bool,
  className: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func,
};

export default MarsButton;

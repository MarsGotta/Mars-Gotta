import React, { Fragment, useEffect } from 'react';
import { useRouter } from 'next/router'
import PropTypes from 'prop-types';
import styles from './MarsButton.module.css'

const MarsButton = ({
  children,
  href,
  onClick,
  variant,
  className
}) => {
  const router = useRouter();

  useEffect(() => {
    import("@web-inmars/mars-button/mars-button.js");
  }, []);

  const onClickHandler = (e) => {
    if(href) router.push(href);
    onClick(e);
  }

  return (
      <mars-button type="submit" variant={variant} class={`${className} ${styles['button']}`} onClick={onClickHandler}>
        {children}
      </mars-button>
  );
};

MarsButton.defaultProps = {
  variant: '',
  href: '',
  onClick: () => {},
  className: ''
};

MarsButton.propTypes = {
  variant: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string
};

export default MarsButton;

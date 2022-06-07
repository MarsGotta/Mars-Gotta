import React, { Fragment, useEffect } from 'react';
import { useRouter } from 'next/router'
import PropTypes from 'prop-types';
import styles from './MarsNotification.module.css'

const MarsNotification = ({
  children,
  href,
  onClick,
  variant,
  className
}) => {
  const router = useRouter();

  const onClickHandler = (e) => {
    if(href) router.push(href);
    onClick(e);
  }

  return (
      <section className={styles['box-notification']}>
        <p>Esta página sigue en construcción.</p>
        <p>¡Cuidado dónde pisas!</p>
      </section>
  );
};

MarsNotification.defaultProps = {
  variant: '',
  href: '',
  onClick: () => {},
  className: ''
};

MarsNotification.propTypes = {
  variant: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string
};

export default MarsNotification;

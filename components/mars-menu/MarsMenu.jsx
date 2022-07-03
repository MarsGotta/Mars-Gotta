import React, { useState } from 'react';
import Link from 'next/link'
import PropTypes from 'prop-types';
import styles from './MarsMenu.module.css'
import MarsStars from '../mars-stars/MarsStars'
import MarsSocial from '../mars-social/MarsSocial'

const MarsMenu = ({
  children,
  items,
  isExpanded,
  onClick,
}) => {
  let touchPrevious = 0;

  const handleClick = (e) => {
    e.preventDefault()
    onClick && onClick({
      detail: isExpanded
    })
  }

  const onTouchStart = (e) => {
    touchPrevious = e?.touches[0]?.clientY;
  }

  const onTouchEnd = (e) => {
    const touchCurrent = e?.changedTouches[0]?.clientY;
    if(touchPrevious > touchCurrent) {
      onClick && onClick({
        detail: isExpanded
      })
    }
  }

  return (
      <nav onTouchStart={onTouchStart} onTouchEnd={onTouchEnd} onClick={handleClick} className={`${styles['collapsed']} ${isExpanded ? styles['is-expanded'] : undefined}`}>
        <ul className={styles['list']}>
          <MarsStars limit={10} className={styles['stars']} />
          {items.map(({ href, title }, key) => (
            <li className={styles['item']} key={key}>
              <Link href={href}>{title}</Link>
            </li>
          ))}
        </ul>
        <MarsSocial className={styles['social']} />
      </nav>
  );
};

MarsMenu.defaultProps = {
  items: [],
  isExpanded: false,
};

MarsMenu.propTypes = {
  items: PropTypes.array,
  isExpanded: PropTypes.bool,
};

export default MarsMenu;

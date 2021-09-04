import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './MarsMenu.module.css'
import MarsStars from '../mars-stars/MarsStars'

const MarsMenu = ({
  children,
  items,
  isExpanded
}) => {


  return (
    <nav className={`${styles['collapsed']} ${isExpanded ? styles['is-expanded'] : ''}`}>
      <ul className={styles['list']}>
        <MarsStars limit={15} className={styles['stars']}/>
        {items.map(({href, title}, key) => (
          <li className={styles['item']} key={key}><a href={href}>{title}</a></li>
        ))}
      </ul>
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

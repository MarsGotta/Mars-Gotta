import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './MarsMenu.module.css'
import MarsIcon from '../mars-icon/MarsIcon.jsx'
import MarsStars from '../mars-stars/MarsStars'

const MarsMenu = ({
  children,
  items,
  isExpanded: passedIsExpanded
}) => {
  const [isExpanded, setIsExpanded] = useState(passedIsExpanded);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  }

  return (
    <nav className={`${styles['collapsed']} ${isExpanded ? styles['is-expanded'] : ''}`}>
      <MarsIcon className={styles['icon']} name="bars" onClick={handleToggle}></MarsIcon>
      <ul className={styles['list']}>
        <MarsStars limit={30} className={styles['stars']}/>
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

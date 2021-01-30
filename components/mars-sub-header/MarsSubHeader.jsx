import React from 'react';
import PropTypes from 'prop-types';
import styles from './MarsSubHeader.module.css'
import MarsStars from '../mars-stars/MarsStars'

const MarsSubHeader = ({
  title,
}) => {
  return (
    <div className={styles['sub-header']}>
      <MarsStars limit={20}/>
      <h1 className={styles['title']}>{title}</h1>
    </div>
    );
};

MarsSubHeader.defaultProps = {
  title: ''
};

MarsSubHeader.propTypes = {
  title: PropTypes.string,
};

export default MarsSubHeader;

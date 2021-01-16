import React from 'react';
import PropTypes from 'prop-types';
import styles from './MarsSubHeader.module.css'

const MarsSubHeader = ({
  title,
}) => {
  return (
    <div className={styles['sub-header']}>
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

import React from 'react';
import styles from './MarsFooter.module.css';
import MarsSocial from '../mars-social/MarsSocial'

const MarsFooter = ({
  fixed
}) => {
  return (
    <footer className={`${styles.footer} ${fixed ? styles.fixed : ''}`}>
      <MarsSocial />
      <p>
        Hecho con amor <span style={{margin: '0 10px'}}>&#128156;</span> por Mars Gotta
      </p>
    </footer>
  );
};

MarsFooter.defaultProps = {
};

MarsFooter.propTypes = {
};

export default MarsFooter;

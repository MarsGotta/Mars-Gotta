import React from 'react';
import styles from './MarsFooter.module.css';
import MarsSocial from '../mars-social/MarsSocial'

const MarsFooter = ({
}) => {
  return (
    <footer className={styles.footer}>
      <MarsSocial />
      <a
        href="https://marsgotta.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Hecho con amor <span style={{margin: '0 10px'}}>&#128156;</span> por Mars Gotta
      </a>
    </footer>
  );
};

MarsFooter.defaultProps = {
};

MarsFooter.propTypes = {
};

export default MarsFooter;

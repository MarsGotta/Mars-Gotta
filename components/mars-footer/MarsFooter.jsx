import React from 'react';
import PropTypes from 'prop-types';
import styles from './MarsFooter.module.css'

const MarsFooter = ({
}) => {
  return (<footer className={styles.footer}>
    <a
      href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
      target="_blank"
      rel="noopener noreferrer"
    >
      Powered by Mars Gotta
    </a>
  </footer>);
};

MarsFooter.defaultProps = {
};

MarsFooter.propTypes = {
};

export default MarsFooter;

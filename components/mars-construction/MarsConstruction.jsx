import React from 'react';
import PropTypes from 'prop-types';
import styles from './MarsConstruction.module.css'

const MarsConstruction = ({
  title,
  description
}) => {
  return (
    <section className={styles["construction-box"]}>
        <h4 className={styles["construction-title"]}>
          { title }
        </h4>
        <p className={styles["construction-text"]}>
          { description }
        </p>
        <img className={styles["construction-img"]} src="in-construction.svg"></img>
    </section>
  );
};

MarsConstruction.defaultProps = {
};

MarsConstruction.propTypes = {
};

export default MarsConstruction;

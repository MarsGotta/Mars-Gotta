import React from 'react';
import PropTypes from 'prop-types';
import styles from './MarsConstruction.module.css'

const MarsConstruction = ({
}) => {
  return (
    <section className={styles["construction-box"]}>
        <h4 className={styles["constuction-title"]}>
        ¡Lo siento! Esta página está en construcción
        </h4>
        <p className={styles["constuction-text"]}>
            Pronto tendré novedades para ti :)
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

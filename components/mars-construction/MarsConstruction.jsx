import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import styles from './MarsConstruction.module.css'

import ConstructionImage from '../../public/in-construction.svg';

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
      <figure className={styles["construction-img"]}>
        <Image src={ ConstructionImage } />
      </figure>
    </section>
  );
};

MarsConstruction.defaultProps = {
};

MarsConstruction.propTypes = {
};

export default MarsConstruction;

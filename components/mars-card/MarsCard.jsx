import React from 'react';
import PropTypes from 'prop-types';
import styles from './MarsCard.module.css'

const MarsCard = ({
}) => {
  return (<div className={styles['mars-button']}>Hola Soy un boton</div>);
};

MarsCard.defaultProps = {
};

MarsCard.propTypes = {
};

export default MarsCard;

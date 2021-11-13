import React from 'react';
import PropTypes from 'prop-types';
import styles from './MarsProgressBar.module.css'

const MarsCard = ({
    percentage = 0,
    title,
    className
}) => {
  return (
    <div className={className}>
        {title && <h4>{title}</h4>}
        {percentage && <span className={styles["outer"]}>
            <span
                className={styles["inner"]}
                style={{
                    width: `${percentage}`
                }}
            />
        </span>}
    </div>
  );
};

MarsCard.defaultProps = {
};

MarsCard.propTypes = {
};

export default MarsCard;

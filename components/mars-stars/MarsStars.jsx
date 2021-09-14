import {Fragment, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import styles from './MarsStars.module.css'

const MarsStars = ({
  limit,
}) => {
  const stars = [];
  const [ state, setState ] = useState([])
  useEffect(() => {
      //to get random number
    const rand = () => Math.random();

    for (var i=0; i <= limit; i++) {
      const startStyle = {
        top: `${rand()*90}%`,
        left: `${rand()*90}%`,
        WebkitAnimationDelay: `${rand()}s`,
        MozAnimationDelay:`${rand()}s`,
        background: `#F9FAFB`,
      }
      stars.push(
        <figure key={i} className={styles["star"]} style={startStyle}>
          <figure className={styles["star-top"]}></figure>
          <figure className={styles["star-bottom"]}></figure>
      </figure>
      )
    };

    setState(stars)
  }, []);

  return (
    <>
      {state}
    </>
    );
};

MarsStars.defaultProps = {
  limit: 10,
  className: ''
};

MarsStars.propTypes = {
  limit: PropTypes.number,
  className: PropTypes.string,
};

export default MarsStars;

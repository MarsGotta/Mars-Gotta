import PropTypes from 'prop-types';
import styles from './MarsStars.module.css'

const MarsStars = ({
  limit,
  className
}) => {
  const stars = [];

  //to get random number
  const rand = () => Math.random();

  for (var i=0; i <= limit; i++) {
    const startStyle = {
      top: `${rand()*100}%`,
      left: `${rand()*100}%`,
      WebkitAnimationDelay: `${rand()}s`,
      MozAnimationDelay:`${rand()}s`,
    }
    stars.push(
      <figure key={i} className={styles["star"]} style={startStyle}>
        <figure className={styles["star-top"]}></figure>
        <figure className={styles["star-bottom"]}></figure>
    </figure>
    )
  };

  return (
    <div className={className}>
      {stars}
    </div>
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

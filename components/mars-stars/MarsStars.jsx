import { useEffect, useState } from 'react';
import styles from './MarsStars.module.css'

const MarsStars = () => {
  const [ state, setState ] = useState()
  useEffect(() => {
    setState(
      <>
        <figure className={styles['stars']}></figure>
        <figure className={styles['twinkling']}></figure>
      </>
    )
  }, []);

  return (
    <>
      {state}
    </>
    );
};

MarsStars.defaultProps = {
};

MarsStars.propTypes = {
};

export default MarsStars;

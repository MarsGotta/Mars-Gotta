import React from 'react';
import PropTypes from 'prop-types';
import styles from './MarsGrid.module.css'

const MarsGrid = ({
  children,
}) => {
  useEffect(() => {
    import("@webinmars/grid/dist/mars-grid");
  }, []);

  return (<mars-grid className={styles['grid']}>{children}</mars-grid>);
};

MarsGrid.defaultProps = {
};

MarsGrid.propTypes = {
};

export default MarsGrid;

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './MarsGrid.module.css'

const MarsGrid = ({
  children,
  className,
  inline,
  gridTemplate,
  gap,
  grid,
  justifyItems,
  alignItems,
  placeItems,
  justifyContent,
  alignContent,
  placeContent,
  gridAutoFlow,
  containerSize
}) => {
  useEffect(() => {
    import("@webinmars/grid/dist/mars-grid");
  }, []);

  return (
    <mars-grid 
      class={`${styles['grid']} ${className}`} 
      inline={inline} 
      grid-template={gridTemplate} 
      gap={gap} 
      grid={grid} 
      justify-items={justifyItems}
      align-items={alignItems}
      place-items={placeItems}
      justify-content={justifyContent}
      align-content={alignContent}
      place-content={placeContent}
      grid-auto-flow={gridAutoFlow}
      container-size={containerSize}
    >
      {children}
    </mars-grid>
  );
};

MarsGrid.defaultProps = {
};

MarsGrid.propTypes = {
};

export default MarsGrid;

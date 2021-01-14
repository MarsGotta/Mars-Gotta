import React from 'react';
import PropTypes from 'prop-types';
import styles from './MarsIcon.module.css';
import * as icons from './IconCollection.jsx';

const MarsIcon = ({
  name,
  size,
  isDisabled, 
  addTitle, 
  onClick: passedCb, 
  className
}) => {
  const onClick = () => {
    if (isDisabled) return;

    passedCb();
  };
  
  const titlesTr = (name) => name; // Remove this code line

  const completeClassName = `${isDisabled ? 'disabled' : ''} ${className}`;

  const titleTrans = addTitle ? titlesTr(name) : '';
  
  const icon = icons[name]
    ? icons[name]({ onClick, className: completeClassName, title: titleTrans, size })
    : null;

  return icon;
};

MarsIcon.defaultProps = {
  className: '',
  isDisabled: false,
  addTitle: false,
  name: '',
  size: '24',
  onClick: () => {},
};

MarsIcon.propTypes = {
  className: PropTypes.string,
  isDisabled: PropTypes.bool,
  addTitle: PropTypes.bool,
  name: PropTypes.string,
  size: PropTypes.string,
  onClick: PropTypes.func,
};

export default MarsIcon;

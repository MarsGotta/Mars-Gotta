import React, { useEffect } from 'react';
import { useRouter } from 'next/router'
import PropTypes from 'prop-types';
import styles from './MarsIcon.module.css';
import * as icons from './IconCollection.jsx';

const MarsIcon = ({
  name,
  size,
  isDisabled, 
  addTitle, 
  onClick: passedCb, 
  href,
  className
}) => {
  const router = useRouter()

  useEffect(() => {
    import("@webinmars/icon/dist/mars-icon");
  }, []);

  const onClick = () => {
    if (isDisabled) return;
    if(href) window.open(href, '_ blank')

    passedCb();
  };
  
  const titlesTr = (name) => name; // Remove this code line

  const completeClassName = `${isDisabled ? styles['disabled'] : ''} ${href ? styles['href'] : ''} ${className}`;

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
  href: '',
  onClick: () => {},
};

MarsIcon.propTypes = {
  className: PropTypes.string,
  isDisabled: PropTypes.bool,
  addTitle: PropTypes.bool,
  name: PropTypes.string,
  size: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func,
};

export default MarsIcon;

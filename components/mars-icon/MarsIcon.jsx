import { useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './MarsIcon.module.css';
import * as IconCollection from './IconCollection.jsx'

const MarsIcon = ({
  name,
  size,
  isDisabled, 
  onClick: passedCb, 
  href,
  className,
  slot
}) => {
  const onClick = () => {
    if (isDisabled) return;
    if(href) window?.open(href, '_blank')

    passedCb();
  };

  const completeClassName = `${isDisabled ? styles['disabled'] : ''} ${href ? styles['href'] : ''} ${className}`;

  return IconCollection[name]({ className: completeClassName, size, onClick, href, slot });
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

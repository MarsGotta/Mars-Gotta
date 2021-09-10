import { useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './MarsIcon.module.css';

const MarsIcon = ({
  name,
  size,
  isDisabled, 
  addTitle, 
  onClick: passedCb, 
  href,
  className,
  type,
  variant
}) => {
  useEffect(() => {
    setTimeout(() => {
      import("@web-inmars/mars-icon/dist/mars-icon");
    }, 2)
  }, []);

  const onClick = () => {
    if (isDisabled) return;
    if(href) window?.open(href, '_ blank')

    passedCb();
  };

  const completeClassName = `${isDisabled ? styles['disabled'] : ''} ${href ? styles['href'] : ''} ${className}`;

  return (
    <mars-icon class={completeClassName} title name={name} type={type} width={size} height={size} variant={variant} onClick={() => onClick()} />
  );
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

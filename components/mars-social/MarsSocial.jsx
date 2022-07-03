import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './MarsSocial.module.css'
import MarsIcon from '../mars-icon/MarsIcon';

const MarsSocial = ({
  className,
  onClick
}) => {
  const socialIcons = [
    {
      name: 'github',
      link: 'https://github.com/MarsGotta',
      variant: 'primary',
      type: 'brands'
    }, 
    {
      name: 'linkedin',
      link: 'https://www.linkedin.com/in/marcelagotta/',
      variant: 'primary',
      type: 'brands'
    }, 
    {
      name: 'twitter',
      link: 'https://twitter.com/imarsgotta',
      variant: 'secondary',
      type: 'brands'
    }, 
    {
      name: 'telegram',
      link: 'https://t.me/marsgotta',
      variant: 'secondary',
      type: 'brands'
    }
  ];

  const onClickHandler = (e) => {
    onClick(e);
  }

  return (
    <figure className={`${className} ${styles['social-icons']}`}>
      {socialIcons.map((item, index) => {
        const { name, link, variant, type } = item;
        return (
        <MarsIcon 
          key={index} 
          name={name} 
          href={link} 
          variant={variant} 
          className={`${styles['social-icon']} ${styles[variant]}`} 
          onClick={onClickHandler} 
          size="35" 
          type={type} 
        />)
      })}
    </figure>
  );
};

MarsSocial.defaultProps = {
  className: '',
  onClick: () => {},
};

MarsSocial.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default MarsSocial;

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
      className: 'primary'
    }, 
    {
      name: 'linkedin',
      link: 'https://www.linkedin.com/in/marcelagotta/',
      className: 'primary'
    }, 
    {
      name: 'twitter',
      link: 'https://twitter.com/marcelagotta',
      className: 'secondary'
    }, 
    {
      name: 'telegram',
      link: 'https://t.me/marsgotta',
      className: 'secondary'
    }
  ];

  const onClickHandler = (e) => {
    onClick(e);
  }

  return (
    <figure className={`${className} ${styles['social-icons']}`}>
      {socialIcons.map((item, index) => {
        const { name, link, className } = item;
        return (<MarsIcon key={index} name={name} href={link} className={styles[className]} onClick={onClickHandler} size={35} />)
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

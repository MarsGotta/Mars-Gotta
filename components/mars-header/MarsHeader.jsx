import React from 'react';
import PropTypes from 'prop-types';
import styles from './MarsHeader.module.css'
import MarsMenu from '../mars-menu/MarsMenu'
import MarsLogo from '../mars-logo/MarsLogo'

const MarsHeader = ({
}) => {
  const menuItems = [
    {
      href: '/',
      title: 'Inicio'
    },
    {
      href: '/about',
      title: 'Sobre mi'
    },
    {
      href: '/courses-talk',
      title: 'Charlas y cursos'
    },
    {
      href: '/own-projects',
      title: 'Mis proyectos'
    },
    {
      href: '/mars-lab',
      title: 'Mi laboratorio'
    },
    {
      href: '/website',
      title: 'Sobre esta web'
    },
    {
      href: '/contact',
      title: 'Contacto'
    }
  ]
  return (
    <header className={styles['header']}>
      <MarsLogo className={styles['logo']}></MarsLogo>
      <MarsMenu items={menuItems}></MarsMenu>
    </header>
  );
};

MarsHeader.defaultProps = {
};

MarsHeader.propTypes = {
};

export default MarsHeader;

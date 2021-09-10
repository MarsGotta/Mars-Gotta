import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styles from './MarsHeader.module.css'
import MarsMenu from '../mars-menu/MarsMenu'
import MarsLogo from '../mars-logo/MarsLogo'
import MarsIcon from '../mars-icon/MarsIcon.jsx'

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
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  }
  return (
    <header className={styles['header']}>
      <div className={styles['header-content']}>
        <MarsLogo className={styles['logo']}></MarsLogo>
        <MarsIcon className={styles['icon']} name="bars" type="solid" onClick={handleToggle}></MarsIcon>
        <MarsMenu items={menuItems} isExpanded={isExpanded}></MarsMenu>
      </div>
    </header>
  );
};

MarsHeader.defaultProps = {
};

MarsHeader.propTypes = {
};

export default MarsHeader;

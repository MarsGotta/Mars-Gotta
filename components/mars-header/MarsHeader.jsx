import React, {useState, useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import styles from './MarsHeader.module.css'
import MarsMenu from '../mars-menu/MarsMenu'
import MarsLogo from '../mars-logo/MarsLogo'
import MarsIcon from '../mars-icon/MarsIcon.jsx'

const MarsHeader = ({
  changeSwitch,
  theme,
  onCollapsed
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
  const [isFirst, setIsFirst] = useState(true);
  const [switchChecked, setSwitchChecked] = useState(theme === 'dark-theme');

  const MarsSwitchRef = useRef(null);

  useEffect(() => {
    import("@web-inmars/mars-switch/dist/mars-switch.js");

  }, []);

  useEffect(() => {
    MarsSwitchRef.current.addEventListener('on-change', handleSwitch);
    setSwitchChecked(theme === 'dark-theme');
    MarsSwitchRef.current.checked = switchChecked;
    isFirst && setIsFirst(false);
  }, [MarsSwitchRef, switchChecked])

  useEffect(() => {
    onCollapsed && onCollapsed(isExpanded);
  }, [isExpanded])

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  }

  function handleSwitch({ detail: {event: {target}} }) {
    setSwitchChecked(target.checked);
    changeSwitch && changeSwitch(target.checked);
  }

  function handleClick () {
    setIsExpanded(false);
  }
  
  const selectIconName = () => switchChecked ? 'moon' : 'sun';

  return (
    <header className={styles['header']}>
      <div className={styles['header-content']}>
        <MarsLogo className={styles['logo']}></MarsLogo>
        <span className={styles['right-box']}>
          <mars-switch id="switchMode" class={styles['switch']} variant="xs,outline" ref={MarsSwitchRef}>
            <MarsIcon className={styles['icon-switch']} name={isFirst ? 'moon' : selectIconName()} type="solid" slot="slider" size="17"></MarsIcon>
          </mars-switch>
          <MarsIcon className={styles['icon']} name="bars" type="solid" onClick={handleToggle}></MarsIcon>
        </span>
        <MarsMenu items={menuItems} isExpanded={isExpanded} onClick={handleClick}></MarsMenu>
      </div>
    </header>
  );
};

MarsHeader.defaultProps = {
};

MarsHeader.propTypes = {
};

export default MarsHeader;

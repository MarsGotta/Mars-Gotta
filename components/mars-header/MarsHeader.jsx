import React, {useState, useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import styles from './MarsHeader.module.css'
import MarsMenu from '../mars-menu/MarsMenu'
import MarsLogo from '../mars-logo/MarsLogo'
import MarsIcon from '../mars-icon/MarsIcon.jsx'

const MarsHeader = ({
  changeSwitch,
  isDarkMode
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
  const [switchChecked, setSwitchChecked] = useState(false);

  const MarsSwitchRef = useRef(null);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  }

  function handleSwitch({ detail: {event: {target}} }) {
    setSwitchChecked(target.checked);
    changeSwitch && changeSwitch(target.checked);
  }

  useEffect(() => {
    import("@web-inmars/mars-switch/dist/mars-switch.js");
  }, []);

  useEffect(() => {
    MarsSwitchRef.current.addEventListener('on-change', handleSwitch);
    setSwitchChecked(isDarkMode);
    MarsSwitchRef.current.checked = isDarkMode;
  }, [MarsSwitchRef, isDarkMode]);

  return (
    <header className={styles['header']}>
      <div className={styles['header-content']}>
        <MarsLogo className={styles['logo']}></MarsLogo>
        <span className={styles['right-box']}>
          <mars-switch id="switchMode" class={styles['switch']} variant="xs,outline" ref={MarsSwitchRef}>
            <MarsIcon className={styles['icon-switch']} name={switchChecked ? 'moon' : 'sun'} type="solid" slot="slider" size="17"></MarsIcon>
          </mars-switch>
          <MarsIcon className={styles['icon']} name="bars" type="solid" onClick={handleToggle}></MarsIcon>
        </span>
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

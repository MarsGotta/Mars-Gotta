import React, {useState, useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import styles from './MarsHeader.module.css'
import MarsMenu from '../mars-menu/MarsMenu'
import MarsLogo from '../mars-logo/MarsLogo'
import MarsIcon from '../mars-icon/MarsIcon.jsx'

const MarsHeader = ({
  changeSwitch,
  theme,
  items
}) => {
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
    <header className={`${styles['header']} ${isExpanded ? styles['full-width'] : ''}`}>
      <div className={styles['header-content']}>
        <MarsLogo className={styles['logo']} />
        <span className={styles['right-box']}>
          <mars-switch id="switchMode" class={styles['switch']} variant="xs,outline" ref={MarsSwitchRef}>
            <MarsIcon className={styles['icon-switch']} name={isFirst ? 'moon' : selectIconName()} type="solid" slot="slider" size="17" />
          </mars-switch>
          <MarsIcon className={styles['icon']} name="bars" type="solid" onClick={handleToggle} />
        </span>
        <MarsMenu items={items} isExpanded={isExpanded} onClick={handleClick} />
      </div>
    </header>
  );
};

MarsHeader.defaultProps = {
  changeSwitch: () => {},
  theme: ''
};

MarsHeader.propTypes = {
  changeSwitch: PropTypes.func,
  theme: PropTypes.string
};

export default MarsHeader;

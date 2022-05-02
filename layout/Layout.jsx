import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { themes } from '../core/theme-context';
import styles from './Layout.module.css'
import MarsHeader from '../components/mars-header/MarsHeader';
import MarsFooter from '../components/mars-footer/MarsFooter';
import MarsSubHeader from '../components/mars-sub-header/MarsSubHeader';

const Layout = ({
  	children,
	landing,
	config,
	theme,
	onSwitch,
	onCollapsed
}) => {
	const changeTheme = (checked) => {
		const theme = checked ? themes.dark : themes.light;
		onSwitch(theme);
	}

	const renderSubHeader = (landing, { title }) => {
		if(landing) return;
		return <MarsSubHeader title={title} />
	}

  	return (
		<section className={styles['section']}>
			<MarsHeader changeSwitch={e => changeTheme(e)} theme={theme} onCollapsed={onCollapsed} />
			{renderSubHeader(landing, config)}
			<main className={!landing ? styles['landing'] : undefined}>
				{children}
			</main>	
			<MarsFooter />
		</section>
	);
};

Layout.defaultProps = {
	landing: false,
	config: {},
	onSwitch: () => {}
};

Layout.propTypes = {
  landing: PropTypes.bool,
  config: PropTypes.object,
  onSwitch: PropTypes.func
};

export default Layout;

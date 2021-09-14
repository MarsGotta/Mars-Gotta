import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {themes} from '../core/theme-context';
import MarsHeader from '../components/mars-header/MarsHeader';
import MarsFooter from '../components/mars-footer/MarsFooter';
import MarsSubHeader from '../components/mars-sub-header/MarsSubHeader';
const renderSubHeader = (landing, { title }) => {
	if(landing) return;
	return <MarsSubHeader title={title} />
}
const Layout = ({
  	children,
	landing,
	config,
	theme,
	onSwitch
}) => {
	const changeTheme = (checked) => {
		const theme = checked ? themes.dark : themes.light;
		onSwitch(theme);
	}

  	return (
		<>
			<MarsHeader changeSwitch={e => changeTheme(e)} theme={theme} />
			{renderSubHeader(landing, config)}
			<section style={{maxWidth: '1140px', margin: 'auto'}}>
				<main style={!landing ? { padding: '0 15px', fontSize: '20px', color: "var(--color-text-primary)", fontWeight: 300, minHeight: 'calc(100vh - 308px)' } : {}}>
					{children}
				</main>	
			</section>
			<MarsFooter />
		</>
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

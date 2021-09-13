import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
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
	config
}) => {
	const [ isDarkMode, setIsDarkMode ] = React.useState(false);

	useEffect(() => {
		setIsDarkMode(JSON.parse(localStorage.getItem('isDarkMode')));
	}, [])

	const changeTheme = (theme) => {
		setIsDarkMode(theme);
		localStorage.setItem('isDarkMode', theme);
	}
	
  	return (
		<div className={`layout-box ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
			<MarsHeader changeSwitch={e => changeTheme(e)} isDarkMode={isDarkMode} />
			{renderSubHeader(landing, config)}
			<section style={{maxWidth: '1140px', margin: 'auto'}}>
				<main style={!landing ? { padding: '0 15px', fontSize: '20px', color: '#1a0e1a', fontWeight: 300, minHeight: 'calc(100vh - 308px)' } : {}}>
					{children}
				</main>	
			</section>
			<MarsFooter />
		</div>
  );
};

Layout.defaultProps = {
	landing: false,
	config: {}
};

Layout.propTypes = {
  landing: PropTypes.bool,
  config: PropTypes.object,
};

export default Layout;

import React, { Fragment } from 'react';
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
	
  return (
		<Fragment>
			<MarsHeader />
			{renderSubHeader(landing, config)}
			<main style={!landing ? { padding: '0 15px', fontSize: '20px', color: '#1F1331', fontWeight: 100, minHeight: 'calc(100vh - 250px)' } : {}}>
				{children}
			</main>
			<MarsFooter />
		</Fragment>
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

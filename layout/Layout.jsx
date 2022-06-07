import PropTypes from 'prop-types';
import { themes } from '../core/theme-context';
import styles from './Layout.module.css'
import MarsHeader from '../components/mars-header/MarsHeader';
import MarsFooter from '../components/mars-footer/MarsFooter';
import MarsSubHeader from '../components/mars-sub-header/MarsSubHeader';
import { useThemeContext, setStorageTheme } from "../core/theme-context";
import { useConfigContext } from "../core/config-context";
const Layout = ({
  	children,
	landing,
}) => {
	const { variableState, setVariableState } = useThemeContext();
	const { configState } = useConfigContext();
	const config = configState;
	const theme = variableState;

	const handleSwitch = (theme) => {
		setVariableState(theme);
		setStorageTheme(theme);
	};
	
	const changeTheme = (checked) => {
		const theme = checked ? themes.dark : themes.light;
		handleSwitch(theme);
	}

	const renderSubHeader = (landing, { title }) => {
		if(landing) return;
		return <MarsSubHeader className={styles['subheader']} title={title} />
	}

  	return (
		<div className={`${styles['layout-container']} ${landing ? styles['landing'] : ''}`}>
			<MarsHeader changeSwitch={e => changeTheme(e)} theme={theme} />
			{renderSubHeader(landing, config)}
			<main className={styles['main']}>
				{children}
			</main>
			<MarsFooter fixed={landing}/>
		</div>
	);
};

Layout.defaultProps = {
	landing: false,
};

Layout.propTypes = {
  landing: PropTypes.bool,
};

export default Layout;

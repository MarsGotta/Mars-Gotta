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
		return <MarsSubHeader title={title} />
	}

  	return (
		<>
			<MarsHeader changeSwitch={e => changeTheme(e)} theme={theme} />
			{renderSubHeader(landing, config)}
			<section className={styles['section']}>
				<main className={!landing ? styles['landing'] : undefined}>
					{children}
				</main>	
			</section>
			<MarsFooter />
		</>
  );
};

Layout.defaultProps = {
	landing: false,
};

Layout.propTypes = {
  landing: PropTypes.bool,
};

export default Layout;

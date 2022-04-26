import { ThemeProvider } from 'styled-components';
import Sidebar from './components/sidebar/Sidebar';
import { colors } from './components/Theme';

function App() {
	return (
		<ThemeProvider theme={colors}>
			<Sidebar />
		</ThemeProvider>
	);
}

export default App;

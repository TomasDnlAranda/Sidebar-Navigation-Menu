import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import Sidebar from './components/sidebar/Sidebar';
import { colors } from './components/Theme';

const ContainerPages = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;

	h1 {
		size: calc(2rem + 2vw);
		background: linear-gradient(to right, #803bec 30%, #1b1b1b 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
`;

function App() {
	return (
		<ThemeProvider theme={colors}>
			<ContainerPages>
				<Outlet />
			</ContainerPages>
			<Sidebar />
		</ThemeProvider>
	);
}

export default App;

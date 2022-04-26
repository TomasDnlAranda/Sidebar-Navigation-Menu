import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import { GlobalStyle } from './GlobalStyle';
import Home from './Pages/Home';
import Calender from './Pages/Calender';
import Document from './Pages/Document';
import Projects from './Pages/Proyects';
import Team from './Pages/Team';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />}>
					<Route index path="/home" element={<Home />} />
					<Route index path="/calender" element={<Calender />} />
					<Route index path="/document" element={<Document />} />
					<Route index path="/proyects" element={<Projects />} />
					<Route index path="/team" element={<Team />} />
				</Route>
			</Routes>
		</BrowserRouter>
		<GlobalStyle />
	</React.StrictMode>
);

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
import { AnimatePresence } from 'framer-motion';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<AnimatePresence exitBeforeEnter>
				<Routes>
					<Route path="/" element={<App />}>
						<Route index path="/home" element={<Home />} />
						<Route path="/calender" element={<Calender />} />
						<Route path="/document" element={<Document />} />
						<Route path="/proyects" element={<Projects />} />
						<Route path="/team" element={<Team />} />
					</Route>
				</Routes>
			</AnimatePresence>
		</BrowserRouter>
		<GlobalStyle />
	</React.StrictMode>
);

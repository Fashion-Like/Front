import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import RegisterPage from './pages/RegisterPage';
import NotFoundPage from './pages/NotFoundPage';
import LoginPage from './pages/LoginPage';
import ForgotPassPage from './pages/ForgotPassPage';
import HomePage from './pages/HomePage';

function App() {
	return (
		<Router>
			<Routes>
				<Route exact path="/" element={<HomePage />} />
				<Route exact path="/login" element={<LoginPage />} />
				<Route exact path="/register" element={<RegisterPage />} />
				<Route exact path="/forgot-password" element={<ForgotPassPage />} />
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</Router>
	);
}

export default App;

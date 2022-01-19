import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import SignUpPage from './pages/SignUpPage';
import NotFoundPage from './pages/NotFoundPage'

function App() {
  return (
    <Router >
      <Routes>
        <Route exact path="/" element={<div> Home </div>}/>
        <Route exact path="/signup" element={< SignUpPage />}/>
        <Route path="*" element={< NotFoundPage />}/>
      </Routes>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CampInfo from './components/CampInfo';
import SignUp from './components/SignUp';
import ErrorPage from './Error/ErrorPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<CampInfo />} />
        <Route path="/bootcamps" element={<CampInfo />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;

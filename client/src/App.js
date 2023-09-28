import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Rockets from './space/Rockets';
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
          <Route exact path='/' element={<Home />} />
      </Routes> 
    </Router>
  );
}

export default App;

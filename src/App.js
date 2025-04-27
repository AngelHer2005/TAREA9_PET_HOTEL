import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './views/Login';
import Register from './views/Register';
import Reservations from './views/Reservations';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/reservas" element={<Reservations />} />
      </Routes>
    </Router>
  );
}

export default App;
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Auth from './Components/Auth';
import State from './Components/context/State'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <State >
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/auth' element={<Auth />} />
          </Routes>
        </Router>
      </State>
    </>
  );
}

export default App;

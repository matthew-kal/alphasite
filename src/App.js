import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar.js';
import Footer from './Components/Footer.js';
import Home from './Pages/Home.js';
import Programs from './Pages/Programs.js';

function App() {
  return (
    <Router>
      <NavBar />
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Programs' element={<Programs />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;

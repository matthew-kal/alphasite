import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Programs from './Pages/Programs';
import Donate from './Pages/Donate';
import History from './Pages/History'; // Assuming you have this component

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/programs' element={<Programs />} />
        <Route path='/donate' element={<Donate />} />
        <Route path='/history' element={<History />} /> {/* Assuming you have a history page */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;


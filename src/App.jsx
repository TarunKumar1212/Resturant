import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="overflow-x-hidden w-full flex flex-col min-h-screen">
      <Navbar />

      {/* Main Content Wrapper */}
      <div className="w-full flex-grow">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About mt="Yes" />} />
          <Route path='/menu' element={<Menu mt="Yes" />} />
          <Route path='/contact' element={<Contact mt="Yes" />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;

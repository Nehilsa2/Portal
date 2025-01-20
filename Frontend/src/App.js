import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Prototypes from './Pages/Prototypes';
import AdminDashboard from './sections/AdminDashboard';
import Navbar from './sections/Navbar';
import Footer from './sections/Footer';
import AboutUs from './Pages/AboutUs';
import ContactUs from './Pages/ContactUs';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/prototypes' element={<Prototypes />} />
          <Route path='/' element={<Home />} /> {/* Make sure 'Home' is capitalized and defined */}
          <Route path='/admin' element={<AdminDashboard />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

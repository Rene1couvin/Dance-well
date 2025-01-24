import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/about';
import Event from './pages/Event';
import Blog from './pages/Blog';
import ContactUs from './pages/ContactUs';
import Navbar from './components/Navbar';
import Footer from './components/footer';
import Preloader from './preloader';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Simulated loading time
    return () => clearTimeout(timer); // Clean up the timer
  }, []);

  return (
    <div>
      {loading ? (
        <Preloader />
      ) : (
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/event" element={<Event />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
          <Footer/>
        </div>
      )}
    </div>
  );
}

export default App;
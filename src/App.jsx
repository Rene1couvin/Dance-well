import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/about';
import Event from './pages/Event';
import Blog from './pages/Blog';
import BlogDetail from './pages/blogdetail';
import ContactUs from './pages/ContactUs';
import EventUpload from './pages/UploadEvent';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AuthPage from './auth/AuthPage';
import Preloader from './preloader';
import Admin from './admin/admin_all';
import ProtectedRoute from './ProtectedRoute';

function App() {
  const [loading, setLoading] = useState(true);
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);

    const checkAuthStatus = async () => {
      try {
        const storedAdminStatus = localStorage.getItem("admin") === "true";

        if (storedAdminStatus) {
          setAdmin(true);
          return;
        }

        const response = await fetch("/api/auth/check");
        if (!response.ok) throw new Error("Failed to fetch");

        const data = await response.json();
        setAdmin(data.admin);

        if (data.admin) {
          localStorage.setItem("admin", "true");
        } else {
          localStorage.removeItem("admin");
        }
      } catch (error) {
        console.error("Error checking authentication:", error);
        setAdmin(false);
      }
    };

    checkAuthStatus();
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? (
        <Preloader />
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/event" element={<Event />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/uploadevent" element={<EventUpload />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            
            {/* Protected Admin Route */}
            <Route 
              path="/admin" 
              element={
                <ProtectedRoute admin={admin}>
                  <Admin />
                </ProtectedRoute>
              }
            />
          </Routes>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;

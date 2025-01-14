import './App.css';
import Header from './Components/UI/Header';
import Home from './Components/Sections/Home';
import Mission from './Components/Sections/Mission';
import { BrowserRouter as Router, Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import School from './Components/Sections/Schools';
import Footer from './Components/UI/Footer';
import About from './Components/Sections/About';
import ContactUs from './Components/Sections/Contact Us';
import NavMob from './Components/UI/NavMob';
import FooterMob from './Components/UI/Cards/FooterMob/Index';
import { useEffect, useState } from 'react';

const AppContent = () => {
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 768);
  const location = useLocation();
  const navigate = useNavigate();

  // Update screen size on resize
  useEffect(() => {
    const handleResize = () => {
      const isNowMobile = window.innerWidth < 768;
      setIsMobile(isNowMobile);

      // Redirect to home if on `/header` and screen size changes to non-mobile
      if (!isNowMobile && location.pathname === '/header') {
        navigate('/');
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [location, navigate]);

  const hideFooterRoutes = ['/header'];

  return (
    <div className="overflow-x-hidden">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/for-schools" element={<School />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/header" element={isMobile ? <NavMob /> : <Home />} />
      </Routes>
      {!hideFooterRoutes.includes(location.pathname) && <Footer />}
      {!hideFooterRoutes.includes(location.pathname) && <FooterMob />}
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;

import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/UI/Header';
import NavMob from './Components/UI/NavMob';
import Home from './Components/Sections/Home';
import Mission from './Components/Sections/Mission';
import School from './Components/Sections/Schools';
import About from './Components/Sections/About';
import ContactUs from './Components/Sections/Contact Us';
import Footer from './Components/UI/Footer';
import FooterMob from './Components/UI/Cards/FooterMob/Index';

const App = () => {
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 768);
  const [isNavMobOpen, setIsNavMobOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleNavMob = () => {
    setIsNavMobOpen((prev) => !prev); 
  };

  return (
    <Router>
      <div className="overflow-x-hidden">
        <Header onToggleNav={toggleNavMob} />

        {isMobile && isNavMobOpen && (
          <div className="fixed inset-0 z-50 bg-white">
            <NavMob />
          </div>
        )}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/for-schools" element={<School />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>

        <Footer />
        <FooterMob />
      </div>
    </Router>
  );
};

export default App;

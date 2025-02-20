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

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Function to toggle NavMob visibility
  const toggleNavMob = () => {
    setIsNavMobOpen((prev) => {
      if (!prev) {
        // Open NavMob: Disable body scrolling
        document.body.style.overflow = "hidden";
      } else {
        // Close NavMob: Enable body scrolling
        document.body.style.overflow = "auto";
      }
      return !prev;
    });
  };

  // Cleanup when component unmounts
  useEffect(() => {
    return () => {
      document.body.style.overflow = "auto"; // Reset overflow on unmount
    };
  }, []);


  return (
    <Router>
      <div className="overflow-x-hidden">
        <Header onToggleNav={toggleNavMob} />

        {isMobile && isNavMobOpen && (
          <div className="fixed inset-0 z-50 bg-white">
            <NavMob onToggleNav={toggleNavMob} />
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

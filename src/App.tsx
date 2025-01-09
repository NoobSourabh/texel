import './App.css'
import Header from './Components/UI/Header'
import Home from './Components/Sections/Home';
import Mission from './Components/Sections/Mission';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import School from './Components/Sections/Schools';
import Footer from './Components/UI/Footer';
import About from './Components/Sections/About';
import ContactUs from './Components/Sections/Contact Us';

const App = () => {
  return (
    <Router>
      <div >
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/for-schools" element={<School />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
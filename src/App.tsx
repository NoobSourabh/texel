import './App.css'
import Header from './Components/Header'
import Home from './Components/Home'
import Mission from './Components/Mission'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router>
    <div >
      
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mission" element={<Mission />} />
      </Routes>

    </div>
    </Router>
  )
}

export default App
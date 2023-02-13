import Home from './Components/Pages/Home';
import { Routes, Route, useNavigate} from "react-router-dom"
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Works from './Components/Pages/Works';
import Skills from './Components/Pages/Skills';
import ContactMe from './Components/Pages/ContactMe';

function App() {
  return (
    <div className="App">

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/works" element={<Works />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<ContactMe />} />
        <Route path="/skills/education" element={<Home/>} /> 
      </Routes>

      <Footer />

    </div>
  );
}

export default App;

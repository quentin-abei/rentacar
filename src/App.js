import './App.css';
import About from './components/About';
import Home from './components/Home';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from './components/Navbar';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;

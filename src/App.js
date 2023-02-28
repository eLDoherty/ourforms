import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Register from './pages/Register';

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="about" element={ <About/> } />
            <Route path="contact" element={ <Contact/> } />
            <Route path="register" element={ <Register /> } />
        </Routes>
    </div>
  );
}

export default App;

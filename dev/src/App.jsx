import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Experience from './pages/Experience.jsx';
import Projects from './pages/Projects.jsx';
import Hobbies from './pages/Hobbies.jsx';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/hobbies" element={<Hobbies />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

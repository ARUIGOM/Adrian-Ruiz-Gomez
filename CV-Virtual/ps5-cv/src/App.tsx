import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Profile from "./pages/Profile.tsx";
import Experience from "./pages/Experience.tsx";
import Education from "./pages/Education.tsx";
import Contact from "./pages/Contact.tsx";
import Skills from "./pages/Skills.tsx"; // Nueva importación
import Proyectos from "./pages/Proyectos.tsx"; // Nueva importación
import "./styles/App.scss";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/education" element={<Education />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/proyectos" element={<Proyectos />} />
      </Routes>
    </Router>
  );
};

export default App;

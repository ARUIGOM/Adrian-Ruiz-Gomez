import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Perfil from "../../public/assets/images/Perfil.png";
import Educacion from "../../public/assets/images/Educacion.png";
import Experiencia from "../../public/assets/images/Experiencia.png";
import Proyectos from "../../public/assets/images/Proyectos.png";
import Habilidades from "../../public/assets/images/Habilidades.png";
import Contactos from "../../public/assets/images/Contactos.png";
import clickMusic from "../../public/assets/musicas/Click.mp3";
import menuMusic from "../../public/assets/musicas/Menu.mp3"; // Nueva importación
import "./ps5menu.scss";

const puzzleVariants = {
  hidden: (index: number) => ({
    opacity: 0,
    x: (index % 2 === 0 ? -1 : 1) * 100, // Se mueven desde lados opuestos
    y: (index < 2 ? -1 : 1) * 100, // Arriba o abajo
    rotate: index % 2 === 0 ? -30 : 30, // Rotación inicial
  }),
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    rotate: 0,
    transition: { type: "spring", stiffness: 100, damping: 10, delay: 0.2 },
  },
};

export const Home = () => {
  const [background, setBackground] = useState("");
  const [isDarkened, setIsDarkened] = useState(false);
  const navigate = useNavigate();
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = new Audio(menuMusic);
    audio.play();
  }, []);

  const handleMouseEnter = (image: any) => {
    setBackground(image);
    setIsDarkened(true);
  };

  const handleMouseLeave = () => {
    setIsDarkened(false);
  };

  const handleClick = (path: string) => {
    const clickAudio = new Audio(clickMusic);
    clickAudio.play().then(() => {
      navigate(path);
    });
  };

  return (
    <div className="ps5-container">
      <div
        className="ps5-background"
        style={{
          backgroundImage: `url(${background})`,
          opacity: isDarkened ? 0.3 : 1, // 🔹 Más opacidad al pasar el ratón
        }}
      ></div>

      <audio ref={audioRef} src={menuMusic} loop autoPlay />
      <motion.div
        className="ps5-menu"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
      >
        <h2 className="menu-title">Menú Principal</h2>
        <ul className="ps5-nav">
          {[
            { image: Perfil, label: "Perfil", path: "/profile" },
            { image: Experiencia, label: "Experience", path: "/experience" },
            { image: Habilidades, label: "Skills", path: "/skills" },
            { image: Educacion, label: "Education", path: "/education" },
            { image: Proyectos, label: "Proyectos", path: "/proyectos" },
            { image: Contactos, label: "Contactos", path: "/contact" },
          ].map((item, index) => (
            <motion.li
              key={index}
              className="ps5-item"
              variants={puzzleVariants}
              custom={index}
            >
              <button
                className="ps5-link"
                onClick={() => handleClick(item.path)}
                onMouseEnter={() => handleMouseEnter(item.image)}
                onMouseLeave={handleMouseLeave}
              >
                <img src={item.image} alt={item.label} className="ps5-icon" />
                <span>{item.label}</span>
              </button>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default Home;

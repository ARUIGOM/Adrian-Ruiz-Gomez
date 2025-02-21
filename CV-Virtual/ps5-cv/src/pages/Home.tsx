import{ useState, useRef } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import user1 from "../../public/assets/avatar/user1.jpg";
import user2 from "../../public/assets/avatar/user2.jpg";
import startupMusic from "../../public/assets/musicas/Power.mp3";
import menuMusic from "../../public/assets/musicas/Menu.mp3";
import Perfil from "../../public/assets/images/Perfil.png";
import Educacion from "../../public/assets/images/Educacion.png";
import Experiencia from "../../public/assets/images/Experiencia.png";
import Proyectos from "../../public/assets/images/Proyectos.png";
import Habilidades from "../../public/assets/images/Habilidades.png";
import Contactos from "../../public/assets/images/Contactos.png";
import "./ps5menu.scss";

const users = [
  { id: 1, name: "Adrian Ruiz", avatar: user1 },
  { id: 2, name: "Maria", avatar: user2 },
];

const puzzleVariants = {
  hidden: (index) => ({
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

const Home = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [musicPlayed, setMusicPlayed] = useState(false);
  const [musicSrc, setMusicSrc] = useState(startupMusic);
  const [background, setBackground] = useState("");
  const [isDarkened, setIsDarkened] = useState(false);
  const audioRef = useRef(null);
  const navigate = useNavigate();

  const startMusic = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setMusicPlayed(true);
    }
  };

  const handleUserSelection = (user) => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setSelectedUser(user);
    setMusicSrc(menuMusic);
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const handleMouseEnter = (image) => {
    setBackground(image);
    setIsDarkened(true);
  };

  const handleMouseLeave = () => {
    setIsDarkened(false);
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

      {!musicPlayed && (
        <div className="start-screen">
          <button className="start-button btn-shine" onClick={startMusic}>
            Iniciar Consola
          </button>
        </div>
      )}
      <audio ref={audioRef} src={musicSrc} loop />
      {musicPlayed && (
        <>
          {!selectedUser ? (
            <div className="user-selection">
              <h2>Selecciona un usuario</h2>
              <div className="user-list">
                {users.map((user) => (
                  <motion.div
                    key={user.id}
                    className="user-item"
                    onClick={() => handleUserSelection(user)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <img src={user.avatar} alt={user.name} className="user-avatar" />
                    <span>{user.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          ) : (
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
                      onClick={() => navigate(item.path)}
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
          )}
        </>
      )}
    </div>
  );
};

export default Home;

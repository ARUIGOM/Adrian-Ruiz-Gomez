import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import user1 from "../../public/assets/avatar/user1.jpg";
import user2 from "../../public/assets/avatar/user2.jpg";
import startupMusic from "../../public/assets/musicas/Power.mp3";
import menuMusic from "../../public/assets/musicas/Menu.mp3";
import clickMusic from "../../public/assets/musicas/Click.mp3"; // Nueva importación
import "./ps5menu.scss";

const users = [
  { id: 1, name: "Adrian Ruiz", avatar: user1 },
  { id: 2, name: "Maria", avatar: user2 },
];

const User = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [musicSrc, setMusicSrc] = useState(startupMusic);
  const audioRef = useRef<HTMLAudioElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const audio = new Audio(startupMusic);
    audio.play();
  }, []);

  const startMusic = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const handleUserSelection = (user: any) => {
    const clickAudio = new Audio(clickMusic);
    clickAudio.play().then(() => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
      setSelectedUser(user);
      setMusicSrc(menuMusic);
      if (audioRef.current) {
        audioRef.current.play();
      }
      navigate("/home"); // Redirigir a /home
    });
  };

  return (
    <div className="ps5-container">
      <audio ref={audioRef} src={musicSrc} loop />
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
        <div className="start-screen">
          <button className="start-button btn-shine" onClick={startMusic}>
            Iniciar Consola
          </button>
        </div>
      )}
    </div>
  );
};

export default User;

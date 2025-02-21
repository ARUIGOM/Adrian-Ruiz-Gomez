import "./Skills.scss";
import java from "../../public/assets/iconos/java.png";
import reactIcon from "../../public/assets/iconos/react.png";
import nodejsIcon from "../../public/assets/iconos/nodejs.png";
import cssIcon from "../../public/assets/iconos/css.png";
import htmlIcon from "../../public/assets/iconos/html.png";
import Mysql from "../../public/assets/iconos/Mysql.png";
import Mongodb from "../../public/assets/iconos/mongodb.png";
import js from "../../public/assets/iconos/js.jpg";
import { useNavigate } from 'react-router-dom';

const Skills = () => {
  const navigate = useNavigate();
  const skills = [
    { name: "Java", icon: java, description: "Lenguaje de programación orientado a objetos." },
    { name: "JavaScript", icon: js, description: "Lenguaje de programación utilizado para el desarrollo web." },
    { name: "React", icon: reactIcon, description: "Biblioteca de JavaScript para construir interfaces de usuario." },
    { name: "Node.js", icon: nodejsIcon, description: "Entorno de ejecución para JavaScript fuera del navegador." },
    { name: "CSS", icon: cssIcon, description: "Lenguaje de estilos para diseñar páginas web." },
    { name: "HTML", icon: htmlIcon, description: "Lenguaje de marcado para estructurar contenido en la web." },
    { name: "MYSQL", icon: Mysql, description: "Sistema de gestión de bases de datos relacional." },
    { name: "MONGODB", icon: Mongodb, description: "Base de datos NoSQL orientada a documentos." }
    
  ];

  return (
    <div>
      <h1>Habilidades</h1>
      <div className="skills-container">
        {skills.map((skill) => (
          <div key={skill.name} className="skill-card">
            <img src={skill.icon} alt={skill.name} />
            <h3>{skill.name}</h3>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
      <button className="back-button" onClick={() => navigate("/")}>
        Volver a Home
      </button>
    </div>
  );
};

export default Skills;

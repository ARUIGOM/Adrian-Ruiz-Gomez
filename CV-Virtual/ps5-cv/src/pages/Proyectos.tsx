import { useNavigate } from 'react-router-dom';
import "./Proyectos.scss";
import project1 from "../../public/assets/proyectos/proyectos.png";
import project2 from "../../public/assets/proyectos/proyectos.png";
import project3 from "../../public/assets/proyectos/proyectos.png";

const Proyectos = () => {
  const navigate = useNavigate();
  const proyectos = [
    { nombre: 'Proyecto TFG frontend', descripcion: 'Aquí está la parte del frontend de mi proyecto', imagen: project1, link: 'https://frontend.example.com' },
    { nombre: 'Proyecto TFG backend', descripcion: 'Aquí está la parte del backend de mi proyecto', imagen: project2, link: 'https://backend.example.com' },
    { nombre: 'Listado de bosses y platino en React', descripcion: 'Este es un proyecto personal para ayudar a las personas perdidas con todos los bosses, guías, armas, etc.', imagen: project3, link: 'https://bosses.example.com', scrollable: true },
  ];

  return (
    <div>
      <h1>Proyectos</h1>
      <div className="projects-container">
        {proyectos.map((proyecto) => (
          <div key={proyecto.nombre} className={`project-card ${proyecto.scrollable ? 'scrollable' : ''}`}>
            <img src={proyecto.imagen} alt={proyecto.nombre} />
            <h3>{proyecto.nombre}</h3>
            <p>{proyecto.descripcion}</p>
            <button onClick={() => window.location.href = proyecto.link}>Ver Proyecto</button>
          </div>
        ))}
      </div>
      <button className="back-button" onClick={() => navigate("/")}>
        Volver a Home
      </button>
    </div>
  );
};

export default Proyectos;

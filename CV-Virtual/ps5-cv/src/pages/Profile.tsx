import { useNavigate } from 'react-router-dom'; // Nueva importación
import "./Profile.scss";

const Profile = () => {
  const navigate = useNavigate(); // Uso de navigate

  return (
    <div className="profile-container">
      <h2 className="profile-header">Perfil</h2>
      <div className="profile-details">
        <p>Nombre: Adrián Ruiz</p>
        <p>Profesión: Desarrollador de Software</p>
        <p>Descripción: Apasionado por la tecnología y el desarrollo de software.</p>
      </div>
      <button className="back-button" onClick={() => navigate("/")}>
        Volver a Home
      </button>
    </div>
  );
};

export default Profile;

import { useNavigate } from 'react-router-dom'; // Nueva importación
import profileImage from '../../public/assets/images/Curriculum.jpg'; // Nueva importación
import "./Profile.scss";

const Profile = () => {
  const navigate = useNavigate(); // Uso de navigate

  return (
    <div className="profile-container">
      <img src={profileImage} alt="Perfil" className="profile-image" /> {/* Nueva línea */}
      <h2 className="profile-header">Perfil</h2>
      <div className="profile-details">
        <p>Nombre: Adrián Ruiz</p>
        <p>Profesión: Desarrollador de Aplicaciones Web</p>
        <p>Descripción: Apasionado por la tecnología y el desarrollo de Aplicaciones Web.</p>
      </div>
      <button className="back-button" onClick={() => navigate("/home")}>
        Volver a Home
      </button>
    </div>
  );
};

export default Profile;

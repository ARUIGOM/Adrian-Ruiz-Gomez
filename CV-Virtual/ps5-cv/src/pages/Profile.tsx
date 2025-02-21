// Profile.tsx

import "./Profile.scss";

const Profile = () => {
  return (
    <div className="profile-container">
      <h2 className="profile-header">Perfil</h2>
      <div className="profile-details">
        <p>Nombre: Adrián Ruiz</p>
        <p>Profesión: Desarrollador de Software</p>
        <p>Descripción: Apasionado por la tecnología y el desarrollo de software.</p>
      </div>
    </div>
  );
};

export default Profile;

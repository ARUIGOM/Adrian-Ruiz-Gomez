import React from "react";
import { User } from "../../types/user";
import "./UserProfile.scss";

interface UserProfileProps {
  user: User;
}

const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
  return (
    <div className="user-profile">
      <h2>{user.name}</h2>
      <div className="curriculum">
        <div className="section">
          <h3>Experiencia</h3>
          <p>{user.curriculum.experience}</p>
        </div>
        <div className="section">
          <h3>Habilidades</h3>
          <p>{user.curriculum.skills}</p>
        </div>
        <div className="section">
          <h3>Proyectos</h3>
          <p>{user.curriculum.projects}</p>
        </div>
        <div className="section">
          <h3>Contacto</h3>
          <p>{user.curriculum.contact}</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;

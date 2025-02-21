// Contact.tsx
import { useNavigate } from "react-router-dom";
import "./Contactos.scss";

const Contact = () => {
  const navigate = useNavigate();

  return (
    <div className="contact-container">
      <div className="contact-content">
        <h2 className="contact-title">Contacto</h2>
        <ul className="contact-list">
          <li className="contact-item">Mi numero de telefono es este: 694 42 66 31</li>
          <li className="contact-item">Mi correo electronico es este: gokadria05@gmail.com</li>
        </ul>
        <button className="back-button" onClick={() => navigate("/")}>
          Volver a Home
        </button>
      </div>
    </div>
  );
};

export default Contact;

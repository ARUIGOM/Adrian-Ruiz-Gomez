import { useState } from "react";
import { Button } from "./button.tsx"; // Corrige la ruta de importación
import { Power } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./Power-Button.scss"; // Importar el archivo SCSS

export default function ToggleButton() {
  const [isOn, setIsOn] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setIsOn(!isOn);
    if (!isOn) {
      navigate("/user");
    } else {
      navigate("/"); // Navegar a la página de inicio para "apagar" el CV
    }
  };

  return (
    <Button onClick={handleClick} className={`power-button ${isOn ? "on" : "off"}`}>
      <Power className="icon" />
      {isOn ? "Apagar" : "Encender"}
    </Button>
  );
}

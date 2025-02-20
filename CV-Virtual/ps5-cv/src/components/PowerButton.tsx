import React from "react";
import { motion } from "framer-motion";
import { MdPowerSettingsNew } from "react-icons/md";
import "./PowerButton.scss"; // Asegúrate de que esta ruta sea correcta

interface PowerButtonProps {
  isOn: boolean;
  togglePower: () => void;
}

const PowerButton: React.FC<PowerButtonProps> = ({ isOn, togglePower }) => {
  return (
    <motion.button
      className={`power-button ${isOn ? "on" : "off"}`}
      onClick={togglePower}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <MdPowerSettingsNew size={40} />
      <span>{isOn ? "Encendido" : "Apagado"}</span>
    </motion.button>
  );
};

export default PowerButton;

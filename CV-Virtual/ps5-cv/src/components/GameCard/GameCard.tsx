// src/components/GameCard/GameCard.tsx
import React from "react";
import "./GameCard.scss"; // Estilos de la tarjeta

interface GameCardProps {
  title: string;
  image: string;
  onClick: () => void;  // Función para manejar el clic
}

const GameCard: React.FC<GameCardProps> = ({ title, image, onClick }) => {
  return (
    <div className="game-card" onClick={onClick}>
      <div className="game-card-img">
        <img src={image} alt={title} />
      </div>
      <div className="game-card-title">{title}</div>
    </div>
  );
};

export default GameCard;

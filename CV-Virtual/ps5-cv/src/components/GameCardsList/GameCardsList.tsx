import React from 'react';
import './GameCardsList.scss'; // Asegúrate de tener este archivo

interface MenuItem {
  id: string;
  title: string;
  image: string;
}

interface GameCardsListProps {
  sections: MenuItem[];
  onCardClick: (id: string) => void;
}

const GameCardsList: React.FC<GameCardsListProps> = ({ sections, onCardClick }) => {
  return (
    <div className="game-cards-list">
      {sections.map((item) => (
        <div
          key={item.id}
          className="game-card"
          onClick={() => onCardClick(item.id)} // Al hacer clic, se llama a la función
        >
          <div className="game-card-img">
            <img src={item.image} alt={item.title} />
          </div>
          <div className="game-card-title">{item.title}</div>
        </div>
      ))}
    </div>
  );
};

export default GameCardsList;

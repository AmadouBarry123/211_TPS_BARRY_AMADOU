import React from 'react';
import Card from './Card';
import cards from '../assets/cards'; 

function CardList() {
  const cardElements = cards.map((card) => (
    <Card
      key={card.id}
      image={card.image}
      titre={card.titre}
      description={card.description}
    />
  ));

  return (
    <ul className="card-list">
      {cardElements} 
    </ul>
  );
}

export default CardList;

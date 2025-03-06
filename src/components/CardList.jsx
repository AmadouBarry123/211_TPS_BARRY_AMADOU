import React from 'react';
import Card from './Card';
import cards from '../assets/cards'; 
import ProfileSection from './ProfileSection';

function CardList() {
  const cardElements = cards.map((card) => (
    <Card
      key={card.id}
      image={card.image}
      titre={card.titre}
      description={card.description}
    />
  ));

  const cardCount = cards.length;


  return (
    <div>
      <ProfileSection cardCount={cardCount}/>
      <ul className="card-list">
        {cardElements} 
      </ul>
    </div>
  );
}

export default CardList;

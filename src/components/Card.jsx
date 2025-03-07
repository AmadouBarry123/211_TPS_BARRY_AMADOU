import React from 'react';
import '../css/Card.css';

const cardDescriptionStyle = {
    padding: '1em 0.5em',
    color: 'rgba(255, 255, 255, 0.759)',
  };

function Card(props) {
    
  return (
    <div className='card-list'>
        <div className="card">
        <img className="card-image" src={props.image} alt={props.titre} />
        <div className="card-description">
                <h2>{props.titre}</h2>
                <p>{props.description}</p>
            </div>
        </div>
    </div>
    
  );
}


export default Card;

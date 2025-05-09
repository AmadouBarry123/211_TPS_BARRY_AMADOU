import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
// import chillGuy from '../assets/chillguy2.webp';
import '../css/ProjetInfo.css';
import React from 'react';

function ProjetInfo({ image, titre, description, dateRealisation, technologies}) {
  return (

        <div className='projet-card' >
    <Card style={{ width: '18rem' }}>
      <Card.Body >

        <Card.Img variant="top" src={image} />

      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item> <strong> {titre} </strong></ListGroup.Item>
        <ListGroup.Item>{description}</ListGroup.Item>
        <ListGroup.Item> <strong> Technologies / Langages : </strong>{technologies}</ListGroup.Item>
        <ListGroup.Item> <strong>Date : </strong> {dateRealisation}</ListGroup.Item>
      </ListGroup>

    </Card>
    
        </div>
    
  );
}

export default ProjetInfo;
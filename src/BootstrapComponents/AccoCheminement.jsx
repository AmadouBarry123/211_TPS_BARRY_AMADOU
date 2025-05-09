import Accordion from 'react-bootstrap/Accordion';
import "../css/MainContent.css";


function AccoCheminement() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item  eventKey="0">
        <Accordion.Header> Cheminement scolaire et formations</Accordion.Header>
        <Accordion.Body>
        <ul>
          <li> Primaire à l'ecole Simone-Desjardins / Date :  </li>
        </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Emplois et stages</Accordion.Header>
        <Accordion.Body>

        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Activités parascolaires ou compétitions</Accordion.Header>
        <Accordion.Body>

        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default AccoCheminement;
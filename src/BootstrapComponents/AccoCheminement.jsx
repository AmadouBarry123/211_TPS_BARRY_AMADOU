import Accordion from 'react-bootstrap/Accordion';
import "../css/MainContent.css";

// https://react-bootstrap.netlify.app/docs/components/accordion/
function AccoCheminement() {
  // Affiche presentation personnelle
return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Cheminement scolaire et formations</Accordion.Header>
        <Accordion.Body>
          <ul>
            <li>Primaire à l'école Simone-Desjardins / Date : 2017 (fin)</li>
            <li>Secondaire à l'école secondaire Henri-Bourassa / Date : 2017 (début) – 2022 (fin)</li>
            <li>Cégep Marie-Victorin, Techniques de l'informatique / Date : 2022 (début) – En cours...</li>
            <li>
              Formation Médaille de bronze / Croix de bronze / Premiers soins généraux / Sauveteur national (Société de sauvetage du Québec) <br />
              Dates : 2015 (début) – 2024 (fin)
            </li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Emplois et stages</Accordion.Header>
        <Accordion.Body>
          <ul>
            <li>Associé au restaurant McDonald's / Date : 2017 (début) – 2020 (fin)</li>
            <li>Aide à domicile pour personne à mobilité réduite / Date : 2015 – En cours...</li>
            <li>Préparateur de commandes / Date : tout l'été 2024</li>
            <li>Associé Home Depot (saisonnier) / En cours...</li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Activités parascolaires ou compétitions</Accordion.Header>
        <Accordion.Body>
          <ul>
            <li>Karaté de 2011 à 2020</li>
            <li>Compétition de karaté à 3 reprises</li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
);
}

export default AccoCheminement;
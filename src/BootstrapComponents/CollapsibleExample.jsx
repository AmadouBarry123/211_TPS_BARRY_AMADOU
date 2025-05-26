import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
//https://react-bootstrap.netlify.app/docs/components/navbar/
//Navigation bar avec un bouton pour changer le mode sombre et clair

function CollapsibleExample() {
  const [darkMode, setDarkMode] = useState(false);

const toggleDarkMode = () => {
  setDarkMode(!darkMode);
  document.body.style.backgroundColor = darkMode ? 'white' : '#333333';
  document.body.style.color = darkMode ? 'black' : '#F5F5F5';
};

  return (
    <Navbar collapseOnSelect expand="lg" className={`bg-body-tertiary ${darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}>
      <Container>
        <Navbar.Brand href="#home">Mon ePortofolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#perso">Presentation personnelle</Nav.Link>
            <Nav.Link href="#profes">Presentation professionnelle</Nav.Link>
            <Nav.Link href="#info">Projets informatiques</Nav.Link>
            <NavDropdown title="Navigation" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Home Page</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"> Formulaire d'ajout de projets</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">API</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link eventKey={2} href="#">
              <button
                onClick={toggleDarkMode}
                style={{
                  border: 'none',
                  backgroundColor: darkMode ? '#333333' : 'rgb(248, 249, 250)',
                  color: darkMode ? '#F5F5F5' : 'black',
                  padding: '5px 10px',
                  borderRadius: '5px',
                  cursor: 'pointer',
                }}
              >
                {darkMode ? 'Mode clair' : 'Mode sombre'}
              </button>

            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // 🔁 Permet la navigation 
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function NavbarN() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    // Inverse letat du mode sombre
    setDarkMode(!darkMode);
    document.body.style.backgroundColor = darkMode ? 'white' : '#121212';
    document.body.style.color = darkMode ? 'black' : 'white';
  };

  return (
    
      <Navbar
        collapseOnSelect
        expand="lg"
        fixed="top"
        className={`bg-body-tertiary ${darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}
      >     


     <Container>
        {/* // Routeur pour ramener a la page d'accueil  */}
        <Navbar.Brand as={Link} to="/">Mon ePortofolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">

          <Nav className="me-auto">
            {/* // Defuker kes sectuibs de la page */}
            <Nav.Link href="#perso" className='test'>Présentation personnelle</Nav.Link>
            <Nav.Link href="#profes">Présentation professionnelle</Nav.Link>
            <Nav.Link href="#info">Projets informatiques</Nav.Link>

            {/* // DropDown pour aller sur les autres pages */}
            <NavDropdown title="Navigation" id="collapsible-nav-dropdown">
              <NavDropdown.Item as={Link} to="/">Home Page</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/ajout-projets">Formulaire d'ajout de projets</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/api-pokemon">API Pokemon</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/api-meteo">API Meteo</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link eventKey={2} href="#">
              {/* // Active ou desactive le mode sombre */}
              <button
                onClick={toggleDarkMode}
                style={{
                  border: 'none',
                  backgroundColor: darkMode ? '#121212' : 'rgb(248, 249, 250)',
                  color: darkMode ? 'white' : 'black',
                  padding: '5px 10px',
                  borderRadius: '5px',
                  cursor: 'pointer',
                }}
              >
                {darkMode ? 'Light Mode' : 'Dark Mode'}
              </button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarN;

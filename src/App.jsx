// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Routeur :)

import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/NavBar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import AjoutProjets from './pages/AjoutProjets'; 
import ApiMeteo from './pages/ApiMeteo';
import ApiPokemon from './pages/ApiPokemon'; // Importation de la page ApiPokemon

import projetsInitial from './assets/projet'; // j’importe les projets initiaux de la bd

function App() {
  // je garde tous mes projets ici (initial + ceux qu’on ajoute)
  const [projets, setProjets] = useState(projetsInitial);

  // fonction pour ajouter un nouveau projet
  const ajouterProjet = (projet) => {
    setProjets((prev) => [...prev, projet]); // ajoute à la liste
  };

  return (
    <Router>
      // Toujours dans le routeur
      <Header />
      // Contient mes pages différentes
      <Routes>
        // Quand l’url est / on affiche main content
        <Route path="/" element={<MainContent projets={projets} />} />
        // Quand l’url est /ajout-projets on affiche AjoutProjets
        <Route path="/ajout-projets" element={<AjoutProjets ajouterProjet={ajouterProjet} />} />
        // Quand l’url est /api-pokemon on affiche ApiPokemon
        <Route path="/api-pokemon" element={<ApiPokemon />} />
        // Quand l’url est /api-meteo on affiche ApiMeteo
        <Route path="/api-meteo" element={<ApiMeteo />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

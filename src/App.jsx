// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Routeur :)

import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/NavBar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import AjoutProjets from './pages/AjoutProjets'; 
import ApiMeteo from './pages/ApiMeteo';
function App() {
  return (
    <Router>
      // Toujours dans le routeur
      <Header />
      // Contient mes pages differentes
      <Routes>
        // Quand lurl est / on affiche main content
        <Route path="/" element={<MainContent />} />
        // Quand lurl est /ajout-projets on affiche AjoutProjets
        <Route path="/ajout-projets" element={<AjoutProjets />} />
        // Quand lurl est /api-meteo on affiche ApiMeteo
        <Route path="/api-meteo" element={<ApiMeteo/>} />
    
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

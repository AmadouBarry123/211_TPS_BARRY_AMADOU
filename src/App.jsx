// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/NavBar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import AjoutProjets from './pages/AjoutProjets'; 
import ApiPokemon from './pages/ApiPokemon';
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/ajout-projets" element={<AjoutProjets />} />
        <Route path="/api-pokemon" element={<ApiPokemon />} />
    
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

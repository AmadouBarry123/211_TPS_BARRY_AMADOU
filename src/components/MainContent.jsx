import "../css/MainContent.css";
import React from "react";
import chillGuy from '../assets/chillguy2.webp';
import AccoCheminement from '../BootstrapComponents/AccoCheminement';
import ProjetInfo from '../BootstrapComponents/ProjetInfo';
import projets from '../assets/projet.js';
import { useState } from "react";


function MainContent() {
  return (
    <div>
      <div className="presentationPerso">
        <h2 id="perso">Présentation personnelle</h2>

        <img src={chillGuy} alt="" />
        <p>
          Je me nomme Amadou Barry et je suis un étudiant 
          en informatique au collège Marie-Victorin.
        </p>

        <div className="traitsEtInterets">
          <div className="colonne">
            <h3 className="traitDeCaratere">Traits de caractère</h3>
            <ul>
              <li>Généreux</li>
              <li>Emphatique</li>
              <li>Méfiant</li>
              <li>Créatif</li>
              <li>Persévérant</li>
              <li>Curieux</li>
              <li>Persuasif</li>
            </ul>
          </div>

          <div className="colonne">
            <h3 className="interet">Centres d'intérêt</h3>
            <ul>
              <li>Informatique</li>
              <li>Jeux vidéo</li>
              <li>Manga</li>
              <li>Sport</li>
              <li>Dormir</li>
              <li>Musique</li>
              <li>Manger</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Présentation Professionnelle */}
      <div id="profes" className="presentationProfessionnelle">
        <h2>Présentation Professionnelle</h2>
      </div>
      
      <AccoCheminement />




      {/* Projet Informatique */}

      
      <div id="info" className="projetInformatique">
        <h2>Projets informatiques</h2>
        <p>
          Voici quelques projets informatiques que j'ai réalisés .
        </p>
        <div className="projet-container">

          {projets.map((projet) => (
            <ProjetInfo
              key={projet.id}
              image={projet.image}
              titre={projet.titre}
              description={projet.description}
              dateRealisation={projet.dateRealisation}
            />
          ))}
        </div>
        

      </div>
    </div>
  );
}

export default MainContent;

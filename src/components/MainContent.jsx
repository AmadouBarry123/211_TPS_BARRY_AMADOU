import "../css/MainContent.css";
import React from "react";
import chillGuy from '../assets/chillguy2.webp';

function MainContent() {
  return (
    <div className="presentationPerso">
      <h2>Présentation personnelle</h2>
      
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
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MainContent;

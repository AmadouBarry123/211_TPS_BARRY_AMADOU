import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
// Permet de faire des requetes HTTP facilement
import axios from 'axios';
import '../css/ApiMeteo.css';

function ApiMeteo() {
  const [cityName, setCityName] = useState('');
  // contient les donne que meteo va renvoyer
  const [donnees, setDonnees] = useState({
    name: '',
    temp: '',
    humidity: '',
    description: '',
    pressure: ''
  });

  // chaque fois que l'utilisateur change le nom de la ville, on met a jour le state cityName
  const handleInputChange = (event) => {
    setCityName(event.target.value);
  };

  // quand l'utilisateur appui, on empeche le rechargement de la page et on appelle fetchData
  const handleSubmit = (event) => {
    event.preventDefault();
    fetchData();
  };

  const keyApi = '59ffe86ffd5d575ae8aa25920624fe86';

  // envoie une requete a lAPI OpenWeather pour recuperer les donnees de la meteo
  const fetchData = async () => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&lang=fr&units=metric&appid=${keyApi}`);
      const weatherData = {
        // on recupere les donnees de la reponse
        name: response.data.name,
        temp: response.data.main.temp,
        humidity: response.data.main.humidity,
        description: response.data.weather[0].description,
        pressure: response.data.main.pressure
      };
      // on met a jour le state donnees avec les donnees de la meteo
      setDonnees(weatherData);
      // au cas ou si la ville nest pas trouvee
    } catch (error) {
      console.error('Error fetching weather data:', error);
      alert("nom de ville introuvable");
    }
  };

  return (

    // affiche la meteo
    <div className="meteo-box">
      <form onSubmit={handleSubmit} className="meteo-form">
        <input
          className="meteo-input"
          type="text"
          placeholder="Entrez le nom de la ville"
          value={cityName}
          onChange={handleInputChange}
        />
        <button className="meteo-btn" type="submit">Rechercher</button>
      </form>

      {donnees && donnees.name && (
        <div className="meteo-card">
          <div className="meteo-card-header">
            Ville : {donnees.name}
          </div>
          <ul className="meteo-list">
            <li>Température : {donnees.temp}°C</li>
            <li>Humidité : {donnees.humidity}%</li>
            <li>Pression : {donnees.pressure} hPa</li>
            <li>Description : {donnees.description}</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default ApiMeteo;
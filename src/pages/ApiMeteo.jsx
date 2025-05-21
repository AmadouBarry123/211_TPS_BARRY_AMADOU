import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import '../css/ApiMeteo.css';

function ApiMeteo() {
  const [cityName, setCityName] = useState('');
  const [donnees, setDonnees] = useState({
    name: localStorage.getItem('weatherNom'),
    temp: localStorage.getItem('weatherTemp'),
    humidity: localStorage.getItem('weatherHumidity'),
    description: localStorage.getItem('weatherDescription'),
    pressure: localStorage.getItem('weatherPressure')
  });

  const handleInputChange = (event) => {
    setCityName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchData();
  };

  const keyApi = '59ffe86ffd5d575ae8aa25920624fe86';

  const fetchData = async () => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&lang=fr&units=metric&appid=${keyApi}`)
      .then((response) => {
        const weatherData = {
          name: response.data.name,
          temp: response.data.main.temp,
          humidity: response.data.main.humidity,
          description: response.data.weather[0].description,
          pressure: response.data.main.pressure
        };
        setDonnees(weatherData);
        localStorage.setItem('weatherNom', weatherData.name);
        localStorage.setItem('weatherTemp', weatherData.temp.toString());
        localStorage.setItem('weatherHumidity', weatherData.humidity.toString());
        localStorage.setItem('weatherDescription', weatherData.description);
        localStorage.setItem('weatherPressure', weatherData.pressure.toString());
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
        alert("nom de ville introuvable");
      });
  };

  return (
    <div className="meteo-box">
      <form onSubmit={handleSubmit} className="meteo-form">
        <input
          className="meteo-input"
          type="text"
          placeholder="Entrez le nom de la ville"
          value={cityName}
          onChange={handleInputChange}
        />
        <button className="meteo-btn"  type="submit">Rechercher</button>
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
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/ApiPokemon.css';

function PokemonSimple() {
  const [liste, setListe] = useState([]);
  const [affiche, setAffiche] = useState([]);
  const [texteRecherche, setTexteRecherche] = useState('');
  const [indexPage, setIndexPage] = useState(0);
  const taillePage = 3;

  // On garde seulement les Pokémon de type starter
  const typesBase = ['fire', 'water', 'grass'];

  // Charger les pokémons
  useEffect(() => {
    const chargerPokemons = async () => {
      try {
        const reponse = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');
        const donnees = reponse.data.results;

        const details = await Promise.all(
          donnees.map(async (p) => {
            const detail = await axios.get(p.url);
            return {
              nom: p.name,
              image: detail.data.sprites.front_default,
              types: detail.data.types.map(t => t.type.name)
              
            };
          })
        );

        // On garde seulement les pokémons avec un type de base
        const filtres = details.filter(p =>
          p.types.some(t => typesBase.includes(t))
        );

        setListe(filtres);
        setAffiche(filtres);
      } catch (err) {
        console.log('Erreur API :', err);
      }
    };

    chargerPokemons();
  }, []);

  // Recherche
  useEffect(() => {
    const resultat = liste.filter(p =>
      p.nom.toLowerCase().includes(texteRecherche.toLowerCase())
    );
    setAffiche(resultat);
    setIndexPage(0);
  }, [texteRecherche, liste]);

  // Pagination
  const afficherPage = affiche.slice(indexPage, indexPage + taillePage);

  const suivant = () => {
    if (indexPage + taillePage < affiche.length) {
      setIndexPage(indexPage + taillePage);
    }
  };

  const precedent = () => {
    if (indexPage - taillePage >= 0) {
      setIndexPage(indexPage - taillePage);
    }
  };

  return (
    <div className="contenu-pokemon">
      <h2 className="titre">Mon Pokédex Starter</h2>

      <input
        type="text"
        placeholder="Nom du Pokémon..."
        value={texteRecherche}
        onChange={(e) => setTexteRecherche(e.target.value)}
        className="champ-recherche"
      />

      <div className="boutons-pages">
        <button onClick={precedent} disabled={indexPage === 0}>⬅ Précédent</button>
        <button onClick={suivant} disabled={indexPage + taillePage >= affiche.length}>Suivant ➡</button>
      </div>

      <div className="cartes-pokemon">
        {afficherPage.map((p, i) => (
          <div key={i} className="carte">
            <img src={p.image} alt={p.nom} />
            <h3>{p.nom}</h3>
            <p>Type : {p.types.join(', ')}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PokemonSimple;

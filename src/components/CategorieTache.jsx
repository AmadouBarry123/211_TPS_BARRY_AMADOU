import { useState } from 'react';
import '../css/CategorieTache.css'

function CategorieTache({ ajouterCategorie }) {
    const [nomCategorie, setNomCategorie] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        if (nomCategorie.trim() === "") return;
        ajouterCategorie(nomCategorie);
        setNomCategorie("");
    }

    return (
        <form className="ajouterCategorie" onSubmit={handleSubmit}>
            <input
                className="inputCategorie"
                type="text"
                placeholder="Catégorie de tâche"
                value={nomCategorie}
                onChange={(e) => setNomCategorie(e.target.value)}
            />
            <button className="boutonCategorie" type="submit">
                Ajouter la catégorie
            </button>
        </form>
    );
}

export default CategorieTache;

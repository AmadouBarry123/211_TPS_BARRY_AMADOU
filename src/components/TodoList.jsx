import '../css/TodoList.css'
import { useState } from 'react';
import Taches from "./Taches";


function TodoList(){
    const [tache , setTache] = useState("");
    const [taches , setTaches] = useState([]);
    const [compteurDeTache, setCompteurDeTache] = useState(1);

// status des taches
function statusTache(id){
    const nouvellesTaches = taches.map((ta) =>{
        if (ta.id === id){
            return { ...ta, status: !ta.status }
        }
        return ta;
    })

// Boutton Suprimer
function supprimerTache(id){
    // const nouvellesTaches = tach
    // setTaches(nouvellesTaches);
}


    
    setTaches(nouvellesTaches);
}

    function handleSubmit(e){
        e.preventDefault();

        if (tache.trim() === "") return;

        const nouvelleTache = {
            id : compteurDeTache,
            description: tache,
            status: true,
        };

        setTaches([...taches, nouvelleTache]);
        setTache("");
        setCompteurDeTache(compteurDeTache + 1);
    }

    return (
        <main>
            <label className='All' htmlFor="">
                <h1 className="MainTitle">Todo List</h1>

            </label>

            <form onSubmit={handleSubmit} className='formAjouter'>
                <div className='inputGroup'>
                    <input
                        className='inputTache'
                        type="text"
                        placeholder='Ajouter une nouvelle tache'
                        value={tache}
                        onChange={(e) => setTache(e.target.value)}
                    />
                    <button className='BonttonAjouter'>Ajouter</button>
                </div>
            </form>

            <ul className='listeTaches'>
                {taches.map((tacheItem) => (
                    <Taches key={tacheItem.id} tache={tacheItem} statusTache={statusTache}/>
                ))}
            </ul>
        </main>
    );
}

export default TodoList;

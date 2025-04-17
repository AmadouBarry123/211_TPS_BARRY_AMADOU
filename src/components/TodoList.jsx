import '../css/TodoList.css'
import { useState } from 'react';
import Taches from "./Taches";
import CategorieTache from './CategorieTache';

function TodoList(){
    const [tache , setTache] = useState("");
    const [taches , setTaches] = useState([]);
    const [compteurDeTache, setCompteurDeTache] = useState(1);

    // test
    // const [categories, setCategories] = useegorieSelectionnee] = useState(null);
    // const [compteurDeCategorie, setCompteurDeCategorie] = useState(1);
    
    // function ajouterCategorie(nomCategorie) {State([]);
    // const [categorieSelectionnee, setCat
    //     if (nomCategorie.trim() === "") return;
    
    //     const nouvelleCategorie = {
    //         id: compteurDeCategorie,
    //         nom: nomCategorie,
    //         taches: []
    //     };
    //     setCompteurDeCategorie(compteurDeCategorie + 1);
    //     setCategories([...categories, nouvelleCategorie]);
    // }

    // source https://github.com/Espadv69/Priority-ToDo-List/tree/main/src/components
    //  https://codesandbox.io/p/sandbox/priority-todo-list-je2esb?file=%2Fsrc%2Findex.js%3A15%2C25
    //  https://github.com/WebGuyAshis/Todo-List-React-Project2

    const [priorite , setPriorite] = useState(1)

    

// status des taches
function statusTache(id){
    const nouvellesTaches = taches.map((ta) =>{
        if (ta.id === id){
            return { ...ta, status: !ta.status }
        }
        return ta;
    }) 
    setTaches(nouvellesTaches);
}


    // Boutton Suprimer
    function supprimerTache(id){
        const nouvellesTaches = taches.filter((ta ) => ta.id !== id);
        setTaches(nouvellesTaches);
    }



    function handleSubmit(e){
        e.preventDefault();

        if (tache.trim() === "") return;

        const nouvelleTache = {
            id : compteurDeTache,
            description: tache,
            status: true,
            priorite: priorite,
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

                        <select
                        className='selectPriorite'
                        value={priorite}
                        onChange={(e) => setPriorite(parseInt(e.target.value))}
                        >
                        {[...Array(10)].map((_, i) => (
                            <option key={i + 1} value={i + 1}>Priorité {i + 1}</option>
                        ))}
                        </select>

                    <button className='BonttonAjouter'>Ajouter</button>
                    
                </div>
                {/* <CategorieTache/> */}
            </form>



            <ul className='listeTaches'>
                {taches .sort((a,b)=> b.priorite - a.priorite) .map((tacheItem) =>(
                    <Taches key={tacheItem.id} tache={tacheItem} statusTache={statusTache} supprimerTache={supprimerTache}/>
                ))}
            </ul>
        </main>
    );
}

export default TodoList;

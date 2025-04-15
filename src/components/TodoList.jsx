import '../css/TodoList.css'
import { useState } from 'react';

function TodoList(){
    const [tache , setTache] = useState("");
    const [taches , setTaches] = useState([]);

    function handleSubmit(e){
        e.preventDefault();
        setTaches([...taches, tache]);
        setTache("")
    }

    return (
            <main>
                <label className='All' htmlFor="">
                    <h1 className="MainTitle">Todo List</h1>
                    <div className='inputGroup'>
                        <form action="" onSubmit={handleSubmit}>
                            <input  className='inputTache' type="text" placeholder='Ajouter une nouvelle tache' 
                            value={tache}
                            onChange={(e) => setTache(e.target.value)}
                            />
                            <button className='BonttonAjouter'>Ajouter</button>
                        </form>
                        <ul className='listeTaches'>
                            {taches.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>

                    </div>
                </label>
            </main>
      );
}

export default TodoList
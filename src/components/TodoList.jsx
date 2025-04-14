import '../css/TodoList.css'

function TodoList(){
    return (
            <main>
                <label className='All' htmlFor="">
                    <h1 className="MainTitle">Todo List</h1>
                    <div className='inputGroup'>
                        <input className='inputTache' type="text" placeholder='Ajouter une nouvelle tache' />
                        <button className='BonttonAjouter'>Ajouter</button>
                    </div>
                </label>
            </main>
      );
}

export default TodoList
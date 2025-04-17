import '../css/Taches.css'
import { IoMdCheckboxOutline } from "react-icons/io";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";

function buttonClick(){
    console.log("test")
}

function Taches({ tache , statusTache , supprimerTache}) {
    return (
        <li className="tacheElem">
             {/* applique le css si status est flase  "(fait)"   true =  a faire donc pas de css appliquer             */}
            <span className={`tache ${!tache.status ? 'tacheFAITE' : ''}`}>{tache.description}</span>

            <div className='groupe'>
                <button onClick={() => statusTache(tache.id)} className='ButtonEtat'>{tache.status ? (<MdCheckBoxOutlineBlank  className='ButtonEtatTrue'/> ):( <IoMdCheckboxOutline className='ButtonEtatFalse'/>)}</button>
                <button className='darwinshPoubelle' onClick={()=> supprimerTache(tache.id)}><MdDeleteForever /> </button>
            </div>
        </li>
    );
}

export default Taches;

import '../css/Taches.css'
import { IoMdCheckboxOutline } from "react-icons/io";
import { MdCheckBoxOutlineBlank } from "react-icons/md";

function buttonClick(){
    console.log("test")
}

function Taches({ tache }) {
    return (
        <li className="tacheElem">
                            
            <span className='tache'>{tache.description} </span>
            <button onClick={buttonClick} className='ButtonEtat'>{tache.status ? <MdCheckBoxOutlineBlank  className='iconChek'/> : <IoMdCheckboxOutline />}</button>
        </li>
    );
}

export default Taches;

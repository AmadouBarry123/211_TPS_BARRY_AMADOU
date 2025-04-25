
import '../css/MainContent.css'
import React, { useState, useEffect, use } from 'react';
import { MdDelete } from "react-icons/md";
function MainContent(){

const [memes , setMemes] = useState([]);
const[blagueHaut, setBlagueHaut] = useState("")
const [blagueBas , setBlagueBas] = useState("")

// UseState pour changer le meme afficher
const [imageIndex, setImageIndex] = useState(Math.floor(Math.random() * 99 ))

useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then(res => res.json())
      .then(data => {
        setMemes(data.data.memes);
      })
}, []);


// https://www.w3schools.com/js/js_random.asp
function nouvelleImage(){
    setImageIndex(Math.floor(Math.random() * 99 ));
    console.log(imageIndex)
    // Chaque Appelle de fonction on va reset nos blagues
    // setBlagueHaut("");
    // setBlagueBas("");
}

function resetMemeTexte(){
    setBlagueHaut("");
    setBlagueBas("");
}



function handleBlagueHaut(event){
    setBlagueHaut(event.target.value)
}

function handleBlagueBas(event){
    setBlagueBas(event.target.value)
}

    return(
        <>  

            <div className=" inputButtons">
                <input className="texteDuHaut" type="text" placeholder="Texte Du Haut" value={blagueHaut}   onChange={handleBlagueHaut}/>
                <input className='texteDuBas' type="text" placeholder="Texte Du Bas" value={blagueBas} onChange={handleBlagueBas}/>
                <button className= "buttonImage" onClick={nouvelleImage} >Afficher un meme aleatoire</button>
                <button className='poubelle' onClick={resetMemeTexte}> <MdDelete /></button>
                {/* Verifie et sassur que meme ne soit pas vide */}
                <div className='memeContainer'>
                    {memes.length > 0 && (
                        <img className='memeGenerat' src={memes[imageIndex].url} />
                    )}
                    <h2 className='blagueHaut'>{blagueHaut}</h2>
                    <h2 className='blagueBas'>{blagueBas}</h2>
                </div>
            </div>

        </>
    )
}

export default MainContent
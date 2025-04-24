import '../css/MainContent.css'

function MainContent(){
    return(
        <>
            <div className=" inputButtons">
                <input className="texteDuHaut" type="text" placeholder="Texte Du Haut" />
                <input className='texteDuBas' type="text" placeholder="Texte Du Bas" />
                <button className='buttonImage'> Ajouter une nouvelle image</button>
            </div>

        </>
    )
}

export default MainContent
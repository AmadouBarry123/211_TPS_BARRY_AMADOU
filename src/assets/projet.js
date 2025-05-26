import chillGuy from './chillguy2.webp';
import animation from './deepProjetAnimation.png';
import game from './GameProject.png';
import art from './ProjetArtInfo.png';

const projets = [
    {
        id: 1,
        titre: "Animator Roblox",
        description: "Dans ce projet, j'ai créé un animateur pour Roblox qui permet de créer des animations personnalisées pour les personnages du jeu.",
        technologies: "Lua, Roblox Studio",
        dateRealisation: "2023",
        image: animation,
    },
    {
        id: 2,
        titre: "Jeu de plateforme",
        description: "Un jeu de plateforme en 2D où le joueur doit traverser des niveaux en sautant sur des plateformes et choisir la bonne réponse pour passer au niveau suivant.",
        technologies: "React, JavaScript, HTML, CSS, Chromecast, Firebase, PixiJS",
        dateRealisation: "2025",
        image: game,
    },
    {
        id: 3,
        titre: "Maison hantée",
        description: "À l'intérieur de cette maison, il y a un fantôme qui hante les lieux. Grâce à la communication dans un topic MQTT d'un Raspberry Pi, j'allume les fantômes à l'intérieur.",
        technologies: "Python, Raspberry Pi, MQTT",
        dateRealisation: "2023-01-18",
        image: art,
    },
];

export default projets;
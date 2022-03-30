export const homeObjOne = { //APROPOS
    id:'apropos',
    lightBg: true,
    lightText: false,
    lightTextDesc: true,
    topLine: 'A propos de moi...',
    headLine: `Je m'appelle Sandara,`,
    description: `Je suis à la recherche d'une première expérience 
    professionnelle afin d'acquérir professionalisme et compétences afin de devenir à terme développeur senior.`,
    buttonLabel: 'Get Started',
    imgStart: false,
    img: require('../../image/svg1.svg').default,
    alt: 'Car',
    dark: true,
    primary: true,
    darkText: true,
}

export const homeObjTwo = { //PARCOURS
    id:'parcours',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Mon parcours',
    headLine: 'Reconversion professionnelle',
    description: 
    `Ancien technicien électronique chez Alstom, j'ai effectué 
    ma reconversion professionnelle grâce au Bootcamp LaCapsule. J'ai choisi
    le code car il m'anène constammement à la réflexion, 
    créativité mais surtout la force de création qu'il offre.`,
    buttonLabel: 'Télécharger mon CV',
    imgStart: true,
    img: require('../../image/svg3.svg').default,
    alt: 'Car',
    dark: false,
    primary: true,
    darkText: false,
}

export const homeObjFour = { //COMPETENCES
    id:'competences',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Compétences',
    headLine: 'Je suis un Développeur Junior MERN',
    description: `J'ai choisi une formation qui m'a apprit les stacks suivantes :
    MongoDb - Express.js - React.js/Native - Node.js`,
    buttonLabel: 'MERN',
    imgStart: false,
    img: require('../../image/svg2.svg').default,
    alt: 'Job',
    dark: false,
    primary: true,
    darkText: true,
}

export const homeObjThree = { //PROJETS
    id:'projets',
    lightBg: false,
    lightText: true,
    lightTextDesc: false,
    topLine: 'projets',
    headLine: 'Voici quelques projets',
    description: `Pendant ma formation j'ai pu voir comment implémenter différents élements 
    pour élaborer une webapp complète : FrontEnd, BackEnd, bases de données, APIs, WebSockets etc, mais aussi 
    élaborer un projets de A à Z en créant les wireframes, UI KIT et Mockup User Stories, et de plus travailler en équipe avec des outils comme GitHub, Trello, Notion, GANTT...`,
    buttonLabel: 'Mon GitHub',
    imgStart: true,
    img: require('../../image/svg4.svg').default,
    alt: 'Job',
    dark: false,
    primary: true,
    darkText: false,
}

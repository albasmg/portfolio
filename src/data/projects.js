import serflixImg from '../assets/images/serflix.jpg';
import rickAndMortyImg from '../assets/images/rickandmorty.jpg';
import theATeamImg from '../assets/images/theateam.jpg';
import futuramasImg from '../assets/images/futuramas.jpg';

const PROJECTS_INFO = [
  {
    title: 'Serflix',
    description:
      'Serflix es una aplicación de búsqueda de series que, a través de la API de TV Maze, permite buscar series por su título y elaborar una lista de favoritos.',
    githubLink: 'https://github.com/albasmg/serflix',
    webLink: 'http://beta.adalab.es/modulo-2-evaluacion-final-albasmg/',
    img: serflixImg,
    skills: ['HTML', 'SASS', 'JS'],
  },
  {
    title: 'Rick and Morty character finder',
    description:
      'Buscador de los personajes de la serie Rick y Morty por nombre. Permite ordenar los resultados en orden alfabético y ver detalles de los personajes tales como si están vivos o el número de episodios en los que han aparecido.',
    githubLink: 'https://github.com/albasmg/Rick-and-Morty-character-finder',
    webLink: 'https://albasmg.github.io/Rick-and-Morty-character-finder/#/',
    img: rickAndMortyImg,
    skills: ['HTML', 'SASS', 'REACT'],
  },
  {
    title: 'El equipo A',
    description:
      'Landing page grupal en la que nos presentamos como equipo. Consta de una página inicial con la descripción del equipo, un detalle de cada una de nosotras y un formulario de contacto.',
    githubLink: 'https://github.com/Adalab/project-promo-j-module-1-team-1',
    webLink: 'http://beta.adalab.es/project-promo-j-module-1-team-1/index.html',
    img: theATeamImg,
    skills: ['HTML', 'CSS', 'SASS'],
  },
  {
    title: 'Awesome profile cards',
    description:
      'Creador de tarjetas virtuales. Permite crear la tarjeta personalizando tanto el contenido como el diseño y compartir después la tarjeta en Twitter.',
    githubLink:
      'https://github.com/Adalab/project-promo-j-module-2-team-3-morning',
    webLink: 'http://beta.adalab.es/project-promo-j-module-2-team-3-morning/',
    img: futuramasImg,
    skills: ['HTML', 'SASS', 'JS'],
  },
];

export default PROJECTS_INFO;

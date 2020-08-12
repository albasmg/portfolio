import React from 'react';
import Project from '../Project/Project';
import serflixImg from '../../assets/images/serflix.jpg';
import rickAndMortyImg from '../../assets/images/rickandmorty.jpg';
import theATeamImg from '../../assets/images/theateam.png';

const Projects = (props) => {
  return (
    <section className="projects">
      <div className="projects__container">
        <Project
          title="Serflix"
          description={
            'Serflix es una aplicación de búsqueda de series que, a través de la API de TV Maze, permite buscar series por su título y elaborar una lista de favoritos.'
          }
          githubLink="https://github.com/Adalab/modulo-2-evaluacion-final-albasmg"
          webLink="http://beta.adalab.es/modulo-2-evaluacion-final-albasmg/"
          img={serflixImg}
          skills={['HTML', 'SASS', 'JS']}
        />
        <Project
          title="Rick and Morty character finder"
          description={
            'Se trata de un buscador de los personajes de la serie Rick y Morty por nombre. Permite ordenar los resultados en orden alfabético y ver los detalle de los personajes tales como si están vivos, de dónde proceden o el número de episodios en los que han aparecido.'
          }
          githubLink="https://github.com/Adalab/modulo-3-evaluacion-final-albasmg"
          webLink="http://beta.adalab.es/modulo-3-evaluacion-final-albasmg/"
          img={rickAndMortyImg}
          skills={['HTML', 'SASS', 'REACT']}
        />
      </div>
    </section>
  );
};

export default Projects;

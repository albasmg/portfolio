import React from 'react';
import Project from '../Project/Project';
import serflixImg from '../../assets/images/serflix.png';
import theATeamImg from '../../assets/images/theateam.png';

const Projects = (props) => {
  return (
    <section className="projects">
      <h1 className="projects__heading">Proyectos</h1>
      <div className="projects__container">
        <Project
          img={serflixImg}
          title="Serflix"
          skills={['HTML', 'SASS', 'JS']}
        />
        <Project
          img={theATeamImg}
          title="The A Team landing page"
          skills={['HTML', 'SASS']}
        />
        <Project
          img={serflixImg}
          title="Serflix"
          skills={['HTML', 'SASS', 'JS']}
        />
        <Project
          img={serflixImg}
          title="Serflix"
          skills={['HTML', 'SASS', 'JS']}
        />
        <Project
          img={serflixImg}
          title="Serflix"
          skills={['HTML', 'SASS', 'JS']}
        />
        <Project
          img={serflixImg}
          title="Serflix"
          skills={['HTML', 'SASS', 'JS']}
        />
      </div>
    </section>
  );
};

export default Projects;

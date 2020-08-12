import React from 'react';
import Project from '../Project/Project';
import serflixImg from '../../assets/images/serflix.png';
import theATeamImg from '../../assets/images/theateam.png';

const Projects = (props) => {
  return (
    <section className="projects">
      <div className="projects__container">
        <Project
          title="Serflix"
          description={
            'Serflix es un buscador bfsdfijhskdahfkjdsahfjkdhsfjkdhfsd fsdhfjksdhfjsdhfhsd f dshfsfjhskah'
          }
          skills={['HTML', 'SASS', 'JS']}
        />
        <Project title="The A Team landing page" skills={['HTML', 'SASS']} />
      </div>
    </section>
  );
};

export default Projects;

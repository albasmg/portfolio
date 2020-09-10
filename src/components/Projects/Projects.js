import React from 'react';
import Project from '../Project/Project';

const Projects = ({ data }) => {
  return (
    <section className="projects" id="projects">
      <h2 className="projects__heading">Mis proyectos</h2>
      <div className="projects__container">
        {data.map(
          ({ title, description, githubLink, webLink, img, skills }) => (
            <Project
              title={title}
              description={description}
              githubLink={githubLink}
              webLink={webLink}
              img={img}
              skills={skills}
            />
          )
        )}
      </div>
    </section>
  );
};

export default Projects;

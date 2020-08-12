import React from 'react';
import Badge from '../Badge/Badge';
import github from '../../assets/icons/github.png';
import web from '../../assets/icons/web.png';

const Project = (props) => {
  return (
    <article className="project">
      <div className="project__imgContainer"></div>
      <div className="project__info">
        <div className="project__hiddenInfo">
          <p className="project__description">{props.description}</p>
          <div className="project__icons">
            <a
              href={props.githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={github}
                className="project__icon"
                alt="github link"
              ></img>
            </a>
            <a href={props.webLink} target="_blank" rel="noopener noreferrer">
              <img src={web} className="project__icon" alt="web link"></img>
            </a>
          </div>
        </div>
        <h2 className="project__title">{props.title}</h2>
        <div className="project__skills">
          {props.skills.map((skill) => (
            <Badge key={skill} title={skill} />
          ))}
        </div>
      </div>
    </article>
  );
};

export default Project;

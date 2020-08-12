import React from 'react';
import Badge from '../Badge/Badge';
import github from '../../assets/icons/github.png';
import web from '../../assets/icons/web.png';

const Project = (props) => {
  return (
    <article>
      <div className="project">
        <div className="project__imgContainer"></div>
        <div class="project__info">
          <h2 className="project__title">{props.title}</h2>
          <p className="project__description">{props.description}</p>
          <div className="project__icons">
            <a>
              <img src={github} className="project__icon"></img>
            </a>
            <a>
              <img src={web} className="project__icon"></img>
            </a>
          </div>
          <div className="project__skills">
            {props.skills.map((skill) => (
              <Badge key={skill} title={skill} />
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};

export default Project;

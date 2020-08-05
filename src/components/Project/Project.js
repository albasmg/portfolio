import React from 'react';
import './project.scss';

const Project = (props) => {
  return (
    <article>
      <div className="project">
        <img src={props.img} className="project__img"></img>
        <h2 className="project__title">{props.title}</h2>
        <p className="project__description">{props.description}</p>
        <div className="project__labels"></div>
      </div>
    </article>
  );
};

export default Project;

import React from 'react';
import Badge from '../Badge/Badge';

const Project = (props) => {
  console.log(props);

  const handleHover = () => {
    console.log('hola');
  };

  return (
    <article>
      <div className="project" onMouseEnter={handleHover()}>
        <div className="project__imgContainer">
          <img src={props.img} className="project__img" alt={props.alt}></img>
        </div>
        <h2 className="project__title">{props.title}</h2>
        <p className="project__description">{props.description}</p>
        <div className="project__skills">
          {props.skills.map((skill) => (
            <Badge title={skill} />
          ))}
        </div>
      </div>
    </article>
  );
};

export default Project;

import React from 'react';
import Link from '../Link/Link';
import profilePhoto from '../../assets/images/profilephoto.png';

const AboutMe = () => {
  return (
    <section className="aboutMe" id="aboutMe">
      <section>
        <div class="skewed-about"></div>
      </section>
      <div className="aboutMe__mainInfo">
        <div className="aboutMe__imgContainer">
          <img src={profilePhoto} alt="Alba" className="aboutMe__img"></img>
        </div>
        <div className="aboutMe__textContainer">
          <h1>¡Hola! 👋🏻 </h1>
          <p className="aboutMe__text">
            Mi nombre es <span>Alba</span>. Siempre me han apasionado las
            tecnologías y el mundo digital. Fue durante un bootcamp de{' '}
            <span>diseño UX/UI </span>cuando me picó la curiosidad de saber cómo
            aquellas apps que estaba diseñando podrían construirse para ser
            funcionales. Así descubrí el <span>desarrollo Front End</span> y
            <span> Adalab</span>, donde me he formado para poder aportar mi
            creatividad y motivación en el proceso de desarrollo.
          </p>
        </div>
      </div>
      <div className="aboutMe__skills">
        <div>
          <h3>Herramientas técnicas</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>SASS</li>
            <li>JavaScript </li>
            <li>React</li>
            <li>Git</li>
          </ul>
        </div>
        <div>
          <h3>Habilidades personales</h3>
          <ul>
            <li>Trabajo en equipo</li>
            <li>Aprendizaje continuo</li>
            <li>Creatividad</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

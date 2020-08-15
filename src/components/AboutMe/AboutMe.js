import React from 'react';
import Link from '../Link/Link';
import profilePhoto from '../../assets/images/profilephoto.png';

const AboutMe = () => {
  return (
    <section className="aboutMe">
      <section>
        <div class="skewed-about"></div>
      </section>
      <div className="aboutMe__imgContainer">
        <img src={profilePhoto} alt="Alba" className="aboutMe__img"></img>
      </div>
      <div className="aboutMe__textContainer">
        <h1>¡Hola! </h1>
        <p className="aboutMe__text">
          Mi nombre es Alba. Siempre me han apasionado las tecnologías y el
          mundo digital. Fue durante un bootcamp de diseño UX/UI cuando me picó
          la curiosidad de saber cómo aquellas apps que estaba diseñando podrían
          construirse para ser funcionales. Así descubrí el desarrollo Front End
          y Adalab, donde me he formado para poder aportar mi creatividad y
          motivación en el proceso de desarrollo.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;

import React, { useState, useEffect } from 'react';
import Link from '../Link/Link';

const likes = ['el diseño', 'resolver problemas', 'aprender cosas nuevas'];

const Hero = (props) => {
  const [likesIndex, setLikesIndex] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setLikesIndex((likesIndex) => (likesIndex === 2 ? 0 : likesIndex + 1));
    }, 1500);
    //TODO: limpiar intervalo cuando se cambie de página
  }, []);

  return (
    <section className="hero">
      <h1 className="hero__heading">
        ¡Hola! Soy Alba y soy
        <span className="hero__position">Junior Front End developer</span>
      </h1>
      <h2 className="hero__carousel">
        y me gusta
        <span className="hero__likes"> {likes[likesIndex]}</span>
      </h2>
      <ul className="hero__linksContainer">
        <li className="hero__link">
          <Link name="CV" link="" />
        </li>
        <li className="hero__link">
          <Link
            name="GitHub"
            link="https://github.com/albasmg"
            extraClass="hero__socialNetwork"
          />
        </li>
        <li className="hero__link">
          <Link
            name="Linkedin"
            link="https://www.linkedin.com/in/albasanmartingarcia/"
            extraClass="hero__socialNetwork"
          />
        </li>
        <li className="hero__link">
          <Link
            name="Twitter"
            link="https://twitter.com/albsmg"
            extraClass="hero__socialNetwork"
          />
        </li>
      </ul>
    </section>
  );
};

export default Hero;

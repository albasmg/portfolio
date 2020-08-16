import React, { useState, useEffect } from 'react';
import Links from '../Links/Links';
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
        ¡Hola! Soy Alba, soy
        <span className="hero__position">Junior Front End developer</span>
      </h1>
      <h2 className="hero__carousel">
        y me gusta
        <span className="hero__likes"> {likes[likesIndex]}</span>
      </h2>
      <section>
        <div className="skewed"></div>
      </section>
      <Links />
    </section>
  );
};

export default Hero;

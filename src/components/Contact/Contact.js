import React from 'react';
import Links from '../Links/Links';

const Contact = () => {
  return (
    <section className="contact">
      <h2 className="contact__heading">¿Hablamos?</h2>
      <p className="contact__text">
        Estoy siempre abierta a aprender y, además... ¡Buscando mi primera
        oportunidad como desarrolladora Front End! Si crees que mi perfil
        profesional encaja con lo que buscas, quieres darme feedback sobre mis
        proyectos o simplemente quieres charlar, ¡no dudes en contactarme! ☕️
      </p>
      <div className="contact__linkContainer">
        <a
          href="mailto:alba.sanmartin.g@gmail.com"
          rel="noopener noreferrer"
          target="_blank"
          className="contact__mailLink"
        >
          {' '}
          alba.sanmartin.g@gmail.com
        </a>
      </div>
      <Links />
    </section>
  );
};

export default Contact;

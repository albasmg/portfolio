import React from 'react';
import Links from '../Links/Links';

const Contact = () => {
  return (
    <section className="contact">
      <h2 className="contact__heading">¿Hablamos?</h2>
      <p className="contact__text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et ornare
        elit. Fusce bibendum mi vel magna eleifend, quis commodo arcu tempus.
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

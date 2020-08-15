import React from 'react';
import Link from '../Link/Link';

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
      <ul className="hero__linksContainer">
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

export default Contact;

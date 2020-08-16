import React from 'react';
import Link from '../Link/Link';
import cv from '../../assets/documents/CV-AlbaSanMartín.pdf';

const Links = () => {
  return (
    <ul className="links">
      <li className="links__link">
        <Link name="CV" link={cv} download />
      </li>
      <li className="links__link">
        <Link
          name="GitHub"
          link="https://github.com/albasmg"
          extraClass="hero__socialNetwork"
        />
      </li>
      <li className="links__link">
        <Link
          name="Linkedin"
          link="https://www.linkedin.com/in/albasanmartingarcia/"
          extraClass="hero__socialNetwork"
        />
      </li>
      <li className="links__link">
        <Link
          name="Twitter"
          link="https://twitter.com/albsmg"
          extraClass="hero__socialNetwork"
        />
      </li>
    </ul>
  );
};

export default Links;

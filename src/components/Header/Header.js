import React from 'react';
import { HashLink } from 'react-router-hash-link';
import Link from '../Link/Link';

const Header = () => {
  return (
    <header className="header">
      <ul className="header__menu">
        <li className="header__menuElement">
          <HashLink to="#projects" className="header__nav">
            Proyectos
          </HashLink>
        </li>
        <li className="header__menuElement">
          <HashLink to="#aboutMe" className="header__nav">
            Sobre mi
          </HashLink>
        </li>
        <li className="header__menuElement">
          <HashLink to="#aboutMe" className="header__nav">
            Contacto
          </HashLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;

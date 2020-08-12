import React from 'react';
import Link from '../Link/Link';

const Header = (props) => {
  return (
    <header className="header">
      <ul className="header__menu">
        <li className="header__menuElement">
          <Link name="Proyectos"></Link>
        </li>
        <li className="header__menuElement">
          <Link name="Sobre mi" />
        </li>
        <li className="header__menuElement">
          <Link name="Contacto" />
        </li>
      </ul>
    </header>
  );
};

export default Header;

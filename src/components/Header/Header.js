import React from 'react';
import './header.scss';

const Header = (props) => {
  return (
    <header className="header">
      <ul className="header__menu">
        <li className="header__menuElement">Proyectos</li>
        <li className="header__menuElement">Sobre mi</li>
        <li className="header__menuElement">Contacto</li>
      </ul>
    </header>
  );
};

export default Header;

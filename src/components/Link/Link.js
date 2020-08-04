import React from 'react';
import '../Link/link.scss';

const Link = ({ link, name, extraClass }) => {
  console.log(extraClass);
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`link ${extraClass}`}
    >
      {name}
    </a>
  );
};

Link.defaultProps = {
  extraClass: '',
};

export default Link;

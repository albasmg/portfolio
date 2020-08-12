import React from 'react';

const Link = ({ link, name, extraClass }) => {
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

import React from 'react';

const Badge = ({ title }) => {
  return (
    <div className="badge">
      <p className="badge__type">{title}</p>
    </div>
  );
};

export default Badge;

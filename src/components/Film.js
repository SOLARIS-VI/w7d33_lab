import React from 'react';

const Film = ({ title, url }) => {
  return (
    <li className="film-list-item">
      <a href={url} className="film-title">
        {title}
      </a>
    </li>
  );
};

export default Film;

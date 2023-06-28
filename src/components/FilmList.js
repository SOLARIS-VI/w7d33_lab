import React from 'react';
import Film from './Film';

const FilmList = ({ films }) => {
  const filmNodes = films.map((film) => (
    <Film title={film.name} key={film.id} url={film.url} />
  ));

  return (
    <div>
      <p>Upcoming Film Releases for UK</p>
      <ul className="film-list">{filmNodes}</ul>
      <a href="https://www.imdb.com/calendar/?region=gb">
        <input
          type="button"
          value="VIEW MORE UPCOMING RELEASES >>"
          className="view-more-button"
        />
      </a>
    </div>
  );
};

export default FilmList;

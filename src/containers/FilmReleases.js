import React from 'react';
import Film from '../components/Film';

const FilmReleases = () => {
  const films = [
    {
      id: 1,
      name: 'Spider-Man: Into the Spider-Verse',
      url: 'https://www.imdb.com/title/tt4633694/?ref_=rlm',
    },
    {
      id: 2,
      name: 'Life Itself',
      url: 'https://www.imdb.com/title/tt5989218/?ref_=rlm',
    },
    {
      id: 3,
      name: 'Mary Queen of Scots',
      url: 'https://www.imdb.com/title/tt2328900/?ref_=rlm',
    },
    {
      id: 4,
      name: 'The Lego Movie 2: The Second Part',
      url: 'https://www.imdb.com/title/tt3513498/?ref_=rlm',
    },
    {
      id: 5,
      name: 'Captain Marvel',
      url: 'https://www.imdb.com/title/tt4154664/?ref_=rlm',
    },
  ];

  return (
    <div>
      <p className="film-releases-title">Upcoming Film Releases for UK</p>
      <ul className="film-list">
        {films.map((film) => (
          <Film title={film.name} key={film.id} url={film.url} />
        ))}
      </ul>
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

export default FilmReleases;

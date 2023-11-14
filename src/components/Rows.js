import React, { useEffect, useState } from 'react';
import './Row.css';
import axios from '../axios';
import movieTrailer from 'movie-trailer';
import Modal from './Modal';

const baseUrl = 'https://image.tmdb.org/t/p/original/';

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState('');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl('');
    } else {
      movieTrailer(movie?.name || '')
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get('v'));
          setShowModal(true);
        })
        .catch((error) => console.log(error));
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setTrailerUrl('');
  };

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {movies?.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
            src={`${baseUrl}${isLargeRow ? movie?.poster_path : movie?.backdrop_path}`}
            alt={movie.name}
          />
        ))}
      </div>

      {showModal && <Modal trailerUrl={trailerUrl} onClose={closeModal} />}
    </div>
  );
}

export default Row;

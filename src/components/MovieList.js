import React from 'react';

import './MovieList.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const MovieList = (props) => {
  return (
    <>
      {props.movies.map((movie, index) => (
        <div key={index}
          className='image-container d-flex justify-content-start m-3'>
          <img src={movie.Poster} alt='movie'></img>
          <div className="overlay d-flex align-items-center justify-content-center"></div>
        </div>
      ))}
    </>
  );
}

export default MovieList;
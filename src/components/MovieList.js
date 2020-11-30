import React from 'react';

const MovieList = (props) => {
  return (
    <>
      {props.movies.map((movie, index) => (
        <div key={index}
          className='col image-container d-flex justify-content-start m-5'>
          <img src={movie.Poster} alt='movie'></img>
        </div>
      ))}
    </>
  );
}

export default MovieList;
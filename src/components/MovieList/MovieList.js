import React from 'react';

import './MovieList.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const MovieList = (props) => {
  const ManageFavouritesComponent = props.manageFavouritesComponent;

  if (props.movies) {
     return (
       <>
         {props.movies.map((movie, index) => (
           <div key={index} className='image-container d-flex justify-content-start m-3'>
             <img src={movie.Poster} alt='movie'></img>
             <div onClick={() => props.handleFavouritesClick(movie)} className='overlay d-flex align-items-center justify-content-center'>
               <ManageFavouritesComponent action={props.action}></ManageFavouritesComponent>
             </div>
           </div>
         ))}
       </>
     );
  } else {
    return (<h3>No hay peliculas</h3>);
  }
 
}

export default MovieList;
import { useState, useEffect } from 'react';

import MovieList from './components/MovieList/MovieList';
import MovieListHeading from './components/MovieListHeading/MovieListHeading';
import SearchBox from './components/SearchBox/SearchBox';
import ManageFavourites from './components/ManageFavourites/ManageFavourites';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [favourites, setFavourites] = useState([]);

  const getMovieRequest = async (film) => {
    const url = `http://www.omdbapi.com/?s=${film}&apikey=170ec4c5`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
      
    }
  };

  const saveToLocalStorage = (items) => {
    localStorage.setItem('react-movie-app-favourites', JSON.stringify(items))
  }
  
  const addFavouriteMovie = (movie) => {
    try {
      console.log(movie)
      console.log('favourites: ', favourites);
      const newFavouriteList = [...favourites, movie];
      console.log('newFavouriteList: ', newFavouriteList);
      setFavourites(newFavouriteList);
      saveToLocalStorage(newFavouriteList);
     } catch (err) {
      console.log(err)
    }
   
    
  }

  const removeFavouriteMovie = (movie) => {
    const newFavouriteList = favourites.filter((favouriteMovie) => favouriteMovie.imdbID !== movie.imdbID);
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };

  useEffect(() => {
    getMovieRequest(searchValue)
  }, [searchValue]);
  
  useEffect(() => {
    const movieFavourites = JSON.parse(localStorage.getItem('react-movie-app-favourites'));
    console.log('movieFavourites: ', movieFavourites);

    setFavourites(movieFavourites)
  }, []);

  return (
    <div className='container-fluid movie-app'>
      <div className='row d-flex align-items-center my-4'>
        <MovieListHeading heading='Movies'></MovieListHeading>
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}></SearchBox>
      </div>
      <div className='row'>
        <MovieList movies={movies} handleFavouritesClick={addFavouriteMovie} manageFavouritesComponent={ManageFavourites} action='add'></MovieList>
      </div>
      <div className='row d-flex align-items-center my-4'>
        <MovieListHeading heading='Favourites'></MovieListHeading>
      </div>
      <div className='row'>
        <MovieList movies={favourites} handleFavouritesClick={removeFavouriteMovie} manageFavouritesComponent={ManageFavourites} action='remove'></MovieList>
      </div>
    </div>
  );
}

export default App;

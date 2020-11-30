import { useState, useEffect } from 'react';
import MovieList from './components/MovieList';

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('')

  const getMovieRequest = async (film) => {
    const url = `http://www.omdbapi.com/?s=${film}&apikey=170ec4c5`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
      
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue)
  },[searchValue]);

  return (
    <div className='container-fluid movie-app'>
      <div className='row d-flex align-items-center my-4'>
        <MovieListHeading heading='Ramon'></MovieListHeading>
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}></SearchBox>
      </div>
      <div className='row'>
        <MovieList movies={movies}></MovieList>
      </div>
    </div>
  );
}

export default App;

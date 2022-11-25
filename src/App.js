import React from 'react';
import './App.css';
import {useEffect, useState} from 'react';
// import MovieCard from './components/MovieCard';
import Login from './components/Login';

const API_URL = process.env.REACT_APP_API_URL;


function App() {

  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);

  const [user, setUser] = useState();

const searchMovies = async (title) => {
  const response = await fetch(`${API_URL}&s=${title}`);
  const data = await response.json();
  setMovies(data.Search);
  // console.log(data);
}

useEffect(() => {

  // searchMovies("Batman");
}, []);


  return (
    <div className="App">
      <Login setter={setUser}/>
      {user ? 
      <h1>Welcome {user}</h1> 
      : 
      <h1>Please Login</h1>}
      {/* <h1>My Movies App</h1>

      <div>
        <input type="text" placeholder="Search for a movie" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <button type="button" onClick={() => searchMovies(searchTerm)}>Search</button>
      </div>

      <div className="movies">
      { movies?.length > 0
          ? (
          <div className='container'>
            {movies.map((movie) => (
              <MovieCard key={movie.imdbID} movie={movie} />
        ))}
        </div>
        ) : (
          <h2>No movies found</h2>
        )}



      </div> */}
    </div>
  );
}

export default App;

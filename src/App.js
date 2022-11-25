import React from 'react';
import './App.css';
import {useEffect, useState} from 'react';
// import MovieCard from './components/MovieCard';
import Login from './components/Login';
import Register from './components/Register';

const API_URL = process.env.REACT_APP_API_URL;


function App() {

  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);
  const [register, setRegister] = useState(false);

  const [user, setUser] = useState();

const searchMovies = async (title) => {
  const response = await fetch(`${API_URL}&s=${title}`);
  const data = await response.json();
  setMovies(data.Search);
  // console.log(data);
}

const handleRegisterBtn = () => {
  if (register) {
    setRegister(false);
  } else {
    setRegister(true);
  }
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
      <button onClick={() => {handleRegisterBtn()}}>Register</button>
      {register ? <Register setter={setUser}/>
       : 
       null
       }
      
      {/* <Register setter={setUser}/> */}
      {/* conditional renders when logged in */}
        {/* if specific user return all users from database and display in table */}
        {/* if specific user allow creation of records and deletion of records  */}

        {/* create change password conditional render with 2 inputs to compare the 2 passwords  */}

        {/* create delete own user button that deletes does another password check and deletes user */}

        {/* create a button to add a movie to the database */}

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

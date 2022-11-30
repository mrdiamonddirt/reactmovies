import React from "react";
import "./App.css";
import { useEffect, useState } from "react";
// import MovieCard from './components/MovieCard';
import Login from "./components/Login";
import Register from "./components/Register";
import DeleteUser from "./components/DeleteUser";
import UpdateUser from "./components/UpdateUser";
import MovieCard from "./components/MovieCard";
import AllUsers from "./components/AllUsers";
import { writeCookie } from "./common";
import { getCookie } from "./common";
import { findUser } from "./utils";

const API_URL = process.env.REACT_APP_API_URL;

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [register, setRegister] = useState(false);
  const [updatingUser, setUpdatingUser] = useState(false);
  const [gettingAllUsers, setGettingAllUsers] = useState(false);

  const [user, setUser] = useState();
  const [users, setUsers] = useState();

  console.log("users is:", users);
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
    // console.log(data);
  };

  const handleRegisterBtn = () => {
    if (register) {
      setRegister(false);
    } else {
      setRegister(true);
    }
  };

  const handleUpdateBtn = () => {
    if (updatingUser) {
      setUpdatingUser(false);
    } else {
      setUpdatingUser(true);
    }
  };

  useEffect(() => {
    let cookie = getCookie("jwt_token");
    if (cookie !== false) {
      loginWithToken(cookie);
    }
    // searchMovies("Batman");
  }, []);

  const loginWithToken = async (cookie) => {
    const user = await findUser(cookie);
    setUser(user);
  };

  return (
    <div className="App">
      {user ? (
        <>
          <h1>Welcome {user}</h1>
          <button onClick={handleUpdateBtn}>Update User Info</button>
          {updatingUser ? (
            <>
              <UpdateUser user={user} />
              <DeleteUser user={user} />
            </>
          ) : null}
          <button onClick={() => setGettingAllUsers(!gettingAllUsers)}>
            Show / Hide All users Btn
          </button>
          {/* <UpdateUser user={user} /> */}
        </>
      ) : (
        <>
          <h1>Please Login</h1>
          <Login setter={setUser} />
        </>
      )}
      <button
        onClick={() => {
          handleRegisterBtn();
        }}
      >
        Register
      </button>
      {register ? <Register setter={setUser} /> : null}
      {gettingAllUsers ? <AllUsers setter={setUsers} /> : null}

      {/* <AllUsers setter={setUsers} /> */}

      {/* conditional renders when logged in */}
      {/* if specific user return all users from database and display in table */}
      {/* if specific user allow creation of records and deletion of records  */}

      {/* create change password conditional render with 2 inputs to compare the 2 passwords  */}

      {/* create delete own user button that deletes does another password check and deletes user */}

      {/* create a button to add a movie to the database */}
      {user ? (
        <>
          <h1>My Movies App</h1>

          <div>
            <input
              type="text"
              placeholder="Search for a movie"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="button" onClick={() => searchMovies(searchTerm)}>
              Search
            </button>
          </div>

          <div className="movies">
            {movies?.length > 0 ? (
              <div className="container">
                {movies.map((movie) => (
                  <MovieCard key={movie.imdbID} movie={movie} />
                ))}
              </div>
            ) : (
              <h2>No movies found</h2>
            )}
          </div>
        </>
      ) : null}
    </div>
  );
}

export default App;

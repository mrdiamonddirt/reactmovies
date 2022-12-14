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

// const socket = io();

function App() {
    const [searchTerm, setSearchTerm] = useState("");
    const [movies, setMovies] = useState([]);
    const [register, setRegister] = useState(false);
    const [updatingUser, setUpdatingUser] = useState(false);
    const [gettingAllUsers, setGettingAllUsers] = useState(false);
    const [loggingIn, setLoggingIn] = useState(false);

    const [user, setUser] = useState();
    const [users, setUsers] = useState();

    // console.log("users is:", users);
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

    const handleLoggingInBtn = () => {
        if (loggingIn) {
            setLoggingIn(false);
        } else {
            setLoggingIn(true);
        }
    };

    const handleLogout = () => {
        writeCookie("jwt_token", "", -1);
        setUser(null);
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
                    <button className={"buttonClass"} onClick={handleUpdateBtn}>
                        Update User Info
                    </button>
                    {updatingUser ? (
                        <>
                            <p>Update User Info Here:</p>
                            <UpdateUser user={user} />
                            <DeleteUser user={user} />
                        </>
                    ) : null}
                    <button
                        className={"buttonClass"}
                        onClick={() => setGettingAllUsers(!gettingAllUsers)}
                    >
                        Show / Hide All users Btn
                    </button>
                    <button className={"buttonClass"} onClick={handleLogout}>
                        Logout
                    </button>
                    {/* <UpdateUser user={user} /> */}
                </>
            ) : (
                <>
                    <h1>Please Login</h1>
                    <button
                        className={"buttonClass"}
                        onClick={handleLoggingInBtn}
                    >
                        Login
                    </button>
                    {loggingIn ? <Login setter={setUser} /> : null}
                    <button
                        className={"buttonClass"}
                        onClick={() => {
                            handleRegisterBtn();
                        }}
                    >
                        Register
                    </button>
                    {register ? <Register setter={setUser} /> : null}
                    <p>
                        Welcome to my react movies app, feel free to Register
                        for an Account,
                        <br />
                        And then Login to see the rest of the site.
                        <br />
                        The site is under constant development, and only servers
                        as a portfolio/project for me to show off my skills.
                    </p>
                </>
            )}
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
                        <button
                            className={"buttonClass"}
                            type="button"
                            onClick={() => searchMovies(searchTerm)}
                        >
                            Search
                        </button>
                    </div>

                    <div className="movies">
                        {movies?.length > 0 ? (
                            <div className="container">
                                {movies.map((movie) => (
                                    <MovieCard
                                        key={movie.imdbID}
                                        movie={movie}
                                    />
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

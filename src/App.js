import React from 'react';
import './App.css';
import {useEffect, useState} from 'react';

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=93a52616'


function App() {

  const [searchTerm, setSearchTerm] = useState('');
const [movies, setMovies] = useState([]);

const searchMovies = async (title) => {
  const response = await fetch(`${API_URL}&s=${title}`);
  const data = await response.json();
  console.log(data);
}

useEffect(() => {
  searchMovies("Batman");
}, []);


  return (
    <div className="App">
      
    </div>
  );
}

export default App;

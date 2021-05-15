import React, { useEffect, useState } from "react";

import Movie from "./components/Movie";

const api_key = "68eaa11a0b19950c30766ebf52f06bbc";

const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${api_key}&page=1`;

const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=`;

function App() {
  const [movies, setMovies] = useState([]);
  const [searchText, setSearchText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchText) {
      fetch(SEARCH_API + searchText)
        .then((res) => res.json())
        .then((data) => setMovies(data.results));
      setSearchText("");
    }
  };

  useEffect(() => {
    fetch(FEATURED_API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        setMovies(data.results);
      });
  }, []);

  return (
    <>
      <header>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={searchText}
            className="search"
            placeholder="Search..."
            onChange={(e) => setSearchText(e.target.value)}
          ></input>
        </form>
      </header>
      <div className="movie-container">
        {movies.length > 0 &&
          movies.map((movie) => <Movie key={movie.id} {...movie} />)}
      </div>
    </>
  );
}

export default App;

import React from "react";
const IMG_API = "https://image.tmdb.org/t/p/w1280";

function Movie({ title, poster_path, overview, vote_average }) {
  const getTagColor = (vote) => {
    if (vote > 8) {
      return "red";
    } else if (vote > 4) {
      return "green";
    } else {
      return "orange";
    }
  };

  return (
    <div className="movie">
      <img src={IMG_API + poster_path} atl={title} />
      <div className="movie-info">
        <h3>{title}</h3>
        <span className={`tag ${getTagColor(vote_average)}`}>
          {vote_average}
        </span>
      </div>
      <div className="movie-over">
        <h3>Overview:</h3>
        <p>{overview}</p>
      </div>
    </div>
  );
}

export default Movie;

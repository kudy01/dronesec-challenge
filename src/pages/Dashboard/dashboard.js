import React, { useState, useEffect } from "react";

const Dashboard = () => {
  const [movies, getMovies] = useState([]);

  const getStarWarsMovies = () => {
    fetch("https://swapi.dev/api/films")
      .then((response) => response.json())
      .then((data) => {
        getMovies(data.results);
      });
  };

  useEffect(() => {
    getStarWarsMovies();
  }, []);

  return (
    <div>
      <h1 className="white">List of Star Wars Movies</h1>
      {movies && console.log(movies)}
    </div>
  );
};

export default Dashboard;

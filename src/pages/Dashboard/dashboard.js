import React, { useState, useEffect } from "react";
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";

const Dashboard = () => {
  const [movies, getMovies] = useState([]);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const getStarWarsMovies = () => {
    fetch("https://swapi.dev/api/films")
      .then((response) => response.json())
      .then((data) => {
        getMovies(data.results);
      })
      .catch((e) => {
        setErrorMessage(e.message);
        setError(true);
      });
  };

  useEffect(() => {
    getStarWarsMovies();
  }, []);

  const columns = [
    {
      Header: "Name",
      accessor: "title",
    },
    {
      Header: "Director",
      accessor: "director",
    },
    {
      Header: "Producers",
      accessor: "producer",
    },
    {
      Header: "Opening Lines",
      accessor: "opening_crawl",
    },
  ];

  return (
    <div>
      <h1 className="white pt4 pb6">List of Star Wars Movies</h1>
      {error ? (
        <h3 className="white pa4">Something went wrong: {errorMessage}</h3>
      ) : (
        <ReactTable
          data={movies}
          columns={columns}
          defaultPageSize={3}
          pageSizeOptions={[3]}
          style={{ background: "white" }}
          className="-striped -highlight"
        />
      )}
    </div>
  );
};

export default Dashboard;

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
      minWidth: 200,
      style: { padding: "1rem 0 1rem 0" },
    },
    {
      Header: "Director",
      accessor: "director",
      minWidth: 200,
      style: { padding: "1rem 0 1rem 0" },
    },
    {
      Header: "Producers",
      accessor: "producer",
      minWidth: 400,
      style: { padding: "1rem 0 1rem 0" },
    },
    {
      Header: "Opening Lines",
      accessor: "opening_crawl",
      minWidth: 800,
      style: { padding: "1rem 0 1rem 0" },
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
          defaultPageSize={6}
          pageSizeOptions={[6]}
          resizable
          style={{ background: "white" }}
          className="-striped -highlight"
        />
      )}
    </div>
  );
};

export default Dashboard;

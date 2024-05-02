import React, { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../Services/Api";
import { Link } from "react-router-dom";

const Home = () => {
  const [trending, setTrending] = useState([]);
  const showTrending = async () => {
    try {
      const fetchedMovies = await fetchTrendingMovies();
      setTrending(fetchedMovies);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    showTrending();
  }, []);

  return (
    <>
      <h2>Tranding today</h2>
      <ul>
        {trending.map((movie) => {
          return (
            <li key={movie.id}>
              <Link to={`movies/${movie.id}`} state={{ from: "/" }}>
                {movie.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Home;

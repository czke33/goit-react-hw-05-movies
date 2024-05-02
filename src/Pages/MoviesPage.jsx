import { useEffect, useState } from "react";
import { fetchMoviesByQuery } from "../Services/Api";
import Searchbar from "../components/Searchbar/Searchbar";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);

  const actualQuery = searchParams.get("query");

  const showFetchedMovies = async (query) => {
    setIsLoading(true);
    try {
      const fetchedMovies = await fetchMoviesByQuery(query);
      setMovies([...fetchedMovies]);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setMovies([]);
    if (actualQuery) {
      showFetchedMovies(actualQuery);
    }
  }, [actualQuery]);

  return (
    <>
      <Searchbar onSubmit={(e) => setSearchParams({ query: e })}></Searchbar>
      {isLoading && <div>Loading...</div>}
      {movies.length > 0 ? (
        <ul>
          {movies.map((movie) => {
            return (
              <li key={movie.id}>
                <Link to={`${movie.id}`} state={{ from: `/movies/?${searchParams}` }}>
                  {movie.title}
                </Link>
              </li>
            );
          })}
        </ul>
      ) : (
        actualQuery && !isLoading && <div>Nothing found. Try again.</div>
      )}
    </>
  );
};

export default Movies;

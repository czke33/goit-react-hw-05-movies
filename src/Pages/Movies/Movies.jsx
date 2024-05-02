import { getMovieByName } from "Api/MovieApi";
import React from "react";
import SearchFrom from "components/SearchForm/SearchForm";
import SearchMovie from "components/SearchMovie/SearchMovie";
import Box from "Helpers/Box/Box";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const Status = {
    Loading: "loading",
    Success: "success",
    Error: "error",
    Init: "init",
};

const Movies = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [movies, setMovies] = useState([]);
    const [status, setStatus] = useState(Status.Init);

    const page = searchParams.get("page") || 1;
    const search = searchParams.get("search") || "";

    useEffect(() => {
        setStatus(Status.Loading);
        async function fetchData() {
            try {
                const data = await getMovieByName(search, page);
                setMovies(data.results);
                setStatus(Status.Success);
            } catch (error) {
                setStatus(Status.Error);
            }
        }
        if (search) {
            fetchData();
        } else {
            setMovies([]);
            setStatus(Status.Init);
        }
    }, [search, page]);


    const handleUpdateSearch = (e) => {
        setSearchParams({ search: e.target.value, page: 1 });
    };
    return (
        <Box>
            <SearchFrom onChange={handleUpdateSearch} />
            <SearchMovie movies={movies} value={search} status={status} />
        </Box>
    )
}

export default Movies;
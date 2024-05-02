import { useState, useEffect } from 'react';
import MoviesGallery from '../components/MovieGallery/MovieGallery';
import { fetchTrendingMovies } from '../Api/MovieApi';
import '../index.css';

export default function HomePage() {
    const [movies, setMovies] = useState([]);
    
    useEffect(() => {
        fetchTrendingMovies()
            .then(request => setMovies(request.results)
            );
    }, [])

    // console.log(movies);
    return (
        <>
            <h1>Trending today</h1>

            <MoviesGallery movies={movies} />
        </>
    );
};
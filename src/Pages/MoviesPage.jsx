import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Searchbar from '../components/SearchBar/SearchForm';
import MoviesGallery from '../components/MovieGallery/MovieGallery';
import { fetchMovieSearch } from '../Api/MovieApi';

export default function MoviesPage() {
    const [, setSearchQuery] = useState('');
    const [movies, setMovies] = useState(null);
    const location = useLocation();

    const query = new URLSearchParams(location.search).get('query') ?? '';

    useEffect(() => {
        if (!query) {
            return;
        }

        fetchMovieSearch(query).then(request => {
            setMovies(request.results);
        });
    },[query])

    const onClick = request => {
        setSearchQuery(request);
}

    return (
        <>
            <Searchbar onSubmit={onClick} />
            
            {movies && <MoviesGallery movies={movies} />}
        </>
    )
};
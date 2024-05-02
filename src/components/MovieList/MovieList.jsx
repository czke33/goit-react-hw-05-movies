import React from 'react';
import MovieItem from 'components/Loader/MovieItem/MovieItem';
import { useState, useEffect } from 'react';
import { getHomeMovies } from 'Api/MovieApi';
import style from './MovieList.module.css';
import { useLocation } from 'react-router-dom';
import Loader from 'components/Loader/Loader';

const pageStatus = {
    loading: 'loading',
    success:'success',
    error: 'error',
    init: 'init'
};

const MovieList = () => {
    const [movies, setMovies] = useState([]);
    const [status, setStatus] = useState(pageStatus.init);
    const location = useLocation();

    useEffect(() => {
        setStatus(pageStatus.loading);
        async function fetchData() {
            try {
                const data = await getHomeMovies();
                setMovies(data.results);
                setStatus(pageStatus.success);
            }
            catch (error) {
                setStatus(pageStatus.error);
            }
        }
        fetchData();
    }, []);

    return (
        <>
            {status === pageStatus.loading && <p><Loader /></p>}
            {status === pageStatus.init && <p><Loader /></p>}
            {status === pageStatus.error && <p className={style.error}>Error</p>}
            {status === pageStatus.success &&
                (<ul className={style.movieList}>
                
                    {movies.map((item, index) => {
                        return (
                            <>
                                <li className={style.movieItem} key={index}>
                                    <MovieItem url={item.poster_path} title={item.title} activeId={item.id} location={location} />
                                </li>
                            </>)
                    })}
                </ul>)
            }
        </>
    );
}
export default MovieList;
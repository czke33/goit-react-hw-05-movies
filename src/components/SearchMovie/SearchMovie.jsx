import React from 'react';
import MovieItem from 'components/Loader/MovieItem/MovieItem';
import style from './MovieList.module.css';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

const Status = {
    Loading: 'loading',
    Success:'success',
    Error: 'error',
    Init: 'init'
};
const SearchMovie = ({ value, status, movies }) => { 
    const location = useLocation();

    return (
        <>
            {status === Status.Loading &&
                (<ul className={style.movieList}>
                {movies.map((item, index) => {
                    return (
                        <>
                            <li className={style.movieItem} key={index}>
                                <MovieItem url={item.poster_path} title={item.title} activeId={item.id} location={location} />
                            </li>
                        </>)
                })}
              </ul>
                )};
            {status === Status.Success && movies.lenght === 0(<Error text={`Sorry, nothing found for ${value}`} />)}
        </>
    )
}
SearchMovie.PropTypes = {
    value: PropTypes.string.isRequired,
    status: PropTypes.oneOf(Object.values(Status)).isRequired,
    movies: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default SearchMovie;
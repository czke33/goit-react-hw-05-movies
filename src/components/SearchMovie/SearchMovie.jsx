import React from 'react';
import MovieItem from 'components/MovieItem/MovieItem';
import style from './SearchMovie.module.css';
import propTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import Error from 'Helpers/Error/Error';

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
            {status === Status.Success && movies.lenght>0 &&
                (<ul className={style.movieList}>
                {movies.map((item) => {
                    return (
                        
                   <MovieItem 
                   url={item.poster_path} 
                   title={item.title} 
                   activeId={item.id} 
                   location={location} />
                            
                        )
                })}
              </ul>
                )};
            {status === Status.Success && movies.lenght === 0(<Error text={`Sorry, nothing found for ${value}`} />)}
        </>
    )
}
SearchMovie.propTypes = {
    value: propTypes.string.isRequired,
    status: propTypes.oneOf(Object.values(Status)).isRequired,
    movies: propTypes.arrayOf(propTypes.object).isRequired
};

export default SearchMovie;
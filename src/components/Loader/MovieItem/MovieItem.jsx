import React from 'react';
import { Link } from 'react-router-dom';
import style from './MovieItem.module.css';
import PropType from 'prop-types'

const MovieItem = ({ url, title, activeId, location }) => {
    return (
        <li className={style.item}>
            <Link to={`/movies/${activeId}`} state={{ from: location }}>
                <img className={style.img} src={url !== null ? `https://image.tmdb.org/t/p/w200${url}` : ''} alt={title} />
                
                <p className={style.label}>{title}</p>
            </Link>
        </li>
    );
};
MovieItem.propType = {
    url: PropType.string.isRequired,
    title: PropType.string.isRequired,
    activeId: PropType.number.isRequired,
    location: PropType.object.isRequired
};

export default MovieItem;
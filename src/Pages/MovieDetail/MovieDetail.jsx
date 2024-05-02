import React from 'react';
import { getMovieDetalis } from 'Api/MovieApi';
import Box from 'Helpers/Box/Box';
import { useEffect, useState, Suspense } from 'react';
import style from './MovieDetail.module.css';
import { Link, NavLink, Outlet, useLocation, useParams } from 'react-router-dom';

const MovieDetalis = () => {
    const activeClassName = ({ isActive }) => isActive ? `${style.active}` : `${style.navLinkA}`;
    const location = useLocation();

    const params = useParams();
    const id = params.id;
    const [film, setFilm] = useState([]);
    

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await getMovieDetalis(id);
                setFilm(data);
               
            } catch (error) {
                alert('error');
            }
        }
        fetchData();
    }, [id]);

    return (
        <Box>
            <Link to={location.state.from.pathname + location.state.from.search ?? '/'} className={style.add}>
                Back</Link>
            <div className={style.infoBox}>
                <div className={style.imgBox}>
                    <img className={style.img} src={film.poster_path} alt={film.title} />
                </div>
                <div className={style.infoText}>
                    <h2 className={style.name}>{film.original_title}</h2>
                    <h3 className={style.title}>Release date</h3>
                    <p className={style.text}>
                        {film.release_date ? film.release_date : 'No data available'}
                    </p>
                    <h3 className={style.title}>Rating</h3>
                    <p className={style.text}>{film.vote_average}</p>
                    <h3 className={style.title}>Genres</h3>
                    <ul className={style.list}>
                        {film?.genres?.length === 0 ? (
                            <p className={style.text}>No data available</p>
                        ) : (
                            film?.genres?.map(item => (
                                <li key={item.name}>
                                    <p className={style.text}>{item.name}</p>
                                </li>
                            ))
                        )}
                    </ul>
                    <h3 className={style.title}>Overview</h3>
                    <p className={style.text}>
                        {film.overview ? film.overview : 'No data available'}
                    </p>
                </div>
            </div>
            <div>
                <ul className={style.linkList}>
                    <li className={style.linkIt}>
                        <NavLink
                            to="cast"
                            className={activeClassName}
                            state={location?.state ?? '/'}
                        >
                            cast
                        </NavLink>
                    </li>
                    <li className={style.linkIt}>
                        <NavLink
                            to="reviews"
                            className={activeClassName}
                            state={location?.state ?? '/'}
                        >
                            reviews
                        </NavLink>
                    </li>
                </ul>
            </div>
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>
        </Box>
    )
};

export default MovieDetalis;
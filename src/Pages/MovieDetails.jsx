import { useState, useEffect, lazy, Suspense } from 'react';
import { NavLink, Routes, Route, useNavigate, useParams, useLocation } from 'react-router-dom';
import Loader from '../components/Loader/Loader'
import { fetchMoviesId, IMAGE_URL } from '../Api/MovieApi';
import styles from '../components/Navigation/Navigation.module.css';
import '../index.css';

const Cast = lazy(() => import('./Cast') );
const Reviews = lazy(() => import('./Reviews') );

export default function MovieDetailsPage() {
    const navigate = useNavigate();
    const location = useLocation();
  

    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    
    let locationValue = location.state;
    if (location.state) {
        locationValue = location.state.from;
    }
    
    useEffect(() => {
        fetchMoviesId(movieId).then(movie => {
            setMovie(movie);
            // console.log(movie)
        });
    }, [movieId]);

    const onGoBack = () => {
        (!location.state)? navigate.push('/'): navigate.push(`${location.state.from.pathname}${location.state.from.search}`)
            
        
        // history.push(current ? current.from : '/movies')
        

        }


    return (
        <>
            {movie && (
                <>
                    <button type="button" className="Button" onClick={onGoBack}>⇚ Go Back</button>

                    <div className="DetailsPage">
                        <img src={IMAGE_URL + movie.poster_path} alt={movie.title} className="DetailsPage_img" />
                        <div>
                            <h2>{movie.title}</h2>
                            <p><span>Rating: </span>{movie.vote_average}</p>
                            <p><span>Overview: </span>{movie.overview}</p>
                            <p><span>Genres: </span>{movie.genres.map(genre => genre.name).join(' ')}</p>
                        </div>
                    </div>

                    <hr />

                    <h3>Additional information</h3>
            
                    <nav>
                        <NavLink
                            to={{
                                pathname: `/movies/${movieId}/cast`,
                                state: { from: locationValue }
                            }}
                            className={styles.link}
                            activeClassName={styles.activeLink}
                        >
                            Cast
                        </NavLink>

                        <NavLink
                            to={{
                                pathname: `/movies/${movieId}/reviews`,
                                state: { from: locationValue }
                            }}
                            className={styles.link}
                            activeClassName={styles.activeLink}
                        >
                            Reviews
                        </NavLink>
                    </nav>

                    <hr />
                    
                    <Suspense fallback={<Loader />}>
                        <Routes>
                            <Route path={`/movies/${movieId}/cast`}>
                                <Cast movieId={movieId} />
                            </Route>

                            <Route path={`/movies/${movieId}/reviews`}>
                                <Reviews movieId={movieId} />
                            </Route>
                    </Routes>
                    </Suspense>
                </>
            )}
        </>
    )
};
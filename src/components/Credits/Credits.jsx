import { getMovieCredits } from "Api/MovieApi";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from './Credits.module.css';
import Loader from "components/Loader/Loader";

const pageStatus = {
    loading: 'loading',
    success: 'success',
    error: 'error',
    init: 'init'
};

 const Credits = () => {
    const [cast, setCast] = useState([]);
    const [status, setStatus] = useState(pageStatus.init);

    const params = useParams();
    const movieId = params.id;
    
    useEffect(() => {
        setStatus(pageStatus.loading);
        async function fetchData() {
            try {
                const data = await getMovieCredits(movieId);
                setCast(data.cast);
                setStatus(pageStatus.success);
            }
            catch (error) {
                setStatus(pageStatus.error);
            }
        }
        fetchData();
    }, [movieId]);

    return (
        <>
        {status === pageStatus.loading && <p><Loader/></p>}
        {status === pageStatus.error && <p className={style.error}>Error</p>}
        {status === pageStatus.success && cast.lenght === 0 && <p className={style.error}>No cast found</p>}
        {status === pageStatus.success && (
            <ul className={style.photoList}>
            {cast.map((item, index) => (
                <li className={style.photoItem} key={index}>
                    <img className={style.photo}
                        src={item.profile_path
                            ? `https://image.tmdb.org/t/p/w200${item.profile_path}`
                            : ''} alt={item.name} />
                    <p className={style.name}>{item.name}</p>
                    <p className={style.role}>{item.character ? item.character : 'role'}</p>
                </li>
            ))}
            </ul>
        )}
    </>
    );

};

export default Credits;
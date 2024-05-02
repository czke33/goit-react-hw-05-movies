import React from 'react';
import Loader from 'components/Loader/Loader';
import style from "./Trailer.module.css";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import propTypes from "prop-types";
import { getMovieTrailer } from 'api/movieApi';

const pageStatus = {
    loading: 'loading',
    success:'success',
    error: 'error',
    init: 'init'
};

const Trailer = () => {
    const [trailer, setTrailer] = useState([]);
    const [status, setStatus] = useState(pageStatus.init);

    const params = useParams();
    const movieId = params.id;

    useEffect(() => {
        setStatus(pageStatus.loading);
        async function fetchData() {
            try {
                const data = await getMovieTrailer(movieId);
                setTrailer(data.results);
                setStatus(pageStatus.success);
            } catch (error) {
                setStatus(pageStatus.error);
            }
        }
        fetchData();
    }, [movieId]);

    return (
        <>
            {status === pageStatus.loading && <p><Loader /></p>}
            {status === pageStatus.init && <p><Loader /></p>}
            {status === pageStatus.error && <p className={style.error}>Error</p>}
            {status === pageStatus.success && trailer.length === 0 && <p className={style.error}>No trailer found</p>}
            {status === pageStatus.success && (
                <div className={style.trailer}>
                    <iframe
                        title="trailer"
                        src={trailer[0].key}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
            )}
        </>
    );
}

Trailer.propTypes = {
    movieId: propTypes.string.isRequired,
};
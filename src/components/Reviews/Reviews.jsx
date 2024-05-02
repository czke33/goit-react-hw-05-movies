import Loader from "components/Loader/Loader";
import { getMovieReviews } from "Api/MovieApi";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "./Reviews.module.css";

const pageStatus = {
    loading: "loading",
    success: "success",
    error: "error",
    init: "init",
};

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const [status, setStatus] = useState(pageStatus.init);

    const params = useParams();
    const movieId = params.id;

    useEffect(() => {
        setStatus(pageStatus.loading);
        async function fetchData() {
            try {
                const data = await getMovieReviews(movieId);
                setReviews(data.results);
                setStatus(pageStatus.success);
            } catch (error) {
                setStatus(pageStatus.error);
            }
        }
        fetchData();
    }, [movieId]);

    const getDate = (date) => {
        const dateObj = new Date(date);
        const year = dateObj.getFullYear();
        const month = dateObj.getMonth() + 1;
        const day = dateObj.getDate();
        return `${day}/${month}/${year}`;
    };
    return (<>
        
        {status === pageStatus.loading && <p><Loader /></p>}
        {status === pageStatus.init && <p><Loader /></p>}
        {status === pageStatus.error && <p className={style.error}>Error</p>}
        {status === pageStatus.success && reviews.length === 0 && <p className={style.error}>No reviews found</p>}
        {status === pageStatus.success && (
            <ul className={style.list}>
                {reviews.map((item, index) => (
                    <li className={style.item} key={index}>
                        <p className={style.author}>{item.author}</p>
                        <p className={style.date}>{getDate(item.created_at)}</p>
                        <p className={style.text}>{item.content}</p>
                    </li>
                ))}
            </ul>
        )}
    </>);
}

export default Reviews;
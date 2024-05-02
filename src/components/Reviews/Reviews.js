import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "../../Services/Api";
import css from "./Reviews.module.css";

const Reviews = () => {
  const [reviews, setReviews] = useState();

  const fetchThisMovieReviews = async (id) => {
    const fetchedData = await fetchMovieReviews(id);
    setReviews(fetchedData);
  };

  const { movieId } = useParams();

  useEffect(() => {
    fetchThisMovieReviews(movieId);
  }, [movieId]);

  if (reviews) {
    return (
      <ul>
        {!reviews[0] ? "We dont have any reviews for this movie." : ""}
        {reviews.map((e) => {
          return (
            <li className={css["item"]} key={e.id}>
              <p className={css["author"]}>Author: {e.author}</p>
              <p>{e.content}</p>
            </li>
          );
        })}
      </ul>
    );
  }
};

export default Reviews;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCast } from "../../Services/Api";
import css from "./Cast.module.css";

const Cast = () => {
  const [cast, setCast] = useState();
  const fetchThisMovieCast = async (id) => {
    const fetchedData = await fetchMovieCast(id);
    setCast(fetchedData);
  };

  const { movieId } = useParams();

  useEffect(() => {
    fetchThisMovieCast(movieId);
  }, [movieId]);

  if (cast) {
    return (
      <div className={css["wrapper"]}>
        <ul>
          {cast.map((e) => {
            return (
              <li key={e.id} className={css["item"]}>
                <img
                  src={
                    e.profile_path
                      ? `https://www.themoviedb.org/t/p/w138_and_h175_face/${e.profile_path}`
                      : `https://via.placeholder.com/138x175?text=Theres+no+photo`
                  }
                  alt={e.name}
                />
                <div className={css["actor-details"]}>
                  <p>{e.name}</p>
                  <p>Character: {e.character}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
};

export default Cast;

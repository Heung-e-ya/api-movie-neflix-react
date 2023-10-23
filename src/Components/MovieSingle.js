import { useContext } from "react";
import { StoreContext } from "../ThemeContext";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Link } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { Badge } from "react-bootstrap";
import { useEffect } from "react";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faImdb } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MovieSingle = ({ movie }) => {
  const { genreList } = useSelector((state) => state.movie);

  useEffect(() => {}, [genreList]);
  return (
    <>
      {movie[0] === null ? (
        <div>
          <ClipLoader
            className="loading cssOverride"
            color="#ff0000"
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <Link to={`/movies/${movie.id}`} className="movie_card" id="bright">
          <div className="info_section">
            <div className="movie_header">
              <img className="locandina" src={`https://image.tmdb.org/t/p/original//${movie.poster_path}`} />
              <h1>{movie.original_title}</h1>
              <h4>
                <div format="YYYY">{movie.release_date}</div>
              </h4>
              <ul className="card-slider-genres">
                {movie.genre_ids.map((id) => (
                  <li>
                    <Badge key={id} className="genre" bg="danger">
                      {genreList.find((movie) => movie.id == id).name}
                    </Badge>
                  </li>
                ))}
              </ul>
            </div>
            <div className="movie_desc">
              <p className="text">{movie.overview.substring(0, 200) + "..."}</p>
            </div>
            <div className="movie_social">
              <ul>
                <li className="fab fa-imdb imb-icon">
                  <FontAwesomeIcon icon={faImdb} />
                  <span className="imb-score">{movie?.vote_average}</span>
                </li>
                <li className="fas fa-users users-icon">
                  <FontAwesomeIcon icon={faUser} />
                  <span className="imb-score">{movie?.popularity}</span>
                </li>
                <li>
                  <i className="material-icons">
                    {movie.adult ? <span className="eightteen">18+</span> : <span className="eightteen">Under 18</span>}
                  </i>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="blur_back bright_back"
            style={{
              backgroundImage: "url(" + `https://image.tmdb.org/t/p/original//${movie.backdrop_path}` + ")",
            }}
          ></div>
        </Link>
      )}
    </>
  );
};

export default MovieSingle;

import React from "react";
import { Badge } from "react-bootstrap";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";

const MovieCard = ({ item }) => {
  const { genreList } = useSelector((state) => state.movie);
  return (
    <a
      className="card "
      style={{
        backgroundImage: "url(" + `https://image.tmdb.org/t/p/w355_and_h200_multi_faces/${item.poster_path}` + ")",
      }}
    >
      <div className="overlay">
        <div className="items"></div>
        <div className="items head">
          <p>{item.title}</p>
          <hr />
        </div>
        <ul className="card-slider-genres">
          {item.genre_ids.map((id) => (
            <li>
              <Badge key={id} className="genre" bg="danger">
                {genreList.find((item) => item.id == id).name}
              </Badge>
            </li>
          ))}
        </ul>
        <div>
          <span>{item.vote_average}</span>
          <span>{item.adult ? "청불" : "Under 18"}</span>
        </div>
      </div>
    </a>
  );
};

export default MovieCard;

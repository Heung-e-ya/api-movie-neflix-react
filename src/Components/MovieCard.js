import React from "react";
import { Badge } from "react-bootstrap";

const MovieCard = ({ item }) => {
  return (
    <div
      className="card "
      style={{
        backgroundImage: "url(" + `https://image.tmdb.org/t/p/w355_and_h200_multi_faces/${item.poster_path}` + ")",
      }}
    >
      <div className="overlay">
        <h1>{item.title}</h1>
        <div>
          {item.genre_ids.map((genre) => (
            <Badge key={genre} className="genre" bg="danger">
              {genre}
            </Badge>
          ))}
        </div>
        <div>
          <span>{item.vote_average}</span>
          <span>{item.adult ? "청불" : "Under 18"}</span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;

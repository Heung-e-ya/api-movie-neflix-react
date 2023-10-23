import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import ReactModal from "react-modal";
const Banner = ({ movie }) => {
  console.log("banner movie :", movie);
  const navigate = useNavigate();

  const thisMovie = () => {
    navigate(`/movies/${movie.id}`);
  };

  return (
    <div
      className="banner"
      style={{
        backgroundImage: "url(" + `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${movie.poster_path}` + ")",
      }}
    >
      <div className="banner-info">
        <h1>{movie.original_title}</h1>
        <p>{movie.overview}</p>
        <button className="banner-more" onClick={thisMovie} key={movie} item={movie}>
          더 알아보기
        </button>
      </div>
    </div>
  );
};

export default Banner;

import React, { Fragment, useContext } from "react";
import { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import axios from "axios";
import Pagination from "react-pagination-library";
import { StoreContext } from "./../ThemeContext";
import { ClipLoader } from "react-spinners";
import MovieSingle from "./MovieSingle";

const MovieList = () => {
  let { movie, page, totalPage, changePage, currentGenres, filterType, originalMovie, keyword } =
    useContext(StoreContext);

  useEffect(() => {
    getDataFromAPI(1);
    page[1](1);
    return () => {};
  }, [keyword[0]]);
  const getDataFromAPI = async (numPage) => {
    let API_KEY = process.env.REACT_APP_API_KEY;

    let url = new URL(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=${numPage}`);
    if (keyword[0] !== "") {
      url.searchParams.set("query", keyword[0]);
    } else {
      url = new URL(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=${numPage}`);
    }

    let res = await axios.get(url);
    movie[1](res.data.results);
    originalMovie[1](res.data.results);
    totalPage[1](res.data.total_pages);
  };

  changePage = (numPage) => {
    page[1](numPage);

    getDataFromAPI(numPage);
  };
  console.log("list", movie[0]);
  return (
    <Fragment>
      {movie[0] === null ? (
        <>
          <ClipLoader
            className="loading cssOverride"
            color="#ff0000"
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </>
      ) : (
        <>
          <div className="movie-section">
            <Row>
              {movie[0].map((movie) => {
                return (
                  <Col className="single-card-col" lg={6}>
                    <MovieSingle movie={movie} key={movie.id}></MovieSingle>
                  </Col>
                );
              })}
            </Row>
          </div>
          <div className="Pagination">
            <Pagination
              currentPage={page[0]}
              totalPages={totalPage[0]}
              changeCurrentPage={changePage}
              theme="square-fill"
            />
          </div>
        </>
      )}
    </Fragment>
  );
};

export default MovieList;

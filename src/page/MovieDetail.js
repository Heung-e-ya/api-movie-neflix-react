import { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
const MovieDetail = () => {
  // 아이디값 가져오기
  const [movies, setMovies] = useState(null);
  const { genreList } = useSelector((state) => state.movie);
  const { id } = useParams();
  console.log(id);
  const getMoviesDetail = async () => {
    let API_KEY = process.env.REACT_APP_API_KEY;
    let url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setMovies(data);
  };
  useEffect(() => {
    getMoviesDetail();
  }, []);

  return (
    <Container>
      <Row>
        <Col className="detail-img">
          <img width={300} src={`https://image.tmdb.org/t/p/original${movies?.poster_path}`} />
        </Col>
        <Col>
          <div>
            <h1 className="title">{movies?.title}</h1>
            <hr />
            <ul className="card-slider-genres">
              {movies?.genres.map((genres) => {
                return <li>{genres.name}</li>;
              })}
            </ul>
            <hr />
            <h2>{movies?.tagline}</h2>
            <hr />
            <p>{movies?.overview}</p>
          </div>
        </Col>
        <hr />
        <Col>
          <h3>리뷰</h3>
          <div>
            리뷰내용박스
            <div>리뷰 내용</div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MovieDetail;

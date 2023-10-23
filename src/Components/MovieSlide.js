import React from "react";
import Carousel from "react-multi-carousel";
import MovieCard from "./MovieCard";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    partialVisibilityGutter: 40,
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    partialVisibilityGutter: 40,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    partialVisibilityGutter: 30,
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    partialVisibilityGutter: 30,
    items: 1,
  },
};
const MovieSlide = ({ movies }) => {
  // console.log("movies : ", movies);
  return (
    <div>
      <Carousel responsive={responsive} rewind rewindWithAnimation swipeable={false} slidesToSlide={1}>
        {movies.results.map((item) => (
          <MovieCard key={item} item={item} />
        ))}
      </Carousel>
    </div>
  );
};

export default MovieSlide;

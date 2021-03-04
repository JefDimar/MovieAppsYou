import React, { useEffect } from "react";
import Banner from "../components/Jumbotron";
import { CardDeck, Container } from "react-bootstrap";
import Item from "../components/Card";
// import useFetch from "../hooks/useFetch";
import { useSelector, useDispatch } from "react-redux"
import { fetchingMovies } from "../store/actions"

export default function Homepage() {
  const movies = useSelector(state => state.movie.movies)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchingMovies())
  }, [dispatch]);
  return (
    <div>
      <Banner />
      <Container>
        <CardDeck className="d-flex flex-wrap justify-content-evenly align-content-stretch">
          {movies.map((movie) => (
            <Item key={movie.id} movie={movie} />
          ))}
        </CardDeck>
      </Container>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import Banner from "../components/Jumbotron";
import { CardDeck, Container } from "react-bootstrap";
import Item from "../components/Card";
import useFetch from "../hooks/useFetch";

export default function Homepage() {
  const [movies, setMovies] = useState([]);
  // ini custom hooks
  const data = useFetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=c2dcee8f08e877d5fb3559af163b7e36"
  );
  useEffect(() => {
    setMovies(data);
  }, [data]);
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

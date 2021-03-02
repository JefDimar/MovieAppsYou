import React from "react";
import Banner from "../components/Jumbotron";
import { CardDeck, Container } from "react-bootstrap";
import Item from "../components/Card";
import { useState, useEffect } from "react";

export default function Homepage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=c2dcee8f08e877d5fb3559af163b7e36"
    )
      .then((response) => response.json())
      .then((data) => setMovies(data.results));
    // return () => {
    //   cleanup;
    // };
  }, []);
  return (
    <div>
      <Banner />
      <Container>
        <CardDeck>
          {movies.map((movie) => (
            <Item key={movie.id} movie={movie} />
          ))}
        </CardDeck>
      </Container>
    </div>
  );
}

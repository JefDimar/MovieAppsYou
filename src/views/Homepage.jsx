import React, { useState, useEffect } from "react";
import Banner from "../components/Jumbotron";
import { CardDeck, Container } from "react-bootstrap";
import Item from "../components/Card";

export default function Homepage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=c2dcee8f08e877d5fb3559af163b7e36"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`${response.status} - ${response.statusText}`);
        } else {
          return response.json();
        }
      })
      .then((data) => setMovies(data.results))
      .catch((error) => console.log(error));
    // return () => {
    //   cleanup;
    // };
  }, []);
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

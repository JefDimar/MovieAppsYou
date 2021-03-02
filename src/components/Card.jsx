import React from "react";
import { Card, Button } from "react-bootstrap";

export default function Item(props) {
  const testClick = (e) => {
    e.preventDefault();
    console.log(
      "https://api.themoviedb.org/3/movie/" +
        props.movie.id +
        "?api_key=c2dcee8f08e877d5fb3559af163b7e36&language=en-US"
    );
    // https://www.youtube.com/watch?v=${key} (link youtube)
    console.log(
      "https://api.themoviedb.org/3/movie/" +
        props.movie.id +
        "/videos?api_key=c2dcee8f08e877d5fb3559af163b7e36&language=en-US"
    );
  };
  return (
    <div>
      <Card>
          <Card.Img
            variant="top"
            src={
              "https://image.tmdb.org/t/p/w500" + props.movie.poster_path
            }
          />
          <Card.Body>
            <Card.Title>{props.movie.title}</Card.Title>
            <Card.Text>{props.movie.overview}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button onClick={testClick}>Click Me</Button>
          </Card.Footer>
        </Card>
    </div>
  )
}
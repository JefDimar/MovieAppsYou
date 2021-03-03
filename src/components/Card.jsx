import React from "react";
import { Card, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

export default function Item(props) {
  const history = useHistory();
  const details = (e) => {
    e.preventDefault();
    history.push(`/detail/${props.movie.id}`);
  };
  const trailers = (e) => {
    // https://www.youtube.com/watch?v=${key} (link youtube)
    console.log(
      "https://api.themoviedb.org/3/movie/" +
        props.movie.id +
        "/videos?api_key=c2dcee8f08e877d5fb3559af163b7e36&language=en-US"
    );
  };
  return (
    <Card className="w-25 h-50 align-items-stretch m-3">
      <Card.Img
        variant="top"
        src={"https://image.tmdb.org/t/p/w500" + props.movie.poster_path}
      />
      <Card.Body>
        <Card.Title className="card-header text-wrap">
          {props.movie.title}
        </Card.Title>
        <Card.Text className="text-truncate">{props.movie.overview}</Card.Text>
        <Card.Text>Rating: {props.movie.vote_average}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <Button onClick={details} className="m-2">
          Details
        </Button>
        <Button onClick={trailers} variant="success" className="m-2">
          Trailers
        </Button>
      </Card.Footer>
    </Card>
  );
}

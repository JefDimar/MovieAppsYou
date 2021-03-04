import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetchDetail from "../hooks/useFetchDetail";
import { Card } from "react-bootstrap";

export default function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  const data = useFetchDetail(
    "https://api.themoviedb.org/3/movie/" +
      id +
      "?api_key=c2dcee8f08e877d5fb3559af163b7e36&language=en-US"
  );

  useEffect(() => {
    setMovie(data);
  }, [data]);
  return (
    <div className="mt-3 w-50 h-50 offset-3">
      <h1>{movie.title}</h1>
      <Card>
        <Card.Img
          variant="top"
          src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
        />
        <Card.Header className="text-center">{movie.title}</Card.Header>
        <Card.Body className="text-reset">
          <Card.Title>Synopsis</Card.Title>
          <Card.Text>{movie.overview}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

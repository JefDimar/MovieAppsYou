import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetchDetail from "../hooks/useFetchDetail";
import { Card } from "react-bootstrap";

export default function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [trailer, setTrailer] = useState({});
  const [loading, setLoading] = useState(true);

  const data = useFetchDetail(
    `https://api.themoviedb.org/3/movie/` +
      id +
      `?api_key=${process.env.REACT_APP_KEY}&language=en-US`
  );
  const trailers = useFetchDetail(
    `https://api.themoviedb.org/3/movie/` +
      id +
      `/videos?api_key=${process.env.REACT_APP_KEY}&language=en-US`
  );
  useEffect(() => {
    setLoading(Array.isArray(data) && Array.isArray(trailers))
    setTrailer(trailers);
    setMovie(data);
  }, [data, trailers]);
  return (
    <div className="mt-3 offset-3 d-flex flex-row">
      {loading ? (
        <h1>Please wait a sec...</h1>
      ) : (
        <>
        <div className="float-left">
          <h1>{movie.title}</h1>
          <Card className="w-50 h-50">
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
        <div className="float-right">
          <iframe
            src={`https://www.youtube.com/embed/${trailer?.results?.[0]?.key}?autoplay=1`}
            title={trailer?.results?.[0]?.name}
            width="420" height="315"
            className="m-3"
          />
        </div>
        </>
      )}
    </div>
  );
}

import React from "react";
import { Card, Button } from "react-bootstrap";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import useFetchDetail from "../hooks/useFetchDetail";
import { addFavorites } from "../store/actions";
// import ModalTrailer from "../components/ModalTrailer";

export default function Item(props) {
  const history = useHistory();
  // const [modalShow, setModalShow] = useState(false);
  const dispatch = useDispatch();
  const location = useLocation();

  // EventHandlers
  const details = (e) => {
    e.preventDefault();
    history.push(`/detail/${props.movie.id}`);
  };
  const movie = useFetchDetail(
    `https://api.themoviedb.org/3/movie/${props.movie.id}?api_key=c2dcee8f08e877d5fb3559af163b7e36&language=en-US`
  );
  const favorites = (e) => {
    e.preventDefault();
    dispatch(addFavorites(movie));
  };

  return (
    <>
      <Card className="w-25 h-50 align-items-stretch m-3">
        <Card.Img
          variant="top"
          src={"https://image.tmdb.org/t/p/w500" + props.movie.poster_path}
        />
        <Card.Body>
          <Card.Title className="card-header text-wrap">
            {props.movie.title}
          </Card.Title>
          <Card.Text className="text-truncate">
            {props.movie.overview}
          </Card.Text>
          <Card.Text>Rating: {props.movie.vote_average}</Card.Text>
        </Card.Body>
        {location.pathname === "/" ? (
          <Card.Footer>
            <Button onClick={details} className="m-2">
              Details
            </Button>
            <Button onClick={favorites} variant="danger" className="m-2">
              Add to Favorites
            </Button>
          </Card.Footer>
        ) : (
          <Button onClick={details} className="m-2">
            Details
          </Button>
        )}
      </Card>
    </>
  );
}

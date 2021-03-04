import React, { useEffect } from "react";
import Banner from "../components/Jumbotron";
import { CardDeck, Container } from "react-bootstrap";
import Item from "../components/Card";
import useFetch from "../hooks/useFetch";
import { useSelector, useDispatch } from "react-redux"
import { fetchMovies } from "../store/actions"

export default function Homepage() {
  // const [movies, setMovies] = useState([]);
  const movies = useSelector(state => state.movie.movies)
  const dispatch = useDispatch()
  // ini custom hooks
  const data = useFetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_KEY}`
  );

  // https://www.youtube.com/watch?v=${key} (link youtube)
  // console.log(
  //   "https://api.themoviedb.org/3/movie/" +
  //     props.movie.id +
  //     "/videos?api_key=c2dcee8f08e877d5fb3559af163b7e36&language=en-US"
  // );
  useEffect(() => {
    dispatch(fetchMovies(data))
  }, [data, dispatch]);
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

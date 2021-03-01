import React, { Component } from "react";
import Item from "../components/Card";
import Banner from "../components/Jumbotron";
import { Container } from "react-bootstrap";
import CardGroup from "react-bootstrap/CardGroup";

export default class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=c2dcee8f08e877d5fb3559af163b7e36"
    )
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          movies: data.results,
        })
      );
  }

  render() {
    return (
      <div>
        <Banner />
        <Container>
          <CardGroup>
            {this.state.movies.map((movie) => {
              return <Item key={movie.id} movie={movie} />;
            })}
          </CardGroup>
        </Container>
      </div>
    );
  }
}

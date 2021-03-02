import React from 'react'
import { Card, Button } from "react-bootstrap";

export default function testing() {
  return (
    <div>
      <Card>
          <Card.Img
            variant="top"
            src={
              "https://image.tmdb.org/t/p/w500" + this.props.movie.poster_path
            }
          />
          <Card.Body>
            <Card.Title>{this.props.movie.title}</Card.Title>
            <Card.Text>{this.props.movie.overview}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button onClick={this.testClick}>Click Me</Button>
          </Card.Footer>
        </Card>
    </div>
  )
}
// ------------------------------------------------------
export default class Item extends Component {
  testClick = (e) => {
    e.preventDefault();
    console.log(
      "https://api.themoviedb.org/3/movie/" +
        this.props.movie.id +
        "?api_key=c2dcee8f08e877d5fb3559af163b7e36&language=en-US"
    );
    // https://www.youtube.com/watch?v=${key} (link youtube)
    console.log(
      "https://api.themoviedb.org/3/movie/" +
        this.props.movie.id +
        "/videos?api_key=c2dcee8f08e877d5fb3559af163b7e36&language=en-US"
    );
  };

  render() {
    return (
      <div>
        <Card>
          <Card.Img
            variant="top"
            src={
              "https://image.tmdb.org/t/p/w500" + this.props.movie.poster_path
            }
          />
          <Card.Body>
            <Card.Title>{this.props.movie.title}</Card.Title>
            <Card.Text>{this.props.movie.overview}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button onClick={this.testClick}>Click Me</Button>
          </Card.Footer>
        </Card>
      </div>
    );
  }
}

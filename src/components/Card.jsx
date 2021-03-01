import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";

export default class Item extends Component {
  testClick = (e) => {
    e.preventDefault();
    console.log("yeay keclick ambil id", this.props.movie.id);
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
            <Card.Title>{this.props.movie.original_title}</Card.Title>
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

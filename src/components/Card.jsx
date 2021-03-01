import React, { Component } from "react";
import { Card } from "react-bootstrap";

export default class Item extends Component {
  render() {
    return (
      <div>
        <Card>
          <Card.Img
            variant="top"
            src={
              "https://image.tmdb.org/t/p/original" +
              this.props.movie.poster_path
            }
          />
          <Card.Body>
            <Card.Title>{this.props.movie.original_title}</Card.Title>
            <Card.Text>{this.props.movie.overview}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </div>
    );
  }
}

import React, { Component } from "react";
import { Button, Jumbotron } from "react-bootstrap";

export default class Banner extends Component {
  render() {
    return (
      <div>
        <Jumbotron className="mt-5 mb-3">
          <h1>Hello, react!</h1>
          <p>
            Testing for educational purposes.
          </p>
          <p>
            <Button variant="primary">Learning react from scratch</Button>
          </p>
        </Jumbotron>
      </div>
    );
  }
}

import React from "react";
import { Jumbotron } from "react-bootstrap";

export default function Banner() {
  return (
    <div>
      <div>
        <Jumbotron className="mt-3 mb-3 bg-olive">
          <h1>Hello, react!</h1>
          <p>Welcome to my learning page for using react.</p>
          <p>First let <strong>ME</strong> introduce you to films that right now popular in Box Office.</p>
        </Jumbotron>
      </div>
    </div>
  );
}

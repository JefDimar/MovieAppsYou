import React from 'react'
import { Card, Button } from "react-bootstrap";

export default function testing() {
  return (
    <div>
        <Navbar bg="dark" fixed="top">
          <Navbar.Brand href="#home">
            <img
              src={ logo }
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <span className="font-weight-bolder text-light navbar-text">React challenge no.1!</span>
        </Navbar>
      </div>
  )
}
// ------------------------------------------------------

import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../logo.svg";

export default function Navigation() {
  function search (e) {
    console.log(e.target.value)
  }

  return (
    <div>
      <Navbar bg="dark" fixed="top">
        <Navbar.Brand href="#home">
          <img
            src={logo}
            width="40"
            height="40"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Nav>
          <span className="font-weight-bolder text-light navbar-text ">
            React challenge!
          </span>
          <Nav.Link className="text-light">Home</Nav.Link>
          <Nav.Link className="text-light">Favorites</Nav.Link>
          <Nav.Link className="text-light">Detail</Nav.Link>
        </Nav>
        <form className="d-flex justify-content-end">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            onChange={search}
          />
          <button className="btn btn-success" type="submit">
            Search
          </button>
        </form>
      </Navbar>
    </div>
  );
}

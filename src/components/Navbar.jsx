import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../logo.svg";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <div>
      <Navbar bg="dark" fixed="top">
        <Navbar.Brand className="disabled mr-auto">
          <img
            src={logo}
            width="40"
            height="40"
            className="d-inline-block align-top disabled"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <div className="d-flex flex-row ml-auto">
          <Nav>
            <span className="font-weight-bolder text-light navbar-text ">
              React challenge!
            </span>
            <NavLink to="/" className="text-light nav-link">
              Home
            </NavLink>
            <NavLink to="/favorite" className="text-light nav-link">
              Favorite
            </NavLink>
          </Nav>
          <form className="d-flex flex-row">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
            />
            <button className="btn btn-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </Navbar>
    </div>
  );
}

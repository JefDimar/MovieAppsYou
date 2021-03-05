import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../logo.svg";
import { NavLink } from "react-router-dom";
import useDebounce from "../hooks/useDebounce";
import { searchMovies, fetchingMovies } from "../store/actions";
import { useDispatch } from "react-redux";

export default function Navigation() {
  const dispatch = useDispatch();
  const [word, setWord] = useState("");
  const data = useDebounce(word, 500);
  const search = (e) => {
    setWord(e.target.value);
  };
  const findMovie = (e) => {
    e.preventDefault();
    const query = data.split(" ").join("%20");
    if (!query) {
      dispatch(fetchingMovies());
    } else {
      dispatch(searchMovies(query));
    }
  };
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
          <form onSubmit={findMovie} className="d-flex flex-row">
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
        </div>
      </Navbar>
    </div>
  );
}

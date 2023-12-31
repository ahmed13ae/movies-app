import React, { useState } from "react";
import styles from "./Navbar.module.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { searchMovies } from "../../store/slices/moviesSlice";

export default function Navbar() {
  const watchList = useSelector((state) => state.watchList);
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();
  return (
    <nav className={`navbar navbar-expand-lg  ${styles.bgNavbar}`}>
      <div className="container">
        <Link className="navbar-brand" to="movies-app">
          Movies
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-3 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="Linkage"
                to="movies-app"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="watchlist">
                Watch List <span className="badge bg-secondary">{watchList.length}</span>
              </Link>
            </li>

            

            <div className=" d-flex px-3" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                className="btn btn-outline-success"
                type="submit"
                onClick={() => dispatch(searchMovies({query: searchQuery }))}
              >
                Search
              </button>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}

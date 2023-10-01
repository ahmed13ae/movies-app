import React from 'react'
import styles from './Navbar.module.scss'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className={`navbar navbar-expand-lg  ${styles.bgNavbar}`}>
      <div className="container">
        <Link className="navbar-brand" to="#">Movies</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-3 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="Linkage" to="home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="watchlist">Watch List</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="movie">Movie</Link>
            </li>

            <li className="nav-item">
              <a className="nav-link" to="#"><i class="fa-brands fa-facebook"></i></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><i class="fa-brands fa-instagram"></i></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><i class="fa-brands fa-youtube"></i></a>
            </li>

            <div className=" d-flex px-3" role="search">
          <input className="form-control me-2" type="search" placeHolder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </div>


          </ul>

        </div>
      </div>
    </nav>

  )
}


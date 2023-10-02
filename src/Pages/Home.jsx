import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { getMovies } from "../api/movies";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../store/slices/moviesSlice";
import { useNavigate } from "react-router-dom";
import PaginationComponent from "../components/PaginationComponent";



export default function Home() {
  // const [movies, setMovies] = useState([]);

  // useEffect(() => {
  //   getMovies(`movie/popular?api_key=${process.env.REACT_APP_TMDB_KEY}`).then((res) => {
  //     setMovies(res.data.results);
  //   });
  // }, []);
  const movies = useSelector((state) => state.movies.movies);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMovies());
  }, []);
  const navigate=useNavigate()
  const redirectToDetails = (id, movieTitle, movie) => {
    navigate(`/movie-details/${id}/${movieTitle}`, { state: { movie } });
  }

  return (
    <>
      <div class="container overflow-hidden text-center">
        
        <div class="row gy-5">
          {movies.map((movie, index) => {
            return (
              <div key={index} class="col-3">
                <div class="p-3">
                  {" "}
                  <Card className="visible" style={{ width: "18rem" }}>
                    <Card.Img
                      className="card-img position-relative"
                      variant="top"
                      src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    />
                    <div
                      className={`rating position-absolute  ${
                        movie.vote_average >= 5 ? "bg-success" : "bg-danger "
                      } rounded-circle fa-1x`}
                      style={{
                        right: "0",
                        top: "10px",
                        color: "white",
                        fontSize: "1.4em",
                      }}
                    >
                      {movie.vote_average}
                    </div>
                    <div className="captions d-flex p-2">
                      <div className="">
                        <h4 onClick={() => redirectToDetails(movie.id, movie.original_title, movie)}>
                          <strong>{movie.original_title}</strong>
                        </h4>
                      </div>
                      <div className="favourites ms-auto ">
                        <i
                          class="fa-regular fa-heart"
                          style={{ fontSize: "2em" }}
                        ></i>
                      </div>
                    </div>
                    <div
                      className="ReleaseDate text-muted px-2"
                      style={{ textAlign: "start" }}
                    >
                      {movie.release_date}
                    </div>
                    <Button className="m-2" variant="warning">Add To Watch List</Button>{' '}
                  </Card>
                </div>
              </div>
            );
          })}
          <PaginationComponent/>
        </div>
      </div>
    </>
  );
}

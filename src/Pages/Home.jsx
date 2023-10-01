import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { getMovies } from "../api/movies";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../store/slices/moviesSlice";

export default function Home() {
  // const [movies, setMovies] = useState([]);

  // useEffect(() => {
  //   getMovies(`movie/popular?api_key=${process.env.REACT_APP_TMDB_KEY}`).then((res) => {
  //     setMovies(res.data.results);
  //   });
  // }, []);
  const movies = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  return (
    <>
      <div class="container overflow-hidden text-center">
        {console.log(movies)}
        <div class="row gy-5">
          {movies.map((movie, index) => {
            return (
              <div class="col-3">
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
                        <h4>
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
                  </Card>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

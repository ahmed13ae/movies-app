import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { addTolist } from "../store/slices/watchListSlice";
import { useState } from "react";
import { useEffect } from "react";
import { getMovies } from "../api/movies";

export default function Movie() {
  const dispatch = useDispatch();
  const location = useLocation();
  const movie = location.state.movie;
  const handleAddToWatchList = (movie) => {
    movie.watched = true;
    dispatch(addTolist(movie));
  };
  const [recs, setRecs] = useState([]);
  useEffect(() => {
    getMovies(
      `movie/${movie.id}/recommendations?api_key=${process.env.REACT_APP_TMDB_KEY}`
    ).then((res) => {
      setRecs(res.data.results);
    });
  }, []);
  const navigate=useNavigate()
  const redirectToDetails = (id, movieTitle, movie) => {
    navigate(`/movie-details/${id}/${movieTitle}`, { state: { movie } });
  }
  return (
    <>
      <div className="w-100 d-flex align-items-center justify-content-center">
        <div className="Poster d-flex w-25">
          <Card style={{ width: "24rem", marginLeft: "50px" }}>
            <Card.Img
              className="position-relative"
              variant="top"
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            />
            <div className="captions d-flex p-2">
              <div className="">
                <h3>
                  <strong>{movie.original_title}</strong>
                </h3>
              </div>
              <div className="favourites ms-auto ">
                {" "}
                {!movie.watched ? (
                  <i
                    class="fa-regular fa-heart"
                    style={{ fontSize: "2em" }}
                  ></i>
                ) : (
                  <i
                    class="fa-solid fa-heart"
                    style={{ fontSize: "2em", color: "#e4ef4e" }}
                  ></i>
                )}
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

        <div className="details w-50 m-5 ">
          <p>{movie.overview}</p>

          <div className="rating-movie">
            <h5 className="text-success">Rating: {movie.vote_average}/10</h5>
          </div>

          <div className="Button mt-4">
            {!movie.watched ? (
              <Button
                className="m-2"
                variant="warning"
                onClick={() => {
                  handleAddToWatchList(movie);
                  console.log(movie);
                }}
              >
                Add To Watch List
              </Button>
            ) : (
              <button className="btn btn-secondary ">
                already in watchlist
              </button>
            )}
          </div>
        </div>
      </div>
      <div class="container overflow-hidden text-center">
        <h2>Recomendations : </h2>
        <div class="row gy-5">
          {recs.length > 0
            ? recs.map((rec, index) => {
                return (
                  <div class="col-3">
                    <div class="p-3">
                      {" "}
                      <Card className="visible" style={{ width: "18rem" }}>
                        <Card.Img
                          className="card-img position-relative"
                          variant="top"
                          src={`https://image.tmdb.org/t/p/w500/${rec.poster_path}`}
                        />
                        <div
                          className="rating position-absolute  bg-success rounded-circle fa-1x"
                          style={{
                            right: "0",
                            top: "10px",
                            color: "white",
                            fontSize: "1.4em",
                          }}
                        >
                          {rec.vote_average}
                        </div>
                        <div className="captions d-flex p-2">
                          <div className="" >
                            <h4 onClick={() =>
                            redirectToDetails(
                              rec.id,
                              rec.original_title,
                              rec
                            )
                          }>
                              <strong>{rec.original_title}</strong>
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
                         {rec.release_date}
                        </div>
                      </Card>
                    </div>
                  </div>
                );
              })
            : console.log("no data yet")}
        </div>
      </div>
    </>
  );
}

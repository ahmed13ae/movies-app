import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { clear } from "../store/slices/watchListSlice";

export default function WatchList() {
  const movies = useSelector((state) => state.watchList);
  const dispatch=useDispatch()
  return (
    <>
      <div class="container overflow-hidden text-center">
        <div class="row gy-5">
        <div className="col-12">
          <button
            type="submit"
            className="btn btn-danger"
            onClick={() => {
              dispatch(clear());
            }}
          >
            Clear Cart
          </button>
        </div>
          {movies.map((movie, index) =>{
            return (
              <div class="col-4" key={index}>
                <div class="p-3">
                  <Card style={{ width: "18rem" }}>
                    <Card.Img
                      className="position-relative"
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
                    <Button className="m-2" variant="danger" >Remove</Button>{' '}
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

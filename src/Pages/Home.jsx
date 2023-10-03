import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { getMovies } from "../api/movies";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, toggleWatched } from "../store/slices/moviesSlice";
import { useNavigate } from "react-router-dom";
import PaginationComponent from "../components/PaginationComponent";
import { addTolist } from "../store/slices/watchListSlice";


export default function Home() {
  
   // const [movies, setMovies] = useState([]);

  // useEffect(() => {
  //   getMovies(`movie/popular?api_key=${process.env.REACT_APP_TMDB_KEY}`).then((res) => {
  //     setMovies(res.data.results);
  //   });
  // }, []);
  const watchlist=useSelector((state) => state.watchList)
  const movies = useSelector((state) => state.movies.movies);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMovies());
  }, []);
  const navigate=useNavigate()
  const redirectToDetails = (id, movieTitle, movie) => {
    navigate(`/movie-details/${id}/${movieTitle}`, { state: { movie } });
  }
    const handleAddToWatchList=(movie)=>{
      dispatch(addTolist(movie))
    }
    const inList=(checkedMovie)=>{
      const foundMovie = watchlist.find(
        (movie) => movie.id === checkedMovie.id
      );
      if (!foundMovie) {
        return true;
    }else{return false;}
  
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
                        <h4
                          onClick={() =>
                            redirectToDetails(
                              movie.id,
                              movie.original_title,
                              movie
                            )
                          }
                        >
                          <strong>{movie.original_title}</strong>
                        </h4>
                      </div>
                      <div className="favourites ms-auto ">
                    {inList(movie)?   
                      <i
                          class="fa-regular fa-heart"
                          style={{ fontSize: "2em" }}
                        ></i>:<i class="fa-solid fa-heart" style={{ fontSize: "2em",color: '#e4ef4e'}}></i>}
                      </div>
                    </div>
                    <div
                      className="ReleaseDate text-muted px-2"
                      style={{ textAlign: "start" }}
                    >
                      {movie.release_date}
                    </div>
                    {inList(movie)?<Button
                      className="m-2"
                      variant="warning"
                      onClick={() => {handleAddToWatchList(movie)
                      console.log(movie)
                      }}
                      
                    >
                      Add To Watch List
                    </Button>:<button  className="btn btn-secondary " >
                     already in watchlist
                                  </button>

                    }
                    
                  </Card>
                </div>
              </div>
            );
          })}
          <PaginationComponent />
        </div>
      </div>
    </>
  );
}

import React from 'react'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useLocation } from 'react-router-dom';


export default function Movie() {
    const location=useLocation()
    const movie = location.state.movie;
    return (
        <>
            <div className='w-100 d-flex align-items-center justify-content-center'>
                {console.log(movie)}
                <div className="Poster d-flex w-25">
                    <Card style={{ width: "24rem", marginLeft: '50px' }}>
                        <Card.Img className="position-relative" variant="top" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
                        <div className="captions d-flex p-2">
                            <div className="" ><h3><strong>{movie.original_title}</strong></h3></div>
                            <div className="favourites ms-auto "><i class="fa-regular fa-heart" style={{ fontSize: '2em' }}></i></div>
                        </div>
                        <div className="ReleaseDate text-muted px-2" style={{ textAlign: 'start' }}>{movie.release_date}</div>
                    </Card>
                </div>


                <div className="details w-50 m-5 ">
                    <p >{movie.overview}</p>

                    <div className="rating-movie">
                        <h5 className='text-success'>Rating: {movie.vote_average}/10</h5>
                    </div>

                    <div className="Button mt-4">
                
                    <Button variant="warning">Add To Watch List</Button>{' '}

                    </div>






                </div>

            </div>
        </>

    )

}

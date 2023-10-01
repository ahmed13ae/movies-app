import React from 'react'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";


export default function Movie() {
    return (
        <>
            <div className='w-100 d-flex align-items-center justify-content-center'>
                <div className="Poster d-flex w-25">
                    <Card style={{ width: "24rem", marginLeft: '50px' }}>
                        <Card.Img className="position-relative" variant="top" src="https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_.jpg" />
                        <div className="captions d-flex p-2">
                            <div className="" ><h4><strong>TiTle Movie</strong></h4></div>
                            <div className="favourites ms-auto "><i class="fa-regular fa-heart" style={{ fontSize: '2em' }}></i></div>
                        </div>
                        <div className="ReleaseDate text-muted px-2" style={{ textAlign: 'start' }}>Aug 25,2023</div>
                    </Card>
                </div>


                <div className="details w-50 m-5 ">
                    <p >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum perspiciatis eos beatae rem cum impedit autem! Vitae cumque labore officia omnis impedit aut, at eligendi quisquam. Itaque commodi similique minima?</p>

                    <div className="rating-movie">
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                    </div>

                    <div className="Button mt-4">
                    <Button variant="warning">Watch</Button>{' '}
                    <Button variant="warning">Add To Watch List</Button>{' '}

                    </div>






                </div>

            </div>
        </>

    )

}

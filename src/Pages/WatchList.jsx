import React from 'react'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";


export default function WatchList() {
  return (
    <>
    
    <div class="container overflow-hidden text-center">
      <div class="row gy-5">
        <div class="col-4">
          <div class="p-3"><Card style={{ width: "18rem" }}>
            <Card.Img className="position-relative" variant="top" src="https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_.jpg" />
            <div className="rating position-absolute  bg-danger rounded-circle fa-1x" style={{ right: '0', top: '10px', color: 'white', fontSize: '1.4em' }}>8.6</div>
            <div className="captions d-flex p-2">
              <div className="" ><h4><strong>TiTle Movie</strong></h4></div>
              <div className="favourites ms-auto "><i class="fa-regular fa-heart" style={{ fontSize: '2em' }}></i></div>
            </div>
            <div className="ReleaseDate text-muted px-2" style={{ textAlign: 'start' }}>Aug 25,2023</div>

          </Card>
          </div>
        </div>
        <div class="col-4">
          <div class="p-3"><Card style={{ width: "18rem" }}>
            <Card.Img className="position-relative" variant="top" src="https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_.jpg" />
            <div className="rating position-absolute  bg-danger rounded-circle fa-1x" style={{ right: '0', top: '10px', color: 'white', fontSize: '1.4em' }}>8.6</div>
            <div className="captions d-flex p-2">
              <div className="" ><h4><strong>TiTle Movie</strong></h4></div>
              <div className="favourites ms-auto "><i class="fa-regular fa-heart" style={{ fontSize: '2em' }}></i></div>
            </div>
            <div className="ReleaseDate text-muted px-2" style={{ textAlign: 'start' }}>Aug 25,2023</div>

          </Card>
          </div>
        </div>
        <div class="col-4">
          <div class="p-3"><Card style={{ width: "18rem" }}>
            <Card.Img className="position-relative" variant="top" src="https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_.jpg" />
            <div className="rating position-absolute  bg-danger rounded-circle fa-1x" style={{ right: '0', top: '10px', color: 'white', fontSize: '1.4em' }}>8.6</div>
            <div className="captions d-flex p-2">
              <div className="" ><h4><strong>TiTle Movie</strong></h4></div>
              <div className="favourites ms-auto "><i class="fa-regular fa-heart" style={{ fontSize: '2em' }}></i></div>
            </div>
            <div className="ReleaseDate text-muted px-2" style={{ textAlign: 'start' }}>Aug 25,2023</div>

          </Card>
          </div>
        </div>
        <div class="col-4">
          <div class="p-3"><Card style={{ width: "18rem" }}>
            <Card.Img className="position-relative" variant="top" src="https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_.jpg" />
            <div className="rating position-absolute  bg-danger rounded-circle fa-1x" style={{ right: '0', top: '10px', color: 'white', fontSize: '1.4em' }}>8.6</div>
            <div className="captions d-flex p-2">
              <div className="" ><h4><strong>TiTle Movie</strong></h4></div>
              <div className="favourites ms-auto "><i class="fa-regular fa-heart" style={{ fontSize: '2em' }}></i></div>
            </div>
            <div className="ReleaseDate text-muted px-2" style={{ textAlign: 'start' }}>Aug 25,2023</div>

          </Card>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

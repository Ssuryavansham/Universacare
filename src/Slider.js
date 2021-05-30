import React from 'react'
import "./slider.css"
import review from "../src/Images/review.png"

const slider = () => {
    return (
      <>
<div class="container-fluid" id="slid">

    <div class="row">
      
     
<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="col-md=6">
  <div className="container" id="slid2">
  <div class="carousel-inner">
    <div class="carousel-item active">
        <div class="col-md-4">
          <img src={review}></img>
       <h5 class="card-title1"></h5>
       </div>
    </div>
    <div class="carousel-item">
         <div class="col-md-4">
         <img src={review}></img>
       <h5 class="card-title1"></h5>
    </div>
    </div>
    <div class="carousel-item">
    <div class="col-md-4">
    <img src={review}></img>
       <h5 class="card-title1"></h5>
    </div>
  </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-visible">Previous Review</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-visible">Next Review</span>
  </button>
  </div>
</div>
</div>
</div>
</div>

      </>

    );
};
export default slider;
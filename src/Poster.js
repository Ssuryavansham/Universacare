
import React from "react"
import "./Poster.css"
import life from "../src/Images/healthcare.svg"



const Poster = () => {
    return (
      <>
      <div className="container-fluid" id="poster1">
      <div class="row">
  <div class="col-sm-6" id="text">
  <div class="card-body">
    <h2 class="card-title">We do Whatever It Makes To</h2><h2>Bring You Peace Of Mind</h2>
    
    <a href="#" class="btn btn-primary">REQUESTE AN APPOINMENT</a>
  </div>
  </div>
  <div class="col-sm-6" id="health">
    
 <img src={life}></img>
 
    
  
  </div>
  </div>
 
  </div>
      </>
    );
};



export default Poster;
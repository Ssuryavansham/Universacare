import React from "react"
import "./Second_body.css"
import feature1 from "../src/Images/feature1.svg"
import feature2 from "../src/Images/feature2.svg"
import feature3 from "../src/Images/feature3.svg"
import right_btn from "../src/Images/chevron-right.svg"


const Second_body = () => {
    return (
      <>
      <div className="container" id="second">
        <div class="row">
  <div class="col-sm-6" id="tx">
  <div class="card-body2">
    <h4 class="card-title">Your peace of mind is our number one priority </h4>
    <p class="card-text" id="tx1">UniversaCare offers a range of services for in-home care. we are your partners in care, and work with you to come up with a plan of action4 </p>
   
  </div>
  </div>
  <div class="col-sm-2"id="an">
    <img src={feature1}></img>
    <h5 class="card-title1">Hourly Home care</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <button id="btn1"><img src= {right_btn}></img></button>
    
  </div>
  <div class="col-sm-2"id="an">
  <img src={feature2}></img>
    <h5 class="card-title1">Hourly Home care</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <button id="btn1"><img src= {right_btn}></img></button>
  
  </div>
  <div class="col-sm-2" id="an">
  <img src={feature3}></img>
    <h5 class="card-title1">Hourly Home care</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <button id="btn1"><img src= {right_btn}></img></button>
  
  </div>
  
 
  </div>

  </div>
   
      </>
    );
};



export default Second_body
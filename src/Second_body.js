import React from "react"
import "./Second_body.css"
import feature1 from "../src/Images/feature1.svg"
import feature2 from "../src/Images/feature2.svg"
import feature3 from "../src/Images/feature3.svg"
import right_btn from "../src/Images/chevron-right.svg"


import feature4 from "../src/Images/feature4.svg"
import feature5 from "../src/Images/feature5.svg"
import feature6 from "../src/Images/feature6.svg"
import phone from "../src/Images/feature-phone.svg"



const Second_body = () => {
    return (
      <>
      <div className="container" id="second">
        <div class="row" id="ro">
  <div class="col-sm-6" id="tx">
  
    <h4 class="card-title">Your peace of mind is <spam>Our number one priority</spam> </h4>
    <p class="card-text" id="tx2">UniversaCare offers a range of services for in-home care. we are your partners in care, and work with you to come up with a plan of action4 </p>
   
  
  </div>
  <div class="col-sm-2">
    <img src={feature1}></img>
    <h5 class="card-title1">Hourly Home care</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <button id="btn1"><img src= {right_btn}></img></button>
    
  </div>
  <div class="col-sm-2">
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

  <div className="container" id="third">
        <div class="row" id="ro2">

  <div class="col-sm-2" id="ca">
  <img src={feature4}></img>
    <h5 class="card-title1">Hourly Home care</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <button id="btn1"><img src= {right_btn}></img></button>
  
  </div>
  <div class="col-sm-2" id="ca">
  <img src={feature5}></img>
    <h5 class="card-title1">Hourly Home care</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <button id="btn1"><img src= {right_btn}></img></button>
  
  </div>
  <div class="col-sm-2" id="ca" >
  <img src={feature3}></img>
    <h5 class="card-title1">Hourly Home care</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <button id="btn1"><img src= {right_btn}></img></button>
  
  </div>
  <div class="col-sm-2" id="ca">
  <img src={feature3}></img>
    <h5 class="card-title1">Hourly Home care</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <button id="btn1"><img src= {right_btn}></img></button>
  
  </div>

  <div class="col-sm-4" id="ca">
  <img src={phone}></img>
    <h5 class="card-title1">Hourly Home care</h5>
    <p>We glade to help</p>
    <a href="#" class="btn btn-primary">CONTACT US</a>
     
  
  </div>
  
 
  </div>

  </div>
   
      </>
    );
};



export default Second_body
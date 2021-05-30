import React from "react"
import feature4 from "../src/Images/feature4.svg"
import "./Forth_body.css"
import carevi1 from "../src/Images/Careviger1.svg"
import carevi2 from "../src/Images/Careviger2.svg"
import carevi3 from "../src/Images/Careviger3.svg"
import carevi4 from "../src/Images/Careviger4.svg"

const Forth_body = () => {
    return (
      <>
      <div className="container-fluid" id="cont">
        
        <p id="head">How we <spam >Find Best Careviger</spam> For You</p>
        <div class="container" id="sym">
         <div class="row">
       <div class="col-sm-3" >
       <img src={carevi1}></img>
       <h5 class="card-title1">1.Initial Consultation</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    

       </div>

       <div class="col-sm-3" >
       <img src={carevi2}></img>
       <h5 class="card-title1">2. Customized Care Plan</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    

       </div>

       <div class="col-sm-3" >
       <img src={carevi3}></img>
       <h5 class="card-title1">3.Caregiver Matching</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    

       </div>

       <div class="col-sm-3" >
       <img src={carevi4}></img>
       <h5 class="card-title1">4. Ongoing Support & Supervision</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    

       </div>
       </div>
       </div>
       </div>
      </>
    );
};


export default Forth_body ;
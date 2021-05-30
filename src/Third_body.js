import React from 'react'
import "./Third_body.css"
import right_btn from "../src//Images/chevron-right.svg"
import feature4 from "../src/Images/feature4.svg"
import feature5 from "../src/Images/feature5.svg"
import feature6 from "../src/Images/feature6.svg"
import feature1 from "../src/Images/feature1.svg"
import phone from "../src/Images/feature-phone.svg"

const Third_body = () => {
    return (
      <>
      <div  className="container">
       <div class="row">
       <div class="col-sm-2" id="col">
       <img src={feature4}></img>
       <h5 class="card-title1">Hourly Home care</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <button id="btn1"><img src= {right_btn}></img></button>

       </div>

       <div class="col-sm-2">
           <img src={feature4}></img>
       <h5 class="card-title1">Hourly Home care</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <button id="btn1"><img src= {right_btn}></img></button>

       </div>


       <div class="col-sm-2">
       <img src={feature5}></img>
       <h5 class="card-title1">Hourly Home care</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <button id="btn1"><img src= {right_btn}></img></button>
          
           </div>
    
           <div class="col-sm-2">
           <img src={feature6}></img>
           <h5 class="card-title1">Hourly Home care</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <button id="btn1"><img src= {right_btn}></img></button>
           
           </div>

           <div class="col-sm-2">
           <img src={feature6}></img>
           <h5 class="card-title1">Hourly Home care</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <button id="btn1"><img src= {right_btn}></img></button>
           
           </div>
         


           <div class="col-sm-2">
            <img src={phone}></img>
           <h5 class="card-title1">Hourly Home care</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <a href="#" class="btn btn-primary">Contact Us</a>
    
           
           </div>
    
    


       </div>
       </div>







       
      
      </>
    );
};



export default Third_body
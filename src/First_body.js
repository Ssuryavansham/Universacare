import React from 'react'
import "./First_body.css"
import poster from "../src/Images/home-hero.png"

const First_body = () => {
    return (
      <>

      <div class="Container" id="first">
           <div class="row">
           
               <div class="col-md-6" id="head">
              
           
      
        <h1 class="card-title">The Future of Health Care is Home Care</h1>
        <p class="card-text">Over a decade of Trusted care</p>
        <a href="#" class="btn btn-primary">REQUEST AN APPOINMENT</a>
      </div>
 
   
    
   
 

  <div class="col-md-6">
      
  <div class="card">
       <img src={poster}></img>
       </div>
        
        </div>
    
  </div>

  </div>



      </>
    );
};

export default First_body;
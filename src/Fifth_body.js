import React from "react"
import "./Fifth_body.css"
import chap from "../src/Images/CHAP.png"

const Fifth_body = () => {
    return (
      <>

         <div className="container-fluid" id="poster">
             <div class="container">
         <div class="row">
       <div class="col-sm-3" id="im">
           <img src={chap}></img>       
       
     </div>

     <div class="col-sm-9" >
       
       <h5 class="card-title2" id="poshe">CHAP Accreditation and this line can be about this big</h5>
      <p class="card-text">UniversaCare, LLC will provide the following home health care programes at flexible scheules and cost-friendly services rates.</p>
    
     </div>

     
     </div>  
     </div>  
     </div>

      </>
       );
    };
    

export default Fifth_body ;
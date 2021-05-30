import React from "react"
import "./Album_body.css"
import pic1 from "../src/Images/pic1.jpeg"
import pic2 from "../src/Images/pic2.jpeg"
import pic3 from "../src/Images/pic3.jpeg"
import pic4 from "../src/Images/pic4.jpeg"
import pic5 from "../src/Images/pic5.jpeg"
import pic6 from "../src/Images/pic6.jpeg"


const Album_body = () => {
    return (
      <>
   <div className="container-fluid" id="po">
      <div class="row">
         <div class="col-sm-4" >
            <img src={pic1}>

            </img>
         </div>
         <div class="col-sm-4">
            <img src={pic1}>
               
            </img>
         </div>
         <div class="col-sm-4">
            <img src={pic1}>
               
            </img>
         </div>

      </div>
   </div>
   </>
);
};
export default Album_body;
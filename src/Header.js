import React from 'react'
import "./Header.css"
import Images from "../src/Images/circle-infor.svg"
const Header = () => {
    return (
      <>
     <div className="cont">
     <img src = {Images}></img> <p>READ ABOUT OUR COVID-19 PRECAUTIONS</p> 
     </div>
      </>
    );
};



export default Header;
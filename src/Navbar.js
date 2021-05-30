import React from 'react'
import "./Navbar.css"
import Images from "../src/Images/phone.svg"
import logo from "../src/Images/UCLogo.svg"
const Navbar = () => {
    return (
      <>

  <nav  className="navbar navbar-expand-lg navbar-light bg-white" >
  <div  className="container-fluid">
    <a  className="navbar-brand" href="#"><img src={logo}></img></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span  className="navbar-toggler-icon"></span>
    </button>
    <div  className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul  className="navbar-nav mb-2 mb-lg-0">
        <li  className="nav-item">
          <a  className="nav-link active" aria-current="page" href="#">ABOUT</a>
        </li>

        <li  className="nav-item">
          <a  className="nav-link active" aria-current="page" href="#">SERVICES</a>
        </li>

        <li  className="nav-item">
          <a  className="nav-link active" aria-current="page" href="#">RESOURCES</a>
        </li>

        <li  className="nav-item">
          <a  className="nav-link active" id="car" aria-current="page" href="#">CAREERS</a>
        </li>

        <li  className="nav-item">
          <a  className="nav-link active" id="home"aria-current="page" href="#">HOME CARE HEROES</a>
        </li>

        <li  className="nav-item">
          <a  className="nav-link active" id="contact"aria-current="page" href="#">CONTACT</a>
        </li>

        
      </ul>
      <form class="d-flex">
          <img src = {Images}></img> <p> 866-986-3356</p>
        
      </form>
      
    </div>
  </div>
</nav>
      </>
    );
};



export default Navbar;
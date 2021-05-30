import React from 'react'
import "./Footer.css"
const Footer = () => {
    return (
      <>
      <div className="container-fluid">
          <div class="row">
      <div class="col-3  col-md" id="fot">
        <h5>HEADQUARTERS</h5>
        <ul class="list-unstyled text-small">
          <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">246-50 57th Drive</a></li>
          <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Douglaston, NY 11362</a></li>
          <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">hello@universacare.com</a></li>
          <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">P:(718) 224-3758</a></li>
          <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">f:8777999065</a></li>
          <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Last time</a></li>
        </ul>
      </div>
      <div class="col-3  col-md">
        <h5>SERVICES</h5>
        <ul class="list-unstyled text-small">
          <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Hourly Care</a></li>
          <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Daily Care</a></li>
          <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Hospital to Home</a></li>
          <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Specialized Care</a></li>
        </ul>
      </div>
      <div class="col-3  col-md">
        <h5>COMPANY</h5>
        <ul class="list-unstyled text-small">
          <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">About Us</a></li>
          <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Location</a></li>
          <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Caregiver</a></li>
          <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Contact Us</a></li>
        </ul>
        
      </div>
      <div class="col-3 col-md">
        <p>Sign up to recive the latest articies</p>
        <ul class="list-unstyled text-small">
        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
        
        </input>
        <button class="w-50 btn btn-lg btn-primary" type="submit">Sign in</button>
        </ul>
      </div>

     
      </div>
      </div>
  



</>
);
};
export default Footer;
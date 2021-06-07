import React from 'react';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from "./Navbar";
import Header from "./Header";
import Maplocater from "./Maplocater";
import First_body from "./First_body";
import Second_body from "./Second_body";

import Forth_body from "./Forth_body";
import Fifth_body from './Fifth_body';
import Slider from "./Slider";
import Album_body from "./Album_body";
import Poster from "./Poster";
import Footer from "./Footer";
import { Route, Switch } from 'react-router';


const App = () => {
    return (
      <>
      
        <Header />
        <Navbar/>
         <First_body  />
         <Maplocater />
         <Second_body />
         <Forth_body />
         <Fifth_body />
       
       
       

      </>
    );
};



export default App;
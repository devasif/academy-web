import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import logo from "../../image/study.png";
import "../Home/home.css";
const Header =()=>{
  
       return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" className="navbar-brand" href="#"><img src={logo} alt="logo" /></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item ">
              <Link to="/" className="nav-link color-1" href="#">Home </Link>
            </li>
            <li className="nav-item">
            <Link to="/" className="nav-link color-2" href="#">About </Link>
            </li> 
            <li className="nav-item">
            <Link to="/" className="nav-link color-3" href="#">Student list </Link>
            </li>
            <li className="nav-item">
            <Link to="/result" className="nav-link color-4" href="#">Result </Link>
            </li> 
            <li className="nav-item">
            <Link to="/" className="nav-link color-5" href="#">Contact Us </Link>
            </li>
           
           
          </ul>
          <form className="form-inline my-2 my-lg-0 d-flex">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
    )
}

export default Header;
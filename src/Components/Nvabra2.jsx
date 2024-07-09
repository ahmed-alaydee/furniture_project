import React from 'react';
import "./Navbarto.css";

function Navbarr() {
  return (
    <>
      <div className="nav_bar">
        <div className="container_nav">
          <a className="nav-link active" href="#">Home</a>
          <a href="home" className="nav-link">Shop</a>
          <a className="nav-link" href="#">Top Chair</a>
          <a className="nav-link" href="#">Chair</a>
          <a className="nav-link" href="#">Brands</a>
          <a className="nav-link" href="#">Contact</a>
          <a href="About" className="nav-link">About</a>
        </div>
      </div>
    </>
  );
}

export default Navbarr;



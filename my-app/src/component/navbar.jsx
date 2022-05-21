import React, { Component } from 'react';



// delete class function and create stateless function component

const NavBar = (props) => {
  return ( (<nav className="d-flex flex-row navbar navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
  </div>
  <div className="badge rounded-pill bg-info text-dark">
    {props.pruductsCount}
  </div>
</nav>) );
}
 

 
export default NavBar;
import React from 'react';
import { NavLink } from 'react-router-dom';




// delete class function and create stateless function component

const NavBar = (props) => {
  return ( 
    (<nav className="col-12 text-capitalize d-flex flex-row navbar navbar-dark bg-secondary">
        <div className="container-fluid text-dark fw-bold">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <NavLink className="nav-link link-light" to="./menu"> menu</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link link-light" to=""> home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link link-light" to="./contact">contact</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link link-light" to="./about">about</NavLink> 
            </li>
            <li className="nav-item">
              <NavLink className="nav-link link-light"  to="./shoppingCart">shopping cart</NavLink>
            </li>
          </ul>
          <div className="badge rounded-pill bg-info text-dark">
            {props.pruductsCount}
          </div>
        </div>
    </nav>) 
);
}
 

 
export default NavBar;
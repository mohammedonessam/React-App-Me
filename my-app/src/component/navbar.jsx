import React from 'react';
import { NavLink } from 'react-router-dom';




// delete class function and create stateless function component

const NavBar = (props) => {
  return ( 
    (<nav className="text-uppercase d-flex flex-row navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <NavLink className="nav-link"  to="./shoppingCart">shopping cart</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to=""> home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="./contact">contact</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link " to="./about">about</NavLink> 
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
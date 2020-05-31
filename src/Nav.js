import React from 'react';
import {NavLink}from 'react-router-dom'


function Nav() {
  return (
  <nav>
    <NavLink to="/" activeStyle={{color: 'purple'}}>
    <h3>Logo</h3>
    </NavLink>
    <ul className="nav-links">
        <NavLink to='/about' activeStyle={{fontWeight: 'bold', color: "red"}}>
        <li>About</li>
        </NavLink>
        <NavLink to='/shop' activeStyle={{fontWeight: 'bold', color: "red"}}>
        <li>Shop</li> 
        </NavLink>
        
        
    </ul>
  </nav>
  );
}

export default Nav;

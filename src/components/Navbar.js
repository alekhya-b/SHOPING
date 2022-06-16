import React from 'react';
import {Link} from "react-router-dom";
import './styles/Navbar.css';

function Navbar() {
  return (
    <div className='navbar'>
      <div className='leftSide'>
        <img src='https://www.leadershipgirl.com/wp-content/uploads/2017/08/Leadership_Girl-Logo-Transparent.png'/>
     
      </div>
      <div className="rightSide">
        <Link to="/"> HOME </Link>
         <Link to="/menu"> MENU </Link>
        <Link to="/about"> ABOUT </Link>
        <Link to="/contact"> CONTACT </Link> 
        <i className="bi bi-basket"></i>
    </div>
    </div>
  );
}

export default Navbar;

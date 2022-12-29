import React from "react";
import { Link } from "react-router-dom";
import { Home as HomeIcon } from '@mui/icons-material';
import Home from "./home";
import '../css/navbar.css'


const NavBar = () =>{

  return (
    <div className="navbar">
      <h1 className="title" >Instagram</h1>
      <input type="text" name="Search" placeholder="Search" id="search" className="search"/>
      <div className="home"><Link to='/Home'><HomeIcon /></Link></div>
      <button className="Btn"><Link to='/Login' className="btnn" >Login</Link></button>
      <button className="Btn" ><Link to='/Register' className="btnn" >Register</Link></button>
      {/* <Link to='/Home'>Home</Link>
      <Link to='/Home'>Home</Link> */}
      {/* <a></a>
      <a></a> */}

    </div>
  )
}

export default NavBar;
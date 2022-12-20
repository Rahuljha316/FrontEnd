import React from "react";
import { Link } from "react-router-dom";
import { Home as HomeIcon } from '@mui/icons-material';
import Home from "./home";

const NavBar = () =>{

  return (
    <div className="navbar">
      <h1 className="title" >Instagram</h1>
      <input type="text" name="Search" placeholder="Search"/>
      <Link to='/Home'><HomeIcon /></Link>
      <button><Link to='/Login'>Login</Link></button>
      <button><Link to='/Register'>Register</Link></button>
      {/* <Link to='/Home'>Home</Link>
      <Link to='/Home'>Home</Link> */}
      {/* <a></a>
      <a></a> */}

    </div>
  )
}

export default NavBar;
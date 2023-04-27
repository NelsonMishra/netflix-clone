import React from 'react'
import logo from "./Image/NetFlixLogo.png"
import { Link } from 'react-router-dom'
import {RiSearchLine} from "react-icons/ri"

const Header = () => {
    
  return (
    <nav className="header">
    <img src={logo} alt="logo" />

    <div>
        <Link to="/tvshowa">TV Shows</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/recent">Recently Added</Link>
        <Link to="/mylist">My List</Link>

    </div>
    <RiSearchLine />
    </nav>
  )
}

export default Header;
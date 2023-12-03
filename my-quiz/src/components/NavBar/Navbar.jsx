import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.scss'


const Navbar = () => {
  return (

      <nav>
    <div className="logo">
      <Link to="/">
        <div className="arrow-down"></div>
      </Link>
    </div>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
    </ul>
  </nav>
        
  )
}

export default Navbar
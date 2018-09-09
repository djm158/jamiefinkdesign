import React from 'react'
import { Link } from 'gatsby'

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-start">
        <Link className="navbar-item" to="#ui">
          ui
        </Link>
        <Link className="navbar-item" to="#video">
          video
        </Link>
        <Link className="navbar-item" to="#photo">
          photo
        </Link>
        <Link className="navbar-item" to="#contact">
          contact
        </Link>
      </div>
    </div>
  </nav>
)

export default Navbar

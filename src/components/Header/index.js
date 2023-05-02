/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => (
  <header>
    <img src="https://example.com/logo.png" alt="wave" />
    <h1 className="heading">Wave</h1>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  </header>
)
export default Header

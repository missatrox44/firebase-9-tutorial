import React from 'react'
import { Link } from 'react-router-dom'

//create three links to three different routes
//logout - firebase auth functionality
export default function Navbar() {
  return (
    <nav>
      <h1>My Reading List</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Signup</Link></li>
        <li>Logout</li>
      </ul>
    </nav>
  )
}

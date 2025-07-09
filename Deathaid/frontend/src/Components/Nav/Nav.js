import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'

export const Nav = () => {
  return (
    <div>
      <ul className="home-ul">
        <li className="home-li">
            <Link to="/Home">
            <h2>Home</h2>
            </Link>
        </li>
        <li className="home-li">
          <Link to="/DeathaidHomePage">
          <h2>Deathaid</h2>
          </Link>
        </li>
        <li className="home-li">
          <Link to="/summary">
          <h2>Summary</h2>
          </Link>
        </li>
      </ul>

    </div>
  )
}

// Componente title
import './Title.css';
import { Link } from 'react-router-dom'

import React from 'react'

function Title() {
  return (
    <div className="Title">
      <header>
        <h1>Pimubi</h1>
        <div className="Title-Subtitle">E-comerce made with React</div>

        <div>
          <Link  className='nav-link'  activeClassName="nav-link-active" to="/">Inicio</Link>
          <Link className='nav-link'  activeClassName="nav-link-active" to="/About">About</Link>
          
        </div>
      </header>
    </div>
  )
}

export default Title
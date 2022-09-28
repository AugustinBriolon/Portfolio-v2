import React from 'react'
import { useState } from 'react'
import Logo from "../../assets/logo/AB.svg"

export default function Nav() {

  const [showLinks, setShowLinks] = useState(false)

  const hangleShowLinks = () => {
    setShowLinks(!showLinks)
  }

  return (
    <nav className={`section ${showLinks ? "showNav" : "hidden" } navbar`}>
      <div className="navLogo">
        <a href="/">
          <img src={Logo} alt="Augustin Briolon Logo" />
        </a>
      </div>
      <ul className="navListLinks">
        <li className="navItem">
          <a href="/" className='navLinks'>Projets</a>
        </li>
        <li className="navItem">
          <a href="/" className='navLinks'>Contact</a>
        </li>
      </ul>
      <button className='navBurger' onClick={hangleShowLinks}>
        <span className='burgerBar'></span>
      </button>
    </nav>
  )
}

import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './CosmosNavlink.css'

const CosmosNavlink = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNavClick = () => {
    setMenuOpen(false)
  }

  return (
    <header className="cosmos-navbar">
      <div className="cosmos-navbar__brand">
        <span className="cosmos-navbar__logo">Cosmos</span>
        <button
          className="cosmos-navbar__toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="cosmos-navbar__hamburger" />
        </button>
      </div>

      <nav className={`cosmos-navbar__nav ${menuOpen ? 'open' : ''}`}>
        <NavLink
          to="/product"
          className={({ isActive }) =>
            `cosmos-navbar__link${isActive ? ' active' : ''}`
          }
          onClick={handleNavClick}
        >
          Product
        </NavLink>
        <NavLink
          to="/product/create"
          className={({ isActive }) =>
            `cosmos-navbar__link${isActive ? ' active' : ''}`
          }
          onClick={handleNavClick}
        >
          Create Product
        </NavLink>
        <NavLink
          to="/user"
          className={({ isActive }) =>
            `cosmos-navbar__link${isActive ? ' active' : ''}`
          }
          onClick={handleNavClick}
        >
          User
        </NavLink>
        <NavLink
          to="/user/create"
          className={({ isActive }) =>
            `cosmos-navbar__link${isActive ? ' active' : ''}`
          }
          onClick={handleNavClick}
        >
          Create User
        </NavLink>
        <NavLink
          to="/school"
          className={({ isActive }) =>
            `cosmos-navbar__link${isActive ? ' active' : ''}`
          }
          onClick={handleNavClick}
        >
          School
        </NavLink>
        <NavLink
          to="/school/create"
          className={({ isActive }) =>
            `cosmos-navbar__link${isActive ? ' active' : ''}`
          }
          onClick={handleNavClick}
        >
          Create School
        </NavLink>
      </nav>
    </header>
  )
}

export default CosmosNavlink
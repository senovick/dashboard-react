import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [visible, setVisible] = useState(false);

  const toggleMenu = () => {
    setVisible(!visible)
  }

  return (
    <>
      <header className={`header ${visible ? "active" : ""}`} data-header>
        <div className="container">
          <h1>
            <a href="#" className="logo">Dashboard</a>
          </h1>

          <button className="menu-toggle-btn icon-box" data-menu-toggle-btn onClick={toggleMenu}>
            <span className="material-symbols-rounded icon">menu</span>
          </button>

          <nav className="navbar">
            <div className="container">
              <ul className="navbar-list">
                <li>
                  <NavLink exact="true" className={({isActive}) => isActive ? 'navbar-link icon-box active' : 'navbar-link icon-box'} to="/">
                    <span className="material-symbols-rounded icon">grid_view</span>
                    <span>Home</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink className={({isActive}) => isActive ? 'navbar-link icon-box active' : 'navbar-link icon-box'} to="/projects">
                    <span className="material-symbols-rounded icon">folder</span>
                    <span>Projects</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink className={`navbar-link icon-box ${window.location.hash === '#tasks' ? 'active' : ''}`} to="/tasks">
                    <span className="material-symbols-rounded icon">list</span>
                    <span>Tasks</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink className={({isActive}) => isActive ? "navbar-link icon-box active" : "navbar-link icon-box"} to="/reports">
                    <span className="material-symbols-rounded icon">bar_chart</span>
                    <span>Reports</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink className={({isActive}) => isActive ? "navbar-link icon-box active" : "navbar-link icon-box"} to="/settings">
                    <span className="material-symbols-rounded icon">settings</span>
                    <span>Settings</span>
                  </NavLink>
                </li>
              </ul>

              <ul className="user-action-list">
                <li>
                  <NavLink href="#" className="notification icon-box">
                    <span className="material-symbols-rounded icon">notifications</span>
                  </NavLink>
                </li>
                <li>
              <a href="#" className="header-profile">

                <figure className="profile-avatar">
                  <img src="./assets/images/avatar-3.jpg" alt="John Smith" width="32" height="32" />
                </figure>

                <div>
                  <p className="profile-title">Sean N</p>

                  <p className="profile-subtitle">Admin</p>
                </div>
              </a>
            </li>                
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header
import React, { useContext, useState } from 'react'
import { NavLink } from "react-router-dom";
import { AuthContext } from '../context/AuthContext';
import { FavoriteListContext } from '../context/FavoriteListContext';
import {TbCameraPlus, TbHeart, TbUserCircle, TbMenu2 } from "react-icons/tb";


const Navbar = () => {
  const { currentUser } = useContext(AuthContext);
  const { listItems } = useContext(FavoriteListContext)
  const [showNavbar, setShowNavbar] = useState(false)

  //Opens and closes navbar when pressing the menu icon. 
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className="navbar">
      <div className="container-nav">
        <div className="menu-icon" onClick={handleShowNavbar}>
          <TbMenu2 size="30px" strokeWidth="1"/>
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
            {currentUser
            ? <NavLink className="text-dark" to="/skapa-annons"><TbCameraPlus size="36px" strokeWidth="1" />Skapa annons</NavLink>
            : <NavLink className="text-dark" to="/login"><TbCameraPlus size="36px" strokeWidth="1" />Skapa annons</NavLink>} 
            </li>
            <li>
            { currentUser === null
              ? <span className=''></span>
              : <span className='count bg-accent'>{listItems.length}</span>
            }
              <NavLink className="text-dark" to="/mina-sidor/sparade-annonser"><TbHeart size="36px" strokeWidth="1" />Sparade annonser </NavLink>
            </li>
            <li>
              {currentUser
                ? <NavLink className="text-dark" to="/mina-sidor"><TbUserCircle size="36px" strokeWidth="1" />Mina Sidor</NavLink>
                : <NavLink className="text-dark" to="/login"><TbUserCircle size="36px" strokeWidth="1" />Registera / logga in</NavLink>}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
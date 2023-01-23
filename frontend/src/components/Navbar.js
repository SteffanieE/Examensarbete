import React, { useContext } from 'react'
import { NavLink } from "react-router-dom";
import { AuthContext } from '../context/AuthContext';
import { FavoriteListContext } from '../context/FavoriteListContext';
import {TbCameraPlus, TbHeart, TbUserCircle } from "react-icons/tb";


const Navbar = () => {

  const { currentUser } = useContext(AuthContext);
  const { cartItems } = useContext(FavoriteListContext)

  return (
    <nav className="primary-navigation underline-indicators flex">
      {currentUser
        ? <NavLink className="text-dark" to="/skapa-annons"><TbCameraPlus size="30px" strokeWidth="1" />Skapa annons</NavLink>
        : <NavLink className="text-dark" to="/login"><TbCameraPlus size="30px" strokeWidth="1" />Skapa annons</NavLink>} 
        
          <NavLink className="text-dark" to="/mina-sidor"><TbHeart size="30px" strokeWidth="1" />Sparade annonser </NavLink>

      {currentUser
        ? <NavLink className="text-dark" to="/mina-sidor"><TbUserCircle size="30px" strokeWidth="1" />Mina Sidor</NavLink>
        : <NavLink className="text-dark" to="/login"><TbUserCircle size="30px" strokeWidth="1" />Registera / logga in</NavLink>}
     
      {/* <li className="text-dark letter-spacing-1"><span>{cartItems.length}</span></li> */}
    </nav>
  )
}

// {cartItems.length}

export default Navbar
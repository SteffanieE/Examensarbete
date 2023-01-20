import React, { useContext } from 'react'
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from '../context/AuthContext';
import { FavoriteListContext } from '../context/FavoriteListContext';
import {TbCameraPlus, TbUserCircle } from "react-icons/tb";


const Navbar = () => {

  const { currentUser } = useContext(AuthContext);
  const { cartItems } = useContext(FavoriteListContext)

  return (
    <nav className="primary-navigation underline-indicators flex">
    
        <NavLink className="text-dark" to="/annonser/skapa"><TbCameraPlus size="30px" strokeWidth="1" />Skapa annons</NavLink>
    
     {currentUser
        ? <NavLink className="text-dark" to="/mina-sidor"><TbUserCircle size="30px" strokeWidth="1" />Mina Sidor</NavLink>
        : <NavLink className="text-dark" to="/login"><TbUserCircle size="30px" strokeWidth="1" />Registera / logga in</NavLink>}
     

       

     
      {/* <li className="text-dark letter-spacing-1"><span>{cartItems.length}</span></li> */}
    </nav>
  )
}

export default Navbar
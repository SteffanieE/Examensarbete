import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import { AuthContext } from '../context/AuthContext';
import { FavoriteListContext } from '../context/FavoriteListContext';
import {TbCameraPlus, TbUserCircle } from "react-icons/tb";

const Navbar = () => {

  const { currentUser } = useContext(AuthContext);
  const { cartItems } = useContext(FavoriteListContext)

  return (
    <ul className="primary-navigation underline-indicators flex">
      <li>
        <Link className="text-dark" to="/annonser/skapa"><TbCameraPlus size="30px" strokeWidth="1" />Skapa annons</Link>
      </li>
      <li> {currentUser
        ? <Link className="text-dark" to="/mina-sidor"><TbUserCircle size="30px" strokeWidth="1" />Mina Sidor</Link>
        : <Link className="text-dark" to="/login"><TbUserCircle size="30px" strokeWidth="1" />Registera / logga in</Link>}
      </li>
     
      {/* <li className="text-dark letter-spacing-1"><span>{cartItems.length}</span></li> */}
    </ul>
  )
}

export default Navbar
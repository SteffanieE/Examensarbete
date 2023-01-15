import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import { AuthContext } from '../context/AuthContext';
import { FavoriteListContext } from '../context/FavoriteListContext';


const Navbar = () => {
  const { currentUser } = useContext(AuthContext);
  const {cartItems}  = useContext(FavoriteListContext)

  return (
    <div> 
        <ul> 
            <li> {currentUser? <Link to="/mina-sidor">Mina Sidor</Link> : <Link to="/loggain">Logga in / Registera</Link> }</li>
            <li> <Link to="/annonser/skapa">Skapa annons</Link></li>
            <li><span>{cartItems.length}</span></li>
        </ul>  
    </div>
  )
}

export default Navbar
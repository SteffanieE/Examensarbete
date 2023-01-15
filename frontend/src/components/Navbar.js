import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import { AuthContext } from '../context/AuthContext';
import { FavoriteListContext } from '../context/FavoriteListContext';

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);
  const {cartItems}  = useContext(FavoriteListContext)


   return (
    <div> 
      
        <ul>

            <li> <Link to="/">Hem</Link></li>
            <li> <Link to="/annonser">Annonser</Link></li>
          
            <li> {currentUser? <Link to="/mina-sidor">Mina Sidor</Link> : <Link to="/loggain">Logga in / Registera</Link> }</li>
        
           
            <span>{cartItems.length}</span>
            
        </ul>
        
    </div>
  )
}

export default Navbar
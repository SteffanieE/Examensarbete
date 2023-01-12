import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);
   return (
    <div> 
        <ul>
            <li> <Link to="/">Hem</Link></li>
            <li> <Link to="/annonser">Annonser</Link></li>
            <Link className="link" to="/?cat=mat">
            <h6>mat</h6>
          </Link>
            <li> {currentUser? <Link to="/mina-sidor">Mina Sidor</Link> : <Link to="/loggain">Logga in</Link> }</li>
            <li> <Link to="/registera">Register</Link></li>
           

            
        </ul>
        
    </div>
  )
}

export default Navbar
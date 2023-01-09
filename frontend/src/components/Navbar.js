import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);
   return (
    <div> 
        <ul>
            <li> <Link to="/">Home</Link></li>
            <li> <Link to="/ads">Ads</Link></li>
            <li> {currentUser? <span onClick={logout}>Logga ut {currentUser.email}</span> : <Link to="/login">Login</Link> }</li>
            <li> <Link to="/register">Register</Link></li>
        </ul>
        
    </div>
  )
}

export default Navbar
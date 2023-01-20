import React from 'react'
import { Link } from "react-router-dom";
import Navbar from './Navbar'
import logo from '../images/logo.png'
import Breadcrumbs from './Breadcrumbs';



const Header = () => {

  return (
    <header className="primary-header flex">
      <Navbar />
      <div className='container'>
        <Link to="/"><img src={logo} alt='logo' /></Link>
      </div>
      {/* <Breadcrumbs /> */}
    </header>
  )
}

export default Header
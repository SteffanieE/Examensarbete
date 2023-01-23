import React from 'react'
import { Link } from "react-router-dom";
import Navbar from './Navbar'
import logo from '../images/logo.png'
import Breadcrumbs from './Breadcrumbs';
import SideNav from './SideNav';



const Header = () => {

  return (
    <header className="primary-header flex">
      <SideNav />
      <Navbar />
      <div className='container'>
        <Link to="/"><img src={logo} alt='logo' /></Link>
      </div>
      {/* <Breadcrumbs /> */}
    </header>
  )
}

export default Header
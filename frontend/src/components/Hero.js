import React from 'react'
import { Link } from 'react-router-dom';
import {useState, useEffect, useContext} from 'react'
import { AuthContext } from "../context/AuthContext.js";

const Hero = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <section className='flex hero-image'>
        <div className="hero-text flex text-dark">
            <h2 className='fs-600 ff-sans-cond'>Släng inte – återbruka!</h2>
            <p>När skänker direkt till andra privatpersoner slipper 
            du dessutom att själv transportera bort ditt återbruk</p>
          {currentUser === null ?
            <Link className="text-dark" to={`/login`}><button className='large-button'>Skapa annons</button></Link>
            :
            <Link className="text-dark" to={`/skapa-annons`}><button className='large-button'>Skapa annons</button></Link>
          }  
        </div>
  </section>
  )
}

export default Hero
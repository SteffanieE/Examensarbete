import React from 'react'
import { Link } from 'react-router-dom';

const Hero = () => {


  return (
    <section className='hero-image'>
        <div className="hero-text flex text-dark">
            <h2 className='fs-600 ff-sans-cond'>Släng inte – återbruka!</h2>
            <p>När skänker direkt till andra privatpersoner slipper 
            du dessutom att själv transportera bort ditt återbruk</p>
            <Link className="text-dark" to="/annonser/skapa"><button className='large-button'>Skapa annons</button></Link>
        </div>
  </section>
  )
}

export default Hero
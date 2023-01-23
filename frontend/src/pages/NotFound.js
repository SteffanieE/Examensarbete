import React from 'react'
import { Link } from 'react-router-dom'
import './NotFound.css';

const NotFound = () => {
  return (
    <section className='flex not-found-page'>
      <div className='flex not-found-div'>
        <h2 className='ff-indie-flower fs-700 text-accent'>HOPPSAN, NÅGOT GICK FEL!</h2>
        <p>Vi kunde inte hitta sidan som du letade efter</p>
        <Link to="/" className="large-button">STARTSIDAN</Link>
      </div>
    </section>
  )
}

export default NotFound
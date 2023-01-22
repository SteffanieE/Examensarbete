import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className=''>
      <h2>HOPPSAN, NÅGOT GICK FEL!</h2>
      <p>Vi kunde inte hitta sidan som du letade efter</p>
      <Link to="/" className="large-button">STARTSIDAN</Link>
    </div>
  )
}

export default NotFound
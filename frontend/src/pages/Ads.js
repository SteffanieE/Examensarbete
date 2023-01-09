import React from 'react'
import { Link } from "react-router-dom"

const Ads = () => {
  return (
    <div>
        <h1>All Ads</h1>
        <Link to="/ads/1">Ad 1</Link>
        <Link to="/ads/2">Ad 2</Link>
    </div>
  )
}

export default Ads
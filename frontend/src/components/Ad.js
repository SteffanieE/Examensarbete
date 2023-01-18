/* import React from 'react'
import {useState, useEffect, useContext} from 'react'
import { Link, useLocation } from "react-router-dom"
import moment from "moment";
import { FaHeart } from 'react-icons/fa';
import { FavoriteListContext } from '../context/FavoriteListContext';

const Ad = ({ad}) => {

  const {addItem} = useContext(FavoriteListContext)



  

 
  return (
    <div className="ad" key={ad.id}>
          <Link className="link" to={`/annonser/${ad.id}`}>
            <h1>{ad.title}</h1>
          </Link>
          <p>Datum {moment(ad.date).format("YYYY-MM-DD HH:mm")}</p>
          <div className="img">
            <img src={`../upload/${ad.img_url}`} alt={ad.title} />
          </div>
          <p>{ad.category}</p>
          <p>{ad.city}</p>
          
         
          <button
            
            onClick={(e) => {e.preventDefault(); addItem(ad)}}
            
            >
             <FaHeart />
            </button>
          
        </div>
  )
}

export default Ad */
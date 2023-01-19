import React from 'react'
import {useState, useEffect, useContext} from 'react'
import { Link, useLocation } from "react-router-dom"
import moment from "moment";
import { FaHeart } from 'react-icons/fa';
import { FavoriteListContext } from '../context/FavoriteListContext';
import { AuthContext } from "../context/AuthContext.js";

const AdsList = ({ads}) => {
  
/*   const getText = (html) =>{
    const doc = new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent
  } */

  const {cartItems, addItem} = useContext(FavoriteListContext);
  const { currentUser } = useContext(AuthContext);


  


  console.log(cartItems)
  return (
      <ul className='grid ads-container bg-white'>
        {
          ads.map((ad) => 
          
          <li className='card' key={ad.id}>
            <div className='heart-icon-container'>
              {cartItems.find(x => x.id === ad.id)
                ? <FaHeart className='text-accent' onClick={(e) => {e.preventDefault(); addItem(ad)}} size="30px" strokeWidth="1" outline='black' />
                : <FaHeart onClick={(e) => {e.preventDefault(); addItem(ad)}} size="30px" strokeWidth="8" fill='none' outline='black' />
              }
            </div>
            
            <div className="ad-img-container">
              <img src={`../upload/${ad.img_url}`} alt={ad.title} />
            </div>
            
            <div className='flex fs-200'>
              <p className='uppercase'>{ad.city}</p> 
              <p>Datum {moment(ad.date).format("YYYY-MM-DD HH:mm")}</p>
            </div>
            <h1>{ad.title}</h1>
          
            
            {/* <p>{getText(ad.description)}</p> */}
              
            {currentUser === null? 
              
              <Link className="link text-dark" to={`/login`}>Loga in för mer info</Link>
             
              
           
            :  
              <Link className="link text-dark" to={`/annonser/${ad.id}`}>MER INFO</Link>
              
            
          }
            

          </li>
          
          
          
          )
        }
      </ul>
    )
}

export default AdsList
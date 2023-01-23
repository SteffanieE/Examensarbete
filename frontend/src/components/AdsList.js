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
      <ul className='ads-list bg-white'>
        {
          ads.map((ad) => 
          
          <li className='card' key={ad.id}>
           
            
            <div className="ad-image">
              <img src={`../upload/${ad.img_url}`} alt={ad.title} />
            </div>

            
            
            <div className='ad-info fs-200'>

              <div className='heart-icon-container'>
                {cartItems.find(x => x.id === ad.id)
                  ? <FaHeart className='text-accent' onClick={(e) => {e.preventDefault(); addItem(ad)}} size="30px" strokeWidth="1" outline='black' />
                  : <FaHeart onClick={(e) => {e.preventDefault(); addItem(ad)}} size="30px" strokeWidth="8" fill='none' outline='black' />
                }
              </div>
              <div>
                <h3 className='uppercase'>{ad.city}</h3> 
                <p>Inlagd: {moment(ad.date).format("YYYY-MM-DD HH:mm")}</p>
              </div>
              
              <h1>{ad.title}</h1>
            </div>
          
          
            
            {/* <p>{getText(ad.description)}</p> */}
              
        
         
              <Link className="link large-button-primary fs-300" to={`/kategori/${ad.slug}/${ad.id}`}>MER INFO</Link>
          
            

          </li>
          
          
          
          )
        }
      </ul>
    )
}

export default AdsList
import React from 'react'
import { useContext } from 'react';
import { Link, useLocation } from "react-router-dom"
import moment from "moment";
import { FaHeart } from 'react-icons/fa';

import { FavoriteListContext } from '../context/FavoriteListContext';

const FavoriteAds = () => {

  const {cartItems, addItem}  = useContext(FavoriteListContext)
 
 // console.log(cartItems)
  return (
    <div>
      <h1>Sparade annonaser</h1>

    
        <ul>
            


                
            {cartItems.map((ad) => (
           <div className="ad" key={ad.id}>
             <Link className="link" to={`/annonser/${ad.id}`}>
               <p>{ad.title}</p>
             </Link>
             {/* <p>Datum {moment(ad.date).format("YYYY-MM-DD HH:mm")}</p>
             <div className="img">
               <img src={`../upload/${ad.img_url}`} alt={ad.title} />
             </div> 
             <p>{ad.category}</p>
             <p>{ad.city}</p>
            */}
            <button onClick={(e) => {e.preventDefault(); addItem(ad)}}>
             <FaHeart />
            </button>
           </div>

           
         ))}
        </ul>
    


    </div>
  );
  
}

export default FavoriteAds
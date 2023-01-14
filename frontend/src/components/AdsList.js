import React from 'react'
import {useState, useEffect} from 'react'
import { Link, useLocation } from "react-router-dom"
import moment from "moment";
import { FaHeart } from 'react-icons/fa';

const AdsList = ({ads}) => {

  const getText = (html) =>{
    const doc = new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent
  }

  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem 
    ('favoritelist')) || []);
  

  useEffect(() => {
    localStorage.setItem('favoritelist', JSON.stringify(cartItems));
  }, [cartItems])


  const addItem = (newItem) => {
    console.log(newItem)
    console.log(cartItems);
    const list = cartItems.filter((item) => item.id !== newItem.id );
    //Kontrollerar om varan redan finns i varukorgen. OM varan redan finns öka kvantitet annars lägger till i listan.
    const exist = cartItems.find(x => x.id === newItem.id);
    
    exist? setCartItems(list)

    :setCartItems([
        ...cartItems,
        {...newItem}
    ]);
  }


  
  return (

    <div>
    <h1>Ads</h1>
    
    {ads.map((ad) => (
        <div className="ad" key={ad.id}>
          <Link className="link" to={`/annons/${ad.id}`}>
            <h1>{ad.title}</h1>
          </Link>
          <p>Datum {moment(ad.date).format("YYYY-MM-DD HH:mm")}</p>
          <div className="img">
            <img src={`../upload/${ad.img_url}`} alt={ad.title} />
          </div>
          <p>{ad.category}</p>
          <p>{ad.city}</p>
          <p>{getText(ad.description)}</p>
         
          <button
            
            onClick={(e) => {e.preventDefault(); addItem(ad)}}
            
            >
             <FaHeart />
            </button>
          
        </div>
     
      ))
    
    }
    </div>
    )
}

export default AdsList
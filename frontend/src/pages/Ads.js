import React from 'react'
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom"
import moment from "moment";
import AdsList from '../components/AdsList';
import axios from '../api/axios';


const Ads = ({ads}) => {

  const [newAds, setNewAds] = useState([]);
  const [activeCategory, setActiveCategory] = useState("");



  const location = useLocation();
 
  console.log(location);




  const menuItems = [...new Set(ads.map((ad) => ad.category))];
  console.log (menuItems)

  const filterAds = (e) => {
    e.preventDefault()
    const value = e.target.value
    const newItems = ads.filter(ad  => ad.category === value)
    setActiveCategory(value)
    setNewAds(newItems);
  };


  



  return (
    <div>
      <h1>All Ads</h1>
      
      
      <select
            value={activeCategory}
            onChange={filterAds}
            name=""
            id="categories"
      >

      {menuItems.map((category, id) => {
        return (
        
        <option value={category} key={id}>
          {category}
        </option>
        )
      })}

      <option value="">Alla</option>
      </select>

    
      <div className="ads">
        {activeCategory? <AdsList ads={newAds} /> : <AdsList ads={ads} />}
      </div>
    </div>

  )
}


{/*  
      ads.filter(ad  => ad.category === activeCategory).map((ad) => (
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
            <p>{getText(ad.description)}</p>
          </div>
        )) */}
export default Ads
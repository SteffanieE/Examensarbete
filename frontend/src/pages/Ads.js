import React from 'react'
import { useEffect, useState  } from "react";
import { Link, useLocation } from "react-router-dom"

import axios from '../api/axios';


const Ads = () => {

   const [ads, setAds] = useState([]);

 /*   const location = useLocation();
   const category = location.pathname.split("/")[2];
 */

 /*   const category = useLocation()
   const redirect = category.pathname + category.search
   console.log(category); */


   

    useEffect(() => {

      
      const fetchData = async () => {
        try {
          
          const res = await axios.get(`/ads`);
          setAds(res.data);
          console.log(res)
        } catch (err) {
          console.log(err);
        }
      };
      fetchData();
    },[]);

    
    const getText = (html) =>{
      const doc = new DOMParser().parseFromString(html, "text/html")
      return doc.body.textContent
    }
    
  return (
    <div>
        <h1>All Ads</h1>
        <Link to="/ads/1">Ad 1</Link>
        <Link to="/ads/2">Ad 2</Link>

        <Link to="/annonser/mat">Mat</Link>
        <Link to="/annonser/furniture">Möbler</Link>
        

        


     
      <div className="adss">
        {ads.map((ad) => (
          <div className="ad" key={ad.id}>
           {/*  <div className="img">
              <img src={`../upload/${ad.img-url}`} alt="" />
            </div> */}
     
            <p>{ad.date}</p>
            <div className="img">
              <img src={`../upload/${ad.img_url}`} alt="" />
            </div>
            <p>{ad.category}</p>
            <p>{ad.city}</p>
            <div className="content">
              <Link className="link" to={`/annonser/${ad.id}`}>
                <h1>{ad.title}</h1>
              </Link>
              <p>{getText(ad.description)}</p>
              <button>Read More</button>
              <br/>
              <br/>
              <br/>
              <br/>
            </div>
           
          </div>
        
        ))}
      
    </div>

        
    </div>















       
  )
}

export default Ads
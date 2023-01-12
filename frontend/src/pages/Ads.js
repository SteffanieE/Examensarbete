import React from 'react'
import { useEffect, useState  } from "react";
import { Link, useLocation } from "react-router-dom"
import moment from "moment";
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
    
      <Link to="/annonser/mat">Mat</Link>
      <Link to="/annonser/furniture">Möbler</Link>
    
      <div className="adss">
      
        {ads.map((ad) => (
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
        ))}
      
      </div>
    </div>

  )
}

export default Ads
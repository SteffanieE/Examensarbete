import React from 'react'
import { useEffect, useState  } from "react";
import { Link, useLocation } from "react-router-dom"
import moment from "moment";
import axios from '../api/axios';


const Ads = () => {

   const [ads, setAds] = useState([]);
   const [activeCategory, setActiveCategory] = useState("");

 /*   const location = useLocation();
   const category = location.pathname.split("/")[2];
 */

 /*   const category = useLocation()
   const redirect = category.pathname + category.search
   console.log(category); */
    console.log(activeCategory)
    useEffect(() => {    
      
    

      const fetchData = async () => {
        try {
          console.log("hämtAR")
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


    const handleChange = (e) =>{
      e.preventDefault()
      const value = e.target.value
      setActiveCategory(e.target.value)
      console.log(value)
    }
    
  return (
    <div>
      <h1>All Ads</h1>

      
      
      <select
            value={activeCategory}
            onChange={handleChange}
            name=""
            id="categories"
      >
        <option value="">Alla</option>
        <option value="clothes">Kläder</option>
        <option value="food">Mat</option>
        <option value="furniture">Inredning</option>
      </select>

      
      
      <Link to="/kategori/food">Mat</Link>
      <Link to="/kategori/furniture">Möbler</Link>
    
      <div className="adss">
      {activeCategory? ads.filter(ad  => ad.category === activeCategory).map((ad) => (
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
        ))

        :

        ads.map((ad) => (
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
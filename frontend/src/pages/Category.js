
import React from 'react'
import { useEffect, useState  } from "react";
import { Link, useLocation } from "react-router-dom"
import moment from "moment";
import axios from '../api/axios';

const Category = () => {

    



  const [ads, setAds] = useState([]);

    console.log(ads)
    const location = useLocation();
    const category = location.pathname.split("/")[2];

  console.log(category)





    useEffect(() => {


      const fetchData = async () => {
       
          try {
            
              const res = await axios.get(`/ads/category`, {
                  params: {
                      category: category
                  }
              });

              setAds(res.data);
           
              console.log(res.data)
          } catch (err) {
              console.log(err);
          }
      };
      fetchData();
    }, []);
 
     
     const getText = (html) =>{
       const doc = new DOMParser().parseFromString(html, "text/html")
       return doc.body.textContent
     }
     
   return (
     <div>
       <h1>kategori</h1>
 
     
        
     
         
       
       <Link to="/kategori/food">Mat</Link>
       <Link to="/kategori/furniture">Möbler</Link>
     
       <div className="ads">
       
         {ads.map((ad) => (
           <div className="ad" key={ad.id}>
             <Link className="link" to={`/annonser/${ad.category}/${ad.id}`}>
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


export default Category






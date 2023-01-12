import React, { useEffect, useState, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from '../api/axios';

import { AuthContext } from "../context/AuthContext.js";

const Ad = () => {

  const [ad, setAd] = useState({});
  const location = useLocation();
  const AdId = location.pathname.split("/")[2];

  const { currentUser } = useContext(AuthContext);



 

  const getText = (html) =>{
    const doc = new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent
  }

  console.log(AdId)

  //const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/ads/${AdId}`);
        setAd(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [AdId]);

console.log(ad.user_id)
console.log(currentUser.id)

  return (
    <div>
      <h1>{ad.title}</h1>


      <p>{ad.date}</p>
      <p>{ad.img_url}</p>
      <p>{ad.category}</p>
      <p>{ad.city}</p>
            <div className="content">
             
              <p>{getText(ad.description)}</p>
            
            </div>
            {currentUser.id === ad.user_id && (
            <div className="edit">
              <Link to={`/skapa?edit=2`} state={ad}>
                Uppdatera
              </Link>
              {/* <img onClick={handleDelete} src={Delete} alt="" /> */}
            </div>
          )}


    </div>
  )
}

export default Ad
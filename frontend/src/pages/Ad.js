import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from '../api/axios';

const Ad = () => {

  const [ad, setAd] = useState({});
  const location = useLocation();
  const postId = location.pathname.split("/")[2];



  const getText = (html) =>{
    const doc = new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent
  }

  console.log(postId)

  //const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/ads/${postId}`);
        setAd(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [postId]);



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


    </div>
  )
}

export default Ad
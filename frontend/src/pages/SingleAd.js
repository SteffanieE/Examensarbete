import React, { useEffect, useState, useContext } from "react";
import { Link, useLocation} from "react-router-dom";
import moment from "moment";
import Popup from 'reactjs-popup';
import axios from '../api/axios';
import { FavoriteListContext } from '../context/FavoriteListContext';
import { TbHeart } from "react-icons/tb";
import './SingleAd.css';



import { AuthContext } from "../context/AuthContext.js";

const SingleAd = () => {

  const [ad, setAd] = useState({});
  const location = useLocation();
  const AdId = location.pathname.split("/")[3];
  const { currentUser } = useContext(AuthContext);
  const {cartItems, addItem} = useContext(FavoriteListContext);



  const getText = (html) =>{
    const doc = new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent
  }

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



  return (
    
      <div className="single-ad-container bg-white">
    
       
        <img src={`/../upload/${ad.img_url}`} alt={ad.title} />
       
        <section className="ad-info-part">
          <div className="date-city">
            <p className="fs-200">Inlagd: {moment(ad.date).format("YYYY-MM-DD HH:mm")}</p>
            <p>{ad.city}</p>
            <div className='text-accent heart-icon-container'>
                {cartItems.find(x => x.id === ad.id)
                  ? <TbHeart className='heart' onClick={(e) => {e.preventDefault(); addItem(ad)}} size="36px" strokeWidth="1" />
                  : <TbHeart  onClick={(e) => {e.preventDefault(); addItem(ad)}} size="36px" strokeWidth="1" />
                }
            </div>
          </div>
        
          <h1>{ad.title}</h1>
          <p className="description">{getText(ad.description)}</p>
          {currentUser === null
            ? <Link className="link" to={`/login`}>Loga in för mer info</Link>
            : <Popup  trigger={<button className="large-button">HÄMTA</button>} position="center">
                {close => (
                  <div className="pop">
                  <p className="fs-400">Varan finns på följande adress:</p>
                    <p>{ad.street}</p>
                    <div className="flex"> 
                      <p>{ad.zipcode}</p>
                      <p>{ad.city}</p>
                    </div>
                    <p className="close" onClick={close}>
                      &times;
                    </p>
                  </div>
                )}
              </Popup>
          }  
        </section>
      </div>
   
  )
}

export default SingleAd;
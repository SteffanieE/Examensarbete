import React, { useEffect, useState, useContext } from "react";
import { Link, useLocation} from "react-router-dom";
import moment from "moment";
import Popup from 'reactjs-popup';
import axios from '../api/axios';
import './SingleAd.css';

import { AuthContext } from "../context/AuthContext.js";

const SingleAd = ({ads}) => {

  const [ad, setAd] = useState({});
  const location = useLocation();
  const AdId = location.pathname.split("/")[3];
  const { currentUser } = useContext(AuthContext);


  const getText = (html) =>{
    const doc = new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent
  }


/*   useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/ads/${AdId}`);
        setAd(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [AdId]); */

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
    <main className="single-ad-page bg-accent">
      <div className="single-ad-container bg-white">
       
            <div className="img">
               <img src={`/../upload/${ad.img_url}`} alt={ad.title} />
             </div>
        <section className="ad-info-part">
          <div>
          <p className="fs-200">Inlagd: {moment(ad.date).format("YYYY-MM-DD HH:mm")}</p>
            <p>{ad.city}</p>
          </div>
        
        
          
  

          <h1>{ad.title}</h1>

          
          <p>{getText(ad.description)}</p>


          {currentUser === null? 
              
              <Link className="link" to={`/login`}>Loga in för mer info</Link>
             
              
           
            :  
            <Popup  trigger={<button className="large-button-primary">HÄMTA</button>} position="center">
            {close => (
              <div className="pop">
              <p className="fs-400">Varan finns på följande adress:</p>
                <p>{ad.street}</p>
                <div className="flex"> 
                  <p>{ad.zipcode}</p>
                  <p>{ad.city}</p>
                </div>
                <a className="close" onClick={close}>
                  &times;
                </a>
              </div>
            )}
          </Popup>
              
            
          }

          
        </section>
      </div>
    </main>
  )
}

export default SingleAd;
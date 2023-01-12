import React from 'react'
import { useEffect, useState, useContext  } from "react";
import { Link, useLocation } from "react-router-dom"
import { AuthContext } from "../context/AuthContext.js";
import moment from "moment";
import axios from '../api/axios';


const MyPage = () => {

    const { currentUser, logout } = useContext(AuthContext);
    const [ads, setAds] = useState([]);
    const id = currentUser.id;



    


    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`/ads`, {
                    params: {
                        id: id
                    }
                });

                setAds(res.data);
          
                console.log(res)
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, [id]);

    
    const getText = (html) =>{
        const doc = new DOMParser().parseFromString(html, "text/html")
        return doc.body.textContent
    }
     
    const handleDelete = async (adId) =>{
        try {
            await axios.delete(`/ads/${adId}`);
            window.location.reload(false);
            
            } catch (err) {
            console.log(err);
        }      
    }

    const handleUserDelete = async (userId) =>{
        console.log(userId)
        try {
            const res = await axios.delete(`/auth/${userId}`);
           
            console.log(res)
            } catch (err) {
            console.log(err);
        }      
    }


     
     return (
       <div>
           <h1>MINA SIDOR</h1>
           <span onClick={logout}>Logga ut</span>
           <button onClick={() => handleUserDelete(id)}>Ta bord användare</button>
           
        
            <div className="adss">
                {ads.map((ad) => (
                    <div className="ad" key={ad.id}>                        
                        <p>Datum {moment(ad.date).format("YYYY-MM-DD HH:mm")}</p>
                        <div className="img">
                            <img src={`../upload/${ad.img_url}`} alt="" />
                        </div>
                        <p>{ad.category}</p> 
                        <h1>{ad.title}</h1>                 
                        <p>{getText(ad.description)}</p> 
                        <h3>Hämtnings adress:</h3>
                        <p>{ad.street}</p>
                        <p>{ad.zipcode}</p>
                        <p>{ad.city}</p>
                        <Link to={`/skapa?edit=2`} state={ad}>Uppdatera</Link>    
                        <button onClick={() => handleDelete(ad.id)}>Radera</button> 
                    </div>
                ))}
            </div>     
       </div>
          
     )
}

export default MyPage
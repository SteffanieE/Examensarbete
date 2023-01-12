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


    
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [street, setStreet] = useState("");
    const [zipcode, setZipcode] = useState("");
    const [city, setCity] = useState("");

    


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

    const handleUpdate = async ( adId ) => {
        
        

         
        console.log(title)
     
    
        try {
           await axios.put(`/ads/${adId}`, {
                title,
                description,
                street,
                zipcode,
                city,

            });
            window.location.reload(false);
            
              
        } catch (err) {
          console.log(err);
        }
      };
    

     
     return (
       <div>
           <h1>MINA SIDOR</h1>
           <span onClick={logout}>Logga ut</span>
           
        
            <div className="adss">
                {ads.map((ad) => (
                    <div className="ad" key={ad.id}>

                        <p>{ad.title}</p>
                        <input
                            type="text"
                            placeholder="Rubrik"
                            onChange={(e) => setTitle(e.target.value)}
                        />
                     
                    
              
                    
                        <p>Datum {moment(ad.date).format("YYYY-MM-DD HH:mm")}</p>
                        <div className="img">
                            <img src={`../upload/${ad.img_url}`} alt="" />
                        </div>
                        <p>{ad.category}</p>
                       
                  
                        <div className="content">
                            <p>{getText(ad.description)}</p> 
                            <textarea
                            type="text"
                            placeholder= {ad.description}
                            onChange={(e) => setDescription(e.target.value)}
                            />          
                        
                        </div>
                        <h3>Hämtnings adress:</h3>

                        
                        <p>{ad.street}</p>
                        <p>{ad.zipcode}</p>
                        <p>{ad.city}</p>
                        <input
                            type="text"
                            placeholder="Adress"
                            onChange={(e) => setStreet(e.target.value)}
                        />
                         <input
                            type="text"
                            placeholder="Postnummer"
                            onChange={(e) => setZipcode(e.target.value)}
                        />
                         <input
                            type="text"
                            placeholder="Ort"
                            onChange={(e) => setCity(e.target.value)}
                        />
                            <button onClick={() => handleUpdate(ad.id)}>Uppdatera annons</button>
                            <button onClick={() => handleDelete(ad.id)}>Radera</button>
                        <li />
                    </div>
                ))}
            </div>     
       </div>
          
     )
}

export default MyPage
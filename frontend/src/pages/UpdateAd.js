import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from '../api/axios';

const UpdateAd = () => {
    const [ad, setAd] = useState({});
    const location = useLocation();
    const postId = location.pathname.split("/")[2];
  

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [street, setStreet] = useState("");
    const [zipcode, setZipcode] = useState("");
    const [city, setCity] = useState("");

  
  
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


    const handleUpdate = async ( adId ) => {
        
        

        console.log(adId)
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
        <h1>{ad.title}</h1>
        <input
            type="text"
            placeholder="Rubrik"
            onChange={(e) => setTitle(e.target.value)}
        />
  
        <p>{ad.date}</p>
        <p>{ad.img_url}</p>
        <p>{ad.category}</p>

        <div className="content">
        
        
        <div className="content">
                            <p>{getText(ad.description)}</p> 
                            <textarea
                            type="text"
                            placeholder= {ad.description}
                            onChange={(e) => setDescription(e.target.value)}
                            />          
                        
                        </div>
        
        </div>
        
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


      </div>
    )
  }


export default UpdateAd
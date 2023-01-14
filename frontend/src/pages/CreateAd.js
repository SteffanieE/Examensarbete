import React, { useState, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext.js";


import axios from '../api/axios';
import moment from "moment";

const CreateAd = () => {

    const { currentUser } = useContext(AuthContext);

    const state = useLocation().state;
    console.log(state)

    const [title, setTitle] = useState(state?.title || "");
    const [description, setDescription] = useState(state?.description || "");
    const [image, setImage] = useState(null);
    const [category, setCategory] = useState(state?.category || "");
    const [street, setStreet] = useState(state?.street || "");
    const [zipcode, setZipcode] = useState(state?.zipcode || "");
    const [city, setCity] = useState(state?.city || "");
    
 
    


    
           

    const upload = async () => {
        try {
          const formData = new FormData();
          formData.append("file", image);
          console.log(formData)
          const res = await axios.post("/upload", formData);
          console.log(res.data)
          return res.data;
        
        } catch (err) {
          console.log(err);
        }
      };
    
      const handleClick = async (e) => {
        e.preventDefault();
        const imgUrl = await upload();



         
        console.log(title)
        console.log(description)
        console.log(imgUrl)
      
        console.log(category)
        console.log(street)
        console.log(zipcode)
        console.log(city)
        console.log(currentUser.id)



     
    
        try {

          state
          ? await axios.put(`/ads/${state.id}`, {
              title,
              description,
              category,
              street,
              zipcode,
              city,
            })
          : await axios.post(`/ads/`, {
                title,
                description,
                date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
                category,
                img_url: image ? imgUrl : "",
                street,
                zipcode,
                city,
                user_id: currentUser.id
              });
              
        } catch (err) {
          console.log(err);
        }
      };

   

  return (
        <div className="add">
        
            <form>
                <input
                type="text"
                value={title}
                placeholder="Rubrik"
                onChange={(e) => setTitle(e.target.value)}
                />
            
        
                <textarea
                type="text"
                value={description}
                placeholder="Beskrivning"
                onChange={(e) => setDescription(e.target.value)}
                />
            
               {/*  <textarea
                type="text"
                placeholder="Kategori"
                onChange={(e) => setCategory(e.target.value)}
                /> */}

                <input
                    style={{ display: "none" }}
                    type="file"
                    id="file"
                    onChange={(e) => setImage(e.target.files[0])}
                />
                <label className="file" htmlFor="file">
                    Upload Image
                </label>
            
                
          
               
              
                <select name="categories" value={category} id="categories"  onChange={(e) => setCategory(e.target.value)}>
                    <option value="kläder">Kläder</option>
                    <option value="mat">Mat</option>
                    <option value="inredning">Inredning</option>
                   
                </select> 

        
                <input
                type="text"
                value={street}
                placeholder="street"
                onChange={(e) => setStreet(e.target.value)}
                />
            
        
                <input
                type="number"
                value={zipcode}
                placeholder="zipcode"
                onChange={(e) => setZipcode(e.target.value)}
                />



                <input
                type="text"
                value={city}
                placeholder="city"
                onChange={(e) => setCity(e.target.value)}
                />

<button onClick={handleClick}>Publish</button>
<button>Uppdatera</button>
              

        </form>
 </div>
   
);
    
 
};

export default CreateAd
import React, { useState, useContext } from "react";
import { useLocation, useNavigate, Link, redirect } from "react-router-dom";
import { AuthContext } from "../context/AuthContext.js";
import './CreateAd.css';


import axios from '../api/axios';
import moment from "moment";

const CreateAd = () => {

  const navigate = useNavigate();

  const { currentUser } = useContext(AuthContext);

  const state = useLocation().state;
  

  const [title, setTitle] = useState(state?.title || "");
  const [description, setDescription] = useState(state?.description || "");
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState(state?.category || "");
  const [street, setStreet] = useState(state?.street || "");
  const [zipcode, setZipcode] = useState(state?.zipcode || "");
  const [city, setCity] = useState(state?.city || "");
  const [slug, setSlug] = useState(state?.slug || "");
  
 
     
    
    

    
           

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

      const handleChange 
         = (e) => {
          
          setCategory(e.target.value)
          const cat = e.target.value
          const klader = "klader"

            if (cat === "kläder" ) {
            setSlug(klader) 
          }
          else
          setSlug(e.target.value)

          

         }

    
      const handleClick = async (e) => {
        e.preventDefault();
        const imgUrl = await upload();


      

         
        
        console.log(description)
      
      
        console.log(category)
        console.log(street)
        console.log(zipcode)
        console.log(city)
        console.log(currentUser.id)
        console.log(slug)



     
    
        try {

          state
          ? await axios.put(`/ads/${state.id}`, {
              title,
              description,
              category,
              slug,
              street,
              zipcode,
              city,
            })
          : await axios.post(`/ads/`, {
                title,
                description,
                date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
                category,
                slug,
                img_url: image ? imgUrl : "",
                street,
                zipcode,
                city,
                user_id: currentUser.id
              });
          navigate("/");   
        } catch (err) {
          console.log(err);
        }
      };

  return (
    <main className="create-ad-page bg-accent">
      <section className="create-ad-section bg-white">
        <h1>Skapa en ny annons</h1>
        <form className="flex create-ad-form bg-white" onSubmit={handleClick}>
      
          <label>Kategori</label>
          <select name="categories" value={category} id="categories"  onChange={handleChange} required>
              <option value=""> -- Välj i listan -- </option>
              <option value="kläder">Kläder</option>
              <option value="mat">Mat</option>
              <option value="inredning">Inredning</option>
          </select> 
          
          <input
            type="file"
            id="file"
            onChange={(e) => setImage(e.target.files[0])}
          />
            
          <input
          type="text"
          value={title}
          placeholder="Rubrik"
          onChange={(e) => setTitle(e.target.value)}
          required
          />

          <textarea
          type="text"
          value={description}
          placeholder="Beskrivning"
          onChange={(e) => setDescription(e.target.value)}
          required
          />
          
          <label>Ange adress för vart varan kan hämtas</label>
          <input
          type="text"
          value={street}
          placeholder="Adress"
          onChange={(e) => setStreet(e.target.value)}
          required
          />
      
          <input
          type="number"
          value={zipcode}
          placeholder="Postnummer"
          onChange={(e) => setZipcode(e.target.value)}
          required
          />

          <input
          type="text"
          value={city}
          placeholder="Ort"
          onChange={(e) => setCity(e.target.value)}
          required
          />

          <button className="large-button-primary" type="submit" >Lägg upp annons</button>
        </form>

      </section>
    </main>
   
);
    
 
};


 {/*  <textarea
                type="text"
                placeholder="Kategori"
                onChange={(e) => setCategory(e.target.value)}
                /> */}

export default CreateAd
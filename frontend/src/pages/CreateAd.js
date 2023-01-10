import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import axios from '../api/axios';
import moment from "moment";

const CreateAd = () => {

    const state = useLocation().state;


    const [title, setTitle] = useState(state?.title || "");
    const [description, setDescription] = useState(state?.description || "");
    const [image, setImage] = useState(null);
    const [category, setCategory] = useState(state?.category || "");
    const [street, setStreet] = useState(state?.street || "");
    const [zipcode, setZipcode] = useState(state?.zipcode || "");
    const [city, setCity] = useState(state?.city || "");

 
    
    const date = moment(Date.now()).format("YYYY-MM-DD HH:mm:ss")

    
           

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
        console.log(date)
        console.log(category)
        console.log(street)
        console.log(zipcode)
        console.log(city)



     
    
        try {
           await axios.post(`/ads/`, {
                title,
                description,
                date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
                category,
                img_url: image ? imgUrl : "",
                street,
                zipcode,
                city
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
                placeholder="Rubrik"
                onChange={(e) => setTitle(e.target.value)}
                />
            
        
                <textarea
                type="text"
                placeholder="Beskrivning"
                onChange={(e) => setDescription(e.target.value)}
                />
            
                <textarea
                type="text"
                placeholder="Kategori"
                onChange={(e) => setCategory(e.target.value)}
                />

                <input
                    style={{ display: "none" }}
                    type="file"
                    id="file"
                    name=""
                    onChange={(e) => setImage(e.target.files[0])}
                />
                <label className="file" htmlFor="file">
                    Upload Image
                </label>
            
                
          
             {/*    
              
                <select name="categories" id="categories"  onChange={(e) => setCategory(e.target.value)}>
                    <option value="clothes">Kläder</option>
                    <option value="food">Mat</option>
                    <option value="furniture">Inredning</option>
                   
                </select> */}

        
                <input
                type="text"
                placeholder="street"
                onChange={(e) => setStreet(e.target.value)}
                />
            
        
                <input
                type="number"
                placeholder="zipcode"
                onChange={(e) => setZipcode(e.target.value)}
                />



                <input
                type="text"
                placeholder="city"
                onChange={(e) => setCity(e.target.value)}
                />

<button onClick={handleClick}>Publish</button>
              

        </form>
 </div>
   
);
    
 
};

export default CreateAd
import { useState, useContext } from "react";
import { useLocation, useNavigate} from "react-router-dom";
import { AuthContext } from "../context/AuthContext.js";
import axios from '../api/axios';
import moment from "moment";
import './CreateAd.css';

const CreateAd = () => {

  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const state = useLocation().state;

  const [title, setTitle] = useState(state?.title || "");
  const [description, setDescription] = useState(state?.description || "");
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState(state?.category || "");
  const [street, setStreet] = useState(state?.street || "");
  const [zipcode, setZipcode] = useState(state?.zipcode || "");
  const [city, setCity] = useState(state?.city || "");
  const [slug, setSlug] = useState(state?.slug || "");
  
  //Sends selected image to backend
  const upload = async () => {
      try {
        const formData = new FormData();
        formData.append("file", image);
        const res = await axios.post("/upload", formData);
        return res.data;
      
      } catch (err) {
        console.log(err);
      }
  };

  // Adds slug to the ad
  const handleChange = (e) => {     
    setCategory(e.target.value)

    if (e.target.value === "kläder" ) {
      setSlug("klader") 
    } else
      setSlug(e.target.value)
  };

  //Checks if state is true. If true the ad is updated otherwise a new ad is created.
  const handleClick = async (e) => {
    e.preventDefault();
    const imgUrl = await upload();
    try {

      state
      ? await axios.put(`/ads/${state.id}`, {
          title,
          description,
          category,
          slug,
          img_url: image ? imgUrl : "",
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
      console.log(err.message);
    }
  };

  return (
    <main className="create-ad-page">
      <section className="create-ad-section">
        <h1>Skapa en ny annons</h1>
        <form className="flex create-ad-form bg-white" onSubmit={handleClick}>
      
          <label>Kategori</label>
          <select name="categories" value={category} id="categories"  onChange={handleChange} required>
              <option value=""> -- Välj i listan -- </option>
              <option value="Kläder">Kläder</option>
              <option value="Mat">Mat</option>
              <option value="Inredning">Inredning</option>
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

          <button className="large-button-primary" type="submit" >          
            {state === null ?  "Lägg upp annons" : "Uppdatera"}
          </button>
          
        </form>
      </section>
    </main>
   
);
    
};


export default CreateAd
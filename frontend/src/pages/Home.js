import { useEffect, useState  } from "react";
import axios from '../api/axios';
import {  NavLink } from 'react-router-dom';
import Hero from '../components/Hero';
import AdsList from '../components/AdsList';
import './Home.css';


const Home = () => {
  const date = new Date().toLocaleString().split(",")[0];


  const [ads, setAds] = useState([]);
 
  //GET all ads from backend
  useEffect(() => {    
    const fetchData = async () => {
      try {
        const res = await axios.get(`/ads`);
        setAds(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  },[]);


  




  return (
    <>
      <Hero />
      <div className='line-div'>
        <h2>KATEGORIER</h2>
      </div>
      
      <nav className="flex category-nav">
        <div className='flex food-link category-div'>
          <div className="flex category-text text-dark">
            <NavLink className="text-dark fs-500" to="kategori/mat">MAT</NavLink>
          </div>
        </div>
        <div className='flex clothes-link category-div'>
          <div className="flex category-text text-dark">
            <NavLink className="text-dark fs-500" to="/kategori/klader">KLÄDER</NavLink>
          </div>
        </div>
        <div className='flex interior-link category-div'>
          <div className="flex category-text text-dark">
            <NavLink className="text-dark fs-500" to="/kategori/inredning">INREDNING</NavLink>
          </div>
        </div>
      </nav>

      <section className='flex text-block bg-secondary'>
        <div className='flex'>
          <h2 className='fs-600'>Det ska vara LÄTT att göra RÄTT</h2>
          <p>Nästan allt du inte längre berhöver kan komma till användning på annat sätt. Åtetrvinn dina tomma förpackningar och lämna bort dina gamla prylar och kläder, 
          så får de nytt liv. På så sätt minskar du klimtpåverkan från din komnsumtion.</p>
        </div>
      </section>   

      <div className='line-div'>
        <h2>DAGENS ANNONSER</h2>
      </div>

       <AdsList ads={ads.filter(ad => ad.date.split("T")[0] === date)} />
      
    </>
  )
}

  
export default Home;
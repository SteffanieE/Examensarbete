import './App.css';
//import axios from "axios";
//import { useState } from 'react';
import axios from './api/axios';
import { useEffect, useState  } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Ads from './pages/Ads';
import Ad from './pages/Ad';
import CreateAd from './pages/CreateAd';
import NotFound from './pages/NotFound';
import MyPage from './pages/MyPage';
import UpdateAd from './pages/UpdateAd';
import Category from './pages/Category';

function App() {


  const [ads, setAds] = useState([]);
    
  
  useEffect(() => {    
      
    

    const fetchData = async () => {
      try {
        console.log("hämtAR")
        const res = await axios.get(`/ads`);
        setAds(res.data);
        console.log(res)
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  },[]);


  return (
    <div className="App">
    
      <Navbar />
      <Routes>
        <Route path="/" element={<Home ads={ads} />}/>
        <Route path='/loggain' element={<Login />}/>
        <Route path="/registera" element={<Register />}/>
        <Route path="/annonser" element={<Ads ads={ads}/>}/>
        <Route path="/annonser/:id" element={<Ads ads={ads}/>}/>
   
        <Route path='/mina-sidor' element={<MyPage />}/>
   
        <Route path="/kategori/:id" element={<Category />}/>
        <Route path="/annons/:id" element={<Ad />}/>
        
        <Route path="/annonser/updatera" element={<UpdateAd />}/>
        <Route path="/skapa" element={<CreateAd />}/>
        <Route path="*" element={<NotFound />}/>
        
      
      </Routes>
      <Footer />



        {/* <div>
          <h1>Registration</h1>
          <label>Username</label>
          <input 
            type="text" 
            onChange={(e)=> {
              setUsername(e.target.value);
            }} />
          <label>Password</label>
          <input type="text" 
            onChange={(e)=> {
              setPassword(e.target.value);
            }} />
          <button onClick={register}>Register</button>
        </div>
        <div>
          <h1>Login</h1>
          <input type="text" placeholder='Username...' />
          <input type="password" placeholder='Password...' />
          <button>Login</button>
        </div> */}
      
    </div>
  );
}

export default App;

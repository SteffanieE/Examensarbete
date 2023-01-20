import './App.css';

import axios from './api/axios';
import { useEffect, useState  } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Ads from './pages/Ads';
import SingleAd from './pages/SingleAd';
import CreateAd from './pages/CreateAd';
import NotFound from './pages/NotFound';
import MyPage from './pages/MyPage';
import UpdateAd from './pages/UpdateAd';
import Category from './pages/Category';


import { AuthContexProvider } from "./context/AuthContext";

//import reportWebVitals from './reportWebVitals';
import { FavoriteListProvider } from './context/FavoriteListContext';

import Header from './components/Header';
import Footer from './components/Footer';

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


  const [newAds, setNewAds] = useState([]);
  const [activeCategory, setActiveCategory] = useState("");





  const filterAds = (e) => {
    e.preventDefault()
    const value = e.target.value
    const newItems = ads.filter(ad  => ad.category === value)
    setActiveCategory(value)
    setNewAds(newItems);
    
  };







  return (
    
    <BrowserRouter>
      <AuthContexProvider>
        <FavoriteListProvider>
          <Header />
            <main>
              <Routes>
                  <Route path="/" element={<Home ads={ads} newAds={newAds} activeCategory={activeCategory} filterAds={filterAds}/>}/>
                    <Route path="/login" element={<Login />}/>
                    <Route path="/skapa-konto" element={<Register />}/>
                    <Route path="/skapa" element={<CreateAd />}/>
                    <Route path='/mina-sidor' element={<MyPage />}/>

 
                    <Route path="/annonser" element={<Ads ads={ads} newAds={newAds} activeCategory={activeCategory} filterAds={filterAds}/>}/>
                    <Route path="/annonser/:id" element={<SingleAd />} />
                  
                  
                  {/*<Route path="/annonser/:id" element={<Category />}/> */}

               
                    <Route path="/kategori/:slug" element={<Category ads={ads} />} />
                    <Route path="/kategori/:slug/:id" element={<SingleAd />} />
                    


       

                  
              </Routes>
            </main>
          <Footer />
       </FavoriteListProvider>
      </AuthContexProvider>
    </BrowserRouter>

      
   
  );
}

export default App;

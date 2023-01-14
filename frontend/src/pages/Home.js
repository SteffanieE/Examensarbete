import React from 'react'
import { Link } from 'react-router-dom';
import FavoriteAds from '../components/FavoriteAds';


const Home = ({ads}) => {



  const menuItems = [...new Set(ads.map((ad) => ad.category))];
  console.log (menuItems)


  return (
    <div>
        <div>Home</div>

        <FavoriteAds />

       { menuItems.map((category, id) => {
          return (
            <Link
              className="btn-dark text-white p-1 px-2 mx-5 btn fw-bold"
            
              to={{pathname:`/annonser`,
              state: category }}
            >
              
            {category}
          
            
          </Link>

    
   
        
          );
        })}

        

    </div>
  )
}
   {/* 
    const showAll = () => {
    setNewAds(ads) 
    setActiveCategory("")
  };

   
   
   
   
   {menuItems.map((category) => {
          return (
            <button
              className="btn-dark text-white p-1 px-2 mx-5 btn fw-bold"
              onClick={() => filterItem(category)}
              key={category}
            >
              {category}
            </button>
          );
        })}

        <button
              className="btn-dark text-white p-1 px-2 mx-5 btn fw-bold"
              onClick={showAll}
            >
              Alla
        </button>
   */}
export default Home;
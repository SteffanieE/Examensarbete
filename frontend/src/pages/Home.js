import React from 'react'
import {  Link, NavLink } from 'react-router-dom';
import Hero from '../components/Hero';
import AdsList from '../components/AdsList';
import './Home.css';


const Home = ({ads}) => {
  const menuItems = [...new Set(ads.map((ad) => ad.category ))];
  console.log (menuItems)

  const klader = "klader"

  console.log(ads)

  const result = ads.map((a) => {
    return {category:a.category, slug:a.slug}
  });
  console.log(result);

  
  
  return (
    <main>
      <Hero />
      <div className='line-div'>
          

      <h1 className=''>KATEGORIER</h1>


        


     


      </div>
      <nav className="flex category-nav">
          <div className='category-div'>
            <NavLink className="text-dark" to="kategori/mat">Mat</NavLink>
          </div>
          <div className='category-div'>
            <NavLink className="text-dark" to="/kategori/klader">Kläder</NavLink>
          </div>
          <div className='category-div'>
            <NavLink className="text-dark" to="/kategori/inredning">Inredning</NavLink>
          </div>
      </nav>

      

      
{/* 
      {menuItems.map((category, id) => {
        return (

          <div>
          <p>...</p>
        <Link to={`/annonser/`}  key={id}>
          {category}
        </Link>
        <p>...</p>
        </div>
        )
      })}
 */}
      

    
      {/* <div className="ads">
        {activeCategory? <AdsList ads={newAds} /> : <AdsList ads={ads} />}
      </div> */}
          
    </main>

  )

}





{/* 

// const menuItems = [...new Set(ads.map((ad) => ad.category))];
       { menuItems.map((category, id) => {
          return (
            <Link
              className="btn-dark text-white p-1 px-2 mx-5 btn fw-bold"
            
              to=`/annonser`
            >
              
            {category}
          
            
          </Link>

    
   
        
          );
        })}
 */}
        

    
  

  
export default Home;
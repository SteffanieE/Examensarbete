import React from 'react'
import { Link } from 'react-router-dom';

const Home = ({ads}) => {

  
  
  return (
    <main className='container'>
        <div>
          <li> <Link to="/annonser">Annonser</Link></li>
        </div>      
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
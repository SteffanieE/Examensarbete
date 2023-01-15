import React from 'react'
import { Link } from 'react-router-dom';

const Home = ({ads}) => {

  // const menuItems = [...new Set(ads.map((ad) => ad.category))];
  
  return (
    <div>
        <div>Home</div>
    </div>

  )

}





{/* 
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
 */}
        

    
  

  
export default Home;
import React from 'react'
import { Link } from 'react-router-dom';

const Home = ({ads}) => {

  
  
  return (
    <main>
      <section className='hero-image'>
        <div class="hero-text grid text-dark">
          <h2 className='fs-600 ff-sans-cond'>Släng inte – återbruka!</h2>
          <p>När skänker direkt till andra privatpersoner slipper 
          du dessutom att själv transportera bort ditt återbruk</p>
          <Link className="text-dark" to="/annonser/skapa"><button>Skapa annons</button></Link>
        </div>
      </section>
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
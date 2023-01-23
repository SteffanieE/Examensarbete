import {  NavLink } from 'react-router-dom';
import Hero from '../components/Hero';
import AdsList from '../components/AdsList';
import './Home.css';


const Home = ({ads}) => {
  const date = new Date().toLocaleString().split(",")[0];

  return (
    <main>
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

      <section className='flex text-block bg-accent'>
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
        


     /*  const menuItems = [...new Set(ads.map((ad) => ad.category ))];
      console.log (menuItems)
    
      
    
      console.log(ads)
    
      const result = ads.map((a) => {
        return {category:a.category, slug:a.slug}
      });
      console.log(result); */
    
  

  
export default Home;
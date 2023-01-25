import axios from '../api/axios';
import { useEffect, useState  } from "react";
import { useLocation, Link } from "react-router-dom"
import AdsList from '../components/AdsList';
import './Category.css';


const Category = ( ) => {
  const [ads, setAds] = useState([]);
  const location = useLocation();
  const slug = location.pathname.split("/")[2];

//Sends a GET request with page slug to backend
  useEffect(() => {
    const fetchData = async () => {
        try {
            const res = await axios.get(`/ads/category`, {
                params: {
                    slug: slug
                }
            });
            setAds(res.data);
        } catch (err) {
            console.log(err);
        }
    };
    fetchData();
  }, []);


 //Sets className on hero-category-text depending on the page's slug
  const getClassName = (answer) => { 
    switch(answer) {
      case("inredning"): return "interior"
      case("mat"): return "food"
      case("klader"): return "clothes"
    }  
  }
       
   return (
      <>
        <section className= {getClassName(slug)}>
          <div className="hero-category-text text-dark">
          { 
            slug === "mat" 
            ?(<h1>MAT</h1>) 
            : slug === "klader" 
            ? (<h1>KLÄDER</h1>)
            : (<h1>INREDNING</h1>)
          }
          </div>
        </section>
        <nav className="back-link">
              <Link className="text-dark" to="/"> Tillbaka </Link>
        </nav>
        <section className="ads">
          <AdsList ads={ads} />
        </section>
      </>
   )
 }

export default Category

import { useEffect, useState  } from "react";
import { useLocation } from "react-router-dom"
import AdsList from '../components/AdsList';
import './Category.css';


const Category = ({ads}) => {

  const [filteredAds, setFiltredAds] = useState([]);
  const [search, setSearch] = useState('');
  const location = useLocation();
  const slug = location.pathname.split("/")[2];


//Filters the ads depending on the page's slug and saves the filtered list.
  useEffect(() =>{
    const filteredList = ads.filter(ad  => ad.slug === slug)
    setFiltredAds(filteredList)
  }, []); 


 //Sets className on hero-category-text depending on the page's slug
  const getClassName = (answer) => { 
    switch(answer) {
      case("inredning"): return "interior"
      case("mat"): return "food"
      case("klader"): return "clothes"
    }  
  }
    

  const handelSearch = () =>{
    const items= filteredAds.filter(item => ((item.item).toLowerCase()).includes
      (search.toLocaleLowerCase()))
  }
     
   return (
      <main>
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
        <form className='searchForm' onSubmit={handelSearch}>
            <input
              id='search'
              type='text'
              role='searchbox'
              placeholder='Search Items'
              value={search}
              onChange={(e) => setSearch(e.target.value)}  
            />
          <button typ="submit">Publish</button>
        </form> 
        <section className="ads">
          <AdsList ads={filteredAds}/>
        </section>
      </main>
   )
 }



 /* 
    useEffect(() => {
      const fetchData = async () => {
       
          try {
            
              const res = await axios.get(`/ads/category`, {
                  params: {
                      slug: category
                  }
              });

              setAds(res.data);
           
              console.log(res.data)
          } catch (err) {
              console.log(err);
          }
      };
      fetchData();
    }, []); */
 

 

    
{/*  
      ads.filter(ad  => ad.category === activeCategory).map((ad) => (
          <div className="ad" key={ad.id}>
            <Link className="link" to={`/annonser/${ad.id}`}>
              <h1>{ad.title}</h1>
            </Link>
            <p>Datum {moment(ad.date).format("YYYY-MM-DD HH:mm")}</p>
            <div className="img">
              <img src={`../upload/${ad.img_url}`} alt={ad.title} />
            </div>
            <p>{ad.category}</p>
            <p>{ad.city}</p>
            <p>{getText(ad.description)}</p>
          </div>
        )) */}

export default Category






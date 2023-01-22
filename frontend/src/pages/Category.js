import { useEffect, useState  } from "react";
import { Link, useLocation } from "react-router-dom"
import Hero from '../components/Hero';
import moment from "moment";
import './Category.css';
import AdsList from '../components/AdsList';


const Category = ({ads}) => {

    console.log(ads)



  const [filtredAds, setFiltredAds] = useState([]);
  const [search, setSearch] = useState('');

  console.log(filtredAds)


    const location = useLocation();
    const slug = location.pathname.split("/")[2];

  console.log(slug)



  console.log(search);


    useEffect(() =>{

      const nyLista = ads.filter(ad  => ad.slug === slug)
      setFiltredAds(nyLista)

    }, []); 



     
     const getText = (html) =>{
       const doc = new DOMParser().parseFromString(html, "text/html")
       return doc.body.textContent
     }


     const getClassName = (answer) => { 

      switch(answer) {
        case("inredning"): return "interior"
        case("mat"): return "food"
        case("klader"): return "clothes"

      
      }
       
    }
    


    const handelSearch = e =>{
      const items= filtredAds.filter(item => ((item.item).toLowerCase()).includes
        (search.toLocaleLowerCase()))

        console.log(items)
    }
     
   return (
    
    <main className="">

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
       
      
     
       <div className="ads">



  
         <AdsList ads={filtredAds}/>
     
       
        {/*  {filtredAds.map((ad) => (

          
           <div className="ad" key={ad.id}>
             <Link className="link" to={`/kategori/${ad.slug}/${ad.id}`}>
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
         ))} */}
       
       </div>
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






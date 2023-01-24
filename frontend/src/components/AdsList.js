import { useContext } from 'react'
import { Link} from "react-router-dom"
import { TbHeart } from "react-icons/tb";
import { FavoriteListContext } from '../context/FavoriteListContext';
import moment from "moment";


const AdsList = ({ads}) => {
  
  const {cartItems, addItem} = useContext(FavoriteListContext);

  return (
      <ul className='container ads-list bg-white'>
        {
          ads.map((ad) => 
          <li className='card' key={ad.id}>
            <div className="ad-image">
              <img src={`../upload/${ad.img_url}`} alt={ad.title} />
            </div>
            <div className='ad-info fs-200'>
              <div>
                <h3 className='uppercase'>{ad.city}</h3> 
                <p>Inlagd: {moment(ad.date).format("YYYY-MM-DD HH:mm")}</p>
              </div> 
              <h1>{ad.title}</h1>
            </div>
              
              <div className='card-buttons'>
                <Link className="link small-button-primary fs-200" to={`/kategori/${ad.slug}/${ad.id}`}>MER INFO</Link>
                
                <div className='text-accent heart-icon-container'>
                  {cartItems.find(x => x.id === ad.id)
                    ? <TbHeart className='heart' onClick={(e) => {e.preventDefault(); addItem(ad)}} size="36px" strokeWidth="1" />
                    : <TbHeart  onClick={(e) => {e.preventDefault(); addItem(ad)}} size="36px" strokeWidth="1" />
                  }

                </div>
              </div>
          </li>
          )
        }
      </ul>
    )
}

export default AdsList
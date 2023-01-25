import { useContext  } from "react";
import AdsList from '../components/AdsList';
import { FavoriteListContext } from '../context/FavoriteListContext';
import { TbHeart } from "react-icons/tb";
import './FavoriteAds.css';


const FavoriteAds = () => {

    const {listItems}  = useContext(FavoriteListContext)

    return (
        <section className="container favorit-ads-list">
            <h2 className="flex">Mina sparade annonser <TbHeart className="heart text-accent" size="40px" strokeWidth="1" /></h2> 
            <AdsList className="avorit-ads-list" ads={listItems} />
        </section>
    )
}

export default FavoriteAds
import { useEffect, useState, useContext  } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext.js";
import { FavoriteListContext } from '../context/FavoriteListContext';
import AdsList from '../components/AdsList';
import moment from "moment";
import axios from '../api/axios';
import './MyPage.css';


const MyPage = () => {

    const { currentUser, logout, deleteUser } = useContext(AuthContext);
    const {cartItems}  = useContext(FavoriteListContext)
    const [ads, setAds] = useState([]);
    const id = currentUser.id;


    //Sends request to the backend to get all ads that match the logged in user's id.
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`/ads`, {
                    params: {
                        id: id
                    }
                });

                setAds(res.data);

            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, [id]);

    // Converts string to text
    const getText = (html) =>{
        const doc = new DOMParser().parseFromString(html, "text/html")
        return doc.body.textContent
    }
    
    //Sends request to the backend to DELETE ad with matching id.
    const handleDelete = async (adId) => {
        try {
            await axios.delete(`/ads/${adId}`);
            window.location.reload(false);

        } catch (err) {
            console.log(err);
        }
    }

     return (
        <main className='container my-page'>
            <section className='user-section'> 
                <h1>Välkommen {currentUser.email}</h1>
                <p>Tack för att du bidrar. Tillsammans kan vi alla bli än starkare miljöhjältar!</p>
                <div className='user-buttons'>
                    <button className='small-button-primary' onClick={logout}>Logga ut</button>
                    <button className='small-button-primary delete' onClick={() => deleteUser(id)}>Ta bord användare</button>
                </div>
            </section>
            <section className="my-ads-section">
                <h2>Mina annonser</h2>   
                <table className='my-ads-tabel'>
                    <tbody>
                        <tr>
                            <th>Datum</th>
                            <th>Titel</th>
                            <th>Bild</th>
                            <th>Kategori</th>
                            <th>Beskrivning</th>
                            <th>Hämtningsadress</th>
                            <th></th>
                            <th></th>
                        </tr>
                            {ads.map((ad) => (
                        <tr className="my-ads-rows" key={ad.id}>                        
                            <td>{moment(ad.date).format("YYYY-MM-DD HH:mm")}</td>
                            <td>{ad.title}</td>
                            <td><img src={`../upload/${ad.img_url}`} alt={ad.title} height="50" width="50" /></td>
                            <td>{ad.category}</td>
                            <td>{getText(ad.description)}</td>
                            <td>
                                <p>{ad.street}</p>
                                <p>{ad.zipcode}</p>
                                <p>{ad.city}</p>
                            </td>
                
                            <td><Link className='small-button-primary' to={`/skapa-annons?edit=2`} state={ad}>Uppdatera</Link>  </td>
                            <td><button className='small-button-primary delete' onClick={() => handleDelete(ad.id)}>Radera</button> </td>     
                                
                        </tr>
                        ))}
                    </tbody>
                </table>
            </section>  
            <section className="favorit-ads-list">
                <h2>Mina sparade annonser</h2> 
                <AdsList className="avorit-ads-list" ads={cartItems} />
            </section>              
       </main>
     )



            {/* <h2>Sparade annonser</h2> 
                    <table className='my-ads-tabel'>
                        <tr>
                            <th>Datum:</th>
                            <th>Titel:</th>
                            <th>Bild:</th>
                            <th>Kategori:</th>
                            <th>Beskrivning:</th>
                            <th>Hämtningsadress:</th>     
                        </tr>
                    {cartItems.map((ad) => (
                    
                        <tr className="my-ads-rows" key={ad.id}>                        
                            <td>Datum {moment(ad.date).format("YYYY-MM-DD HH:mm")}</td>
                            <td>{ad.title}</td>
                            <td><img src={`../upload/${ad.img_url}`} alt={ad.title} height="50" width="50" /></td>
                            <td>{ad.category}</td>
                            <td>{getText(ad.description)}</td>
                            <td>
                                <p>{ad.street}</p>
                                <p>{ad.zipcode}</p>
                                <p>{ad.city}</p>
                            </td>
                        </tr>
                    ))}


                    </table> */}
}

export default MyPage
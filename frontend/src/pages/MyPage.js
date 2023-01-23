import './MyPage.css';
import React from 'react'
import { useEffect, useState, useContext  } from "react";
import { Link, useLocation } from "react-router-dom";

import { AuthContext } from "../context/AuthContext.js";
import { FavoriteListContext } from '../context/FavoriteListContext';
import AdsList from '../components/AdsList';
import moment from "moment";
import axios from '../api/axios';


const MyPage = () => {

    const { currentUser, logout, deleteUser } = useContext(AuthContext);
    const {cartItems, addItem}  = useContext(FavoriteListContext)
    const [ads, setAds] = useState([]);
    const id = currentUser.id;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`/ads`, {
                    params: {
                        id: id
                    }
                });

                setAds(res.data);
                console.log(res)
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, [id]);

    
    const getText = (html) =>{
        const doc = new DOMParser().parseFromString(html, "text/html")
        return doc.body.textContent
    }
     
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
                <div>
                    <img></img>
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
            </section>  
            
       </main>
          
     )
}

export default MyPage
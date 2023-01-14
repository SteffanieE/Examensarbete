import React from 'react'
import { useState, useEffect, useRef } from 'react';

import ItemList from './ItemList';
import AddItem from './AddItem';

const FavoriteAds = () => {

    const [items, setItems] = useState(JSON.parse(localStorage.getItem 
        ('shoppinglist')) || []);
        const [newItem, setNewItem] = useState('');
            
      
      
        useEffect(() => {
          localStorage.setItem('shoppinglist', JSON.stringify(items));
        }, [items])
      
       
        console.log(items)
        const addItem = (item) => {
          const id = items.length ? items[items.length - 1].id + 1 : 1;
          const myNewItem = { id, checked: false, item};
          const listItems = [...items, myNewItem];
          setItems(listItems);
        }
      
        const handleCheck = (id) => {
          const listItems = items.map((item) => item.id === id ? {...item, checked: !item.checked
          } : item);
          
          
          setItems(listItems);
        }
      
      //Funktion för att ta bort item i listan genom att filtera bort alla med icke matchande id. Skickar sedan tillbaka listan med setItems
        const handleDelete = (id) => {
          const listItems = items.filter((item) => item.id !== id );
          setItems(listItems);
        }
       
      
      const handleSubmit = (e) => {
        e.preventDefault();
        if (!newItem) return;
        addItem(newItem);
        setNewItem('');
      }
  return (
    <div>
            <h1>Sparade annonaser</h1>

            <AddItem 
                newItem={newItem}
                setNewItem={setNewItem}
                handleSubmit={handleSubmit}
            /> 
        
                
            {items.length ? (

                <ItemList
                    items={items}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
                />
                ) : (
                <p style={{marginTop: '2rem'}}> Your list are empty!</p>
                )}
                        </div>
                    );
  
}

export default FavoriteAds
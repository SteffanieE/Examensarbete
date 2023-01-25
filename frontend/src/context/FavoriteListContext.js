import { createContext, useEffect, useState } from "react";

export const FavoriteListContext = createContext();

export function FavoriteListProvider ({children}) {

    const [listItems, setListItems] = useState(JSON.parse(localStorage.getItem 
    ('favoritelist')) || []);
    

    // Saves list in localStorage and useState
    useEffect(() => {
    localStorage.setItem('favoritelist', JSON.stringify(listItems));
    }, [listItems])

    //Checks if the Item already exist in favoriteList. If true the item will be removed otherwise add to the list.
    const addItem = (newItem) => {
    const list = listItems.filter((item) => item.id !== newItem.id );
    const exist = listItems.find(x => x.id === newItem.id);
    exist? setListItems(list) : setListItems((listItems) => [...listItems, {...newItem}])    
    } 
    
    return (
        <FavoriteListContext.Provider value={{ listItems, addItem }}>
        {children}
        </FavoriteListContext.Provider>
    );
}


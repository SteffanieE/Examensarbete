import { createContext, useEffect, useState } from "react";

export const FavoriteListContext = createContext();

export function FavoriteListProvider ({children}) {

    const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem 
    ('favoritelist')) || []);
    

    useEffect(() => {
    localStorage.setItem('favoritelist', JSON.stringify(cartItems));
    }, [cartItems])


    const addItem = (newItem) => {
    
    const list = cartItems.filter((item) => item.id !== newItem.id );
    //Kontrollerar om varan redan finns i varukorgen. OM varan redan finns öka kvantitet annars lägger till i listan.
    const exist = cartItems.find(x => x.id === newItem.id);
    
    exist? setCartItems(list)

    : setCartItems((cartItems) => [...cartItems, {...newItem}])
        
    } 

    


    return (
        <FavoriteListContext.Provider value={{ cartItems, addItem }}>
        {children}
        </FavoriteListContext.Provider>
    );
}


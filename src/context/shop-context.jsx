import React, { createContext, useState } from 'react'

export const ShopContext = createContext(null);

const getDefaultCart = ()=>{
    let cart={};
    for(let i=1;i<=50;i++){
        cart[i]=0;
    }
    return cart;
}

export const ShopContextProvider = (props) => {
const [cartItems,setCartItems] = useState(getDefaultCart());
const addToCart = (itemId)=>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
}
const removeFromCart = (itemId)=>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}));
}
//showing the number of quantity with respect to product's id
// console.log(cartItems)
const contextValue={addToCart,removeFromCart,cartItems};
  return (
    <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
  )
}

import React, { useContext } from 'react'
import { ShopContext } from './shop-context';
import { ShopData } from './data-context';

export const TotalContext = React.createContext(0);
export const TotalContextProvider = (props)=>{
    const {cartItems} = useContext(ShopContext);
    const newData = useContext(ShopData);
    let total=0;
    newData.map((product)=>{
        if(cartItems[product.id]!==0){
          let cartItemAmt = cartItems[product.id];
           total=total+((product.price)*(cartItemAmt))
        }
        })
    return (
        <TotalContext.Provider value={total}>
            {props.children}
        </TotalContext.Provider>
    )
}

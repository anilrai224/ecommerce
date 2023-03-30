import React, { useContext } from 'react'
import './items.css'
import {ShopContext} from '../../context/shop-context'

const Items = (props) => {
    const {addToCart,cartItems} = useContext(ShopContext);
    const cartItemsAmt = cartItems[props.id]
  return (
    <div className='items'>
        <img src={props.img} alt="" />
        <p>Name: {props.name}</p>
        <p>Price: ${props.price}</p>
        <div className="add-btn">
            <button onClick={()=>addToCart(props.id)}>Add To Cart
            {cartItemsAmt!==0 && <>({cartItemsAmt})</>}
            </button>
        </div>
    </div>
  )
}

export default Items
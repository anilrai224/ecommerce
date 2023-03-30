import React, { useContext } from 'react'
import './cartitem.css'
import { ShopContext } from '../../context/shop-context'

const CartItems = (props) => {
  const {cartItems,addToCart,removeFromCart} = useContext(ShopContext);
  const totalCartAmt = cartItems[props.id];
  return (
    <>
      <div className='cartItems'>
        <img src={props.img} alt="" />
        <div className="cartItemDetail">
          <h2>{props.name}</h2>
          <div className="cartItemDetailBtn">
            <button onClick={()=>addToCart(props.id)}>+</button>
            <p>{totalCartAmt}</p>
            <button onClick={()=>removeFromCart(props.id)}>-</button>
          </div>
          <div className="itemTotal">
            <p>{totalCartAmt} * {props.price} = {totalCartAmt*props.price}</p>
          </div>
        </div>
    </div>
  </>
  )
}

export default CartItems
import React, { useContext,useState } from 'react'
import './cart.css'
import { ShopContext } from '../../context/shop-context'
import CartItem from './CartItems'
import { ShopData } from '../../context/data-context'
import { useNavigate } from 'react-router-dom'
import { TotalContext } from '../../context/totalAmount-context'
const Cart = () => {
  const navigate = useNavigate();
  const {cartItems} = useContext(ShopContext);
  const newData = useContext(ShopData);
  const total = useContext(TotalContext);
  const navigateShop = ()=>{
    navigate('/shop')
  }
  const navigateCheckOut = ()=>{
    navigate('/checkout')
  }

  let isEmpty=true;

  return (
      <div className='cart'>
      {newData.map((product)=>{
        if(cartItems[product.id]!==0){
          isEmpty=false;
        }
      })}
        <h1>{isEmpty?'No Item found!!!':'Your Cart Items'}</h1>
        <div className="carts">
          {newData.map((product)=>{
              if(cartItems[product.id]!==0){
                return <CartItem price={product.price} id={product.id} key={product.id} name={product.jawSummary.title} img={product.jawSummary.backgroundImage.url}/>
              }
            })}
        </div>
        <div className="totalCart" >
          <p className='sub-total' style={{display:isEmpty?'none':'flex'}}>Sub-Total:{total}</p>
        </div>
        <div className="checkOut">
          <button onClick={navigateCheckOut} style={{display:isEmpty?'none':'flex'}}>Proceed To Check Out</button>
          <button onClick={navigateShop} style={{display:isEmpty?'none':'flex'}}>Shop More</button>
        </div>
      </div>
  )
}

export default Cart
import React, { useContext } from 'react'
import './checkout.css'
import { TotalContext } from '../../context/totalAmount-context'

const CheckOut = () => {
    const total = useContext(TotalContext);
    console.log(total);
    const deliveryFee=10;
    let vat = 0.13*total
  return (
    
    <>
        <div className="checkOut">
            <p>Order Summary</p>
            <p>Items Total: ${total}</p>
            <p>Delivery Fee: ${deliveryFee}</p>
            <p>Vat(13%): {vat}</p>
            <p>Total Payment: ${total+deliveryFee+vat}</p>
            <div className="placeOrderBtn">
                <button>Place Order</button>
            </div>
        </div>
    </>
  )
}

export default CheckOut
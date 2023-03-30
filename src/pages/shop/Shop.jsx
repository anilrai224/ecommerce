import React, { useContext} from 'react'
import Items from './Items'
import './shop.css'
import { ShopData } from '../../context/data-context'

const Shop = () => {
  const newData = useContext(ShopData);

  return (
      <div className="item">
        {newData.map((product)=>(
          <Items price={product.price} key={product.id} id={product.id} name={product.jawSummary.title} img={product.jawSummary.backgroundImage.url}/>
      ))}
    </div>
  )
}

export default Shop
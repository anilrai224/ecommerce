import React from 'react'
import './index.css'
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Header from './components/header/Header'
import Home from './pages/home/Home'
import Shop from './pages/shop/Shop'
import Cart from './pages/cart/Cart'
import CheckOut from './pages/checkout/CheckOut'
import {ShopContextProvider} from './context/shop-context'
import { ShopDataProvider } from './context/data-context'
import { TotalContextProvider } from './context/totalAmount-context'

const App = () => {
  return (
    <>
      <ShopContextProvider>
        <ShopDataProvider>
          <TotalContextProvider>
            <Router>
              <Header/>
              <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/shop' element={<Shop/>}/>
                <Route path='/cart' element={<Cart/>}/>
                <Route path='/checkout' element={<CheckOut/>}/>
              </Routes>
            </Router>
          </TotalContextProvider>
        </ShopDataProvider>
      </ShopContextProvider>
    </>
  )
}

export default App
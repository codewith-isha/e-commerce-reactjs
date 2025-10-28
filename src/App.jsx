import React, { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Order from './pages/Order'

const App = () => {
  const  [order , setOrder] = useState(null)
  console.log(order)
  console.log(setOrder)
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/shop' element={<Shop/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout' element={<Checkout setOrder={setOrder}/>}/>
        <Route path='/order-confirmation' element={<Order order={order}/>}/>




    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
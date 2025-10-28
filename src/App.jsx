import React, { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Order from './pages/Order'
import FilterData from './pages/FilterData'

import ProductDetails from './components/ProductDetails'
import Contact from './pages/Contact'
import About from './pages/About'

const App = () => {
  const  [order , setOrder] = useState(null)
  // console.log(order)
  // console.log(setOrder)
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/shop' element={<Shop/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/about' element={<About/>}/>



        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout' element={<Checkout setOrder={setOrder}/>}/>
        <Route path='/order-confirmation' element={<Order order={order}/>}/>
        <Route path='/filter-data' element={<FilterData/>}/>
        <Route path='/product/:id' element={<ProductDetails/>}/>






    </Routes>
    <Footer/>
     <Toaster position="top-right" reverseOrder={false} />
    </BrowserRouter>
  )
}

export default App
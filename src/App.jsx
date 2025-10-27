import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Shop from './pages/Shop'

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/shop' element={<Shop/>}/>

    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
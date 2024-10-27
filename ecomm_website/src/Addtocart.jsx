import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './components/navbar'
import Cards from './components/cards'
import Footer from './components/footer'
import Buynow from './components/buynow'
import BestSelling from './components/bestselling'
import Cart from './components/Cart'

function Addtocart({cart, setCart}) {

  
    return (
      <>
      <Navbar/>
      <Cart cart={cart} setCart={setCart} />
      <Footer/>
      </>
    )
  }
  
  export default Addtocart
  
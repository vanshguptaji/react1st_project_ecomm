import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './components/navbar'
import Cards from './components/cards'
import Footer from './components/footer'
import Buynow from './components/buynow'
import BestSelling from './components/bestselling'

function Addtocart() {
    const [count, setCount] = useState(0)
  
    return (
      <>
      <Navbar/>
      <BestSelling/>
      <Buynow/>
      <Footer/>
      </>
    )
  }
  
  export default Addtocart
  
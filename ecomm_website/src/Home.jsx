import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './components/navbar'
import Cards from './components/cards'
import Footer from './components/footer'
import Buynow from './components/buynow'
import BestSelling from './components/bestselling'

function Home({handleClick}) {


  return (
    <>
    <Navbar/>
    <BestSelling handleClick={handleClick}/>
    <Buynow/>
    <Footer/>
    </>
  )
}

export default Home

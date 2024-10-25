import { useState } from 'react'
import Navbar from './components/navbar'
import Cards from './components/cards'
import Footer from './components/footer'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Cards/>
    <Footer/>
    </>
  )
}

export default Home

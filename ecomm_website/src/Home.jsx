import { useState } from 'react'
import Navbar from './components/navbar'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    </>
  )
}

export default Home

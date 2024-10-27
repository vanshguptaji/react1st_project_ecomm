import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { useState } from 'react'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import Home from './Home.jsx'
import Addtocart from './Addtocart.jsx'
import Wishlist from './Wishlist.jsx'

function App({}){

    const [show, setShow] = useState(true)
    const [cart, setCart] = useState([]);
  
    const handleClick = (item) => {
      // console.log(productname, discount, dprice, price);
      console.log(item);
      const handleClick = (item)=>{
        let isPresent = false;
        cart.forEach((product)=>{
          if (item.id === product.id)
          isPresent = true;
        })
        if (isPresent){
          return ;
        }
        setCart([...cart, item]);
      }
      
  
      
    }
    return(
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home handleClick={handleClick}/>}/>
          <Route path="Addtocart" element={<Addtocart cart={cart} setCart={setCart} />}/>
          <Route path="Wishlist" element={<Wishlist/>}/>
        </Routes>
        </BrowserRouter>
    );
}

export default App
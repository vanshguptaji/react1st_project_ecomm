import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home.jsx'
import Addtocart from './Addtocart.jsx'
import Cart from './components/Cart.jsx'
import Navbar from './components/navbar.jsx'
import Wishlist from './Wishlist.jsx'

function App({ }) {

  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);

  const handleClick = (item) => {
    let isPresent = false;
    cart.forEach((product) => {
      if (item.id === product.id)
        isPresent = true;
    })
    if (isPresent) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 2000);
      return;
    }
    setCart([...cart, item]);
  }

  const handleChange = (item, d) => {
    let ind = -1;
    cart.forEach((data, index) => {
      if (data.id === item.id)
        ind = index;
    });
    const tempArr = cart;
    tempArr[ind].amount += d;

    if (tempArr[ind].amount === 0)
      tempArr[ind].amount = 1;
    setCart([...tempArr])
  }


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home handleClick={handleClick} />} />
        <Route path="Addtocart" element={<Addtocart cart={cart} setCart={setCart} />} />
        <Route path="Wishlist" element={<Wishlist />} />
      </Routes>
<Home handleClick={handleClick} /> 
 <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      {
        warning && <div className='warning'>Item is already added to your cart</div>
      }
    </BrowserRouter>
  );
}

export default App
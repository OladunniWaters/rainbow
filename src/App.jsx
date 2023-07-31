import Home from './components/pages/home/Home';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Track from './components/track/TrackID';
import Contact from './components/contact/Contact';
import Shipping from './components/policies/Shipping';
import Refund from './components/policies/Refund';
import Terms from './components/policies/Terms';
import Cart from './components/cart/Cart';
import PaymentForm from './components/form/Form';
import {BrowserRouter as HashRouter, Routes, Route} from "react-router-dom";
import  { useState } from 'react';

function App() {
    const [theme, setTheme] = useState("dark")
    const changeTheme = () =>{
    theme === "dark" ? setTheme("light") : setTheme("dark")
  }
  

  return (
    <>
 <div className="app" data-theme={theme}>
    <HashRouter>
      <Navbar changeTheme={changeTheme}/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/track" element={<Track />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/shipping" element={<Shipping />} />
        <Route exact path="/refund" element={<Refund />} />
        <Route exact path="/terms" element={<Terms />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/paymentForm" element={<PaymentForm />} />
      </Routes>
       <Footer />
    </HashRouter> 
  </div>
    </>
  )
}

export default App
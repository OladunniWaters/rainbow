import Home from './components/pages/home/Home';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Track from './components/track/Track';
import Contact from './components/contact/Contact';
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
      </Routes>
       <Footer />
    </HashRouter> 
  </div>
    </>
  )
}

export default App
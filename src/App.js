import React from 'react'
import "./app.css";
import Navbar from './Component/Navbar/Navbar';
import Home from './Component/Home/Home';
import Popular from './Component/Popular/Popular';
import Offer from './Component/Offer/Offer';

import About from './Component/About/About';
import Blog from './Component/Blog/Blog';
import Footer from './Component/Footer/Footer';


const App = () => {
  return (
   <>
    <Navbar/>
    <Home/>
    <Popular/>
    <Offer/>
    <About/>
    <Blog/>
    <Footer/>
    
   </>
  )
}

export default App;

   
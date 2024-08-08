import React, { useState } from 'react'
import { Outlet } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Services from './components/Services/Services';
import Clients from './components/Clients/Clients';
import Pricing from './components/Pricing/Pricing';
import Contact from './components/Contact/Contact';
import { motion, useScroll, useMotionValueEvent, color } from "framer-motion";


const Layout = () => {

  const { scrollY } = useScroll(
    );
  const [scrollvar, setscrollvar]= useState(0)
  
  useMotionValueEvent(scrollY, "change", (latest) => {
      // console.log(latest);
      const height = document.body.clientHeight;
      setscrollvar(latest*100/height)
     console.log(scrollvar)
  })

  return (
  
    <div className="App">
      
      <Nav/>

      {/* <Outlet/> */}
      <Hero/>
      <About scrollvar={scrollvar}/>

      <Services/>
      <Clients/>
      {/* <Pricing/> */}
      <Contact/>


      <Footer/>
    </div>
    
  )
}

export default Layout

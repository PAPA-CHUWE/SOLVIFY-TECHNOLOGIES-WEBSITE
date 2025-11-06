import React from 'react'
import NavBar from '../landingPageComponents/NavBar'
import Hero from './home/page'
import About from './about/page'
import Traits from '../landingPageComponents/Traits'
import Services from './services/page'
import IndustriesWeServed from './industries/page'
import Contact from './contact/page'
import Footer from '../landingPageComponents/Footer'

const LandingPage = () => {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <Traits/>
      <About/>
      <Services/>
      <IndustriesWeServed/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default LandingPage
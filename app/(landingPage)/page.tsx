import React from 'react'
import NavBar from '../landingPageComponents/NavBar'
import Hero from '../home/page'
import About from './about/page'
import Traits from '../landingPageComponents/Traits'

const LandingPage = () => {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <Traits/>
      <About/>

    </div>
  )
}

export default LandingPage
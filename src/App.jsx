import React from 'react'
import Navber from './Components/Navbar/Navber'
import Hero from './Components/Hero/Hero'
import About from './Components/About.jsx/About'
import Services from './Components/services/Services'
import Myprojects from './Components/Myprojects/Myprojects'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'


const App = () => {
  return (
    <div>
      <Navber/>
      <Hero/>
      <About/>
      <Services/>
      <Myprojects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App

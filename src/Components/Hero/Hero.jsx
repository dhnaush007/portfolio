import React from 'react'
import './Hero.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import dhanush from '../../assets/dhanush.jpg'

const Hero = () => {
  return (
    <div id='hero' className='hero'>
      <img className='proflie-img' src={dhanush} alt="" />
      <h1> <span >I'm Dhanush Kumar,</span> frontend developer based in Tamil nadu, India</h1>
      <p>I am a frontend developer from  Tamil nadu , from india with  freshers . I commplete B.Com (PA) I'm currently looking for jop oppertunities  </p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='ancher-link'  offset={50} href='#contact'>connect with Me</AnchorLink></div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  )
}

export default Hero
  
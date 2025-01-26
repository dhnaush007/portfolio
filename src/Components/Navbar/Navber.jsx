import React, { useRef, useState } from 'react'
import './Navber.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import underline from '../../assets/nav_underline.svg'

const Navber = () => {

  const[menu,setMenu]= useState("home");
  
  return (
    <div id='navber' className='navber'>
       <h1> <span>DHANUSH KUMAR </span></h1>
         <ul className="nav-menu">
            <li><AnchorLink className='ancher-link'  href='#home'><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu==="home"?<img src={underline} />:<></>}</li>
            <li><AnchorLink className='ancher-link'  offset={50} href='#about'><p onClick={()=>setMenu("about")}>About Me</p></AnchorLink>{menu==="about"?<img src={underline} />:<></>}</li>
            <li><AnchorLink className='ancher-link'  offset={50} href='#services'><p onClick={()=>setMenu("services")}>Services</p></AnchorLink>{menu==="services"?<img src={underline} />:<></>}</li>
            <li><AnchorLink className='ancher-link'  offset={50} href='#myprojects'><p onClick={()=>setMenu("portfolio")}>Potfolio</p></AnchorLink>{menu==="portfolio"?<img src={underline} />:<></>}</li>
            <li><AnchorLink className='ancher-link'  offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>{menu==="contact"?<img src={underline} />:<></>}</li>
        </ul>
      <div className="nav-connect"><AnchorLink className='ancher-link'  offset={50} href='#contact'>Connect With Me</AnchorLink></div>
    </div>
  )
}

export default Navber

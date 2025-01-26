import React from 'react'
import './Footer.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div id='footer' className='footer'>
    <div className="footer-top">
      <div className="footer-left">
        <h1>Dhanush kumar</h1>
        
        <p>I am a frontend developer from Tamil nadu , from india with freshers .
           I commplete B.Com (PA) I'm currently looking for jop oppertunities</p>
      </div>
      <div className="footer-right">
        <div className="footer-input">
          <img src={user_icon} alt="" />
          <input type="email" placeholder='Enter Your email'  />
        </div>
        <div className="footer-button">Subscribe</div>
      </div>
    </div>
    <hr />
    <div className="footer-bottem">
      <div className="footer-bottem-left">
        <p>© 2024 Dhanush Kumar. All rights reserved.</p>
      </div>
      <div className="footer-bottem-right">
        <p>Term & services</p>
        <p>Privacy policy</p>
        <p>connent with me</p>
      </div>
    </div>
    </div>
  )
}

export default Footer

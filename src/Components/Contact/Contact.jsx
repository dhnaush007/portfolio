import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import call_icon from '../../assets/call_icon.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "1c47319b-9d7d-4b42-8407-21642090825c");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };
 
  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get in touch </h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <span><h1>let's talk</h1></span>
          <p>I'm currently avaliable to take on new projects, so feel free to send me a
             message about anything that you want me to work on.
             You can contact anytime.</p>
             <div className="contact-details">
              <div className="contact-detail">
                 <img src={mail_icon} alt="" /> <p>dhanushkumar0997@gmail.com</p>
              </div>
              <div className="contact-detail">
              <img src={call_icon} alt="" /> <p> 6384048655</p>
                </div>
                <div className="contact-detail">
                <img src={location_icon} alt="" /> <p>Erode, Tamil nadu India</p>
                </div>

             </div>
        </div>
       <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
        <input type="text" name='name'  placeholder='Enter Your Name' />
        <label htmlFor="">Your Email</label>
        <input type="email" name='email' placeholder='Enter Your Email'  />
        <label htmlFor="">Write your message here</label>
        <textarea name="massage" rows="8" placeholder='Enter Your massage'></textarea>
        <button type='submit' className="contact-submit">Submit Now</button>
       </form>
      </div>
    </div>
  )
}

export default Contact

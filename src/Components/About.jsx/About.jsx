import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import dhanush from '../../assets/dhanush.jpg'


const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-section">
     <div className="about-left">
       <img src={dhanush} alt="" />
     </div>
     <div className="aubot-right">
       <div className="about-paragraph">
        <p>Hello! I’m a passionate Frontend Developer dedicated to creating seamless and engaging user experiences. With a keen eye for design and a love for coding, 
          I specialize in building responsive and interactive websites using the latest technologies.</p>
        <p>I thrive on turning ideas into reality, and I enjoy collaborating with designers and backend developers to deliver high-quality projects.
           My goal is to make the web a more beautiful and functional place, one line of code at a time.</p>
         
       </div>
       <div className="about-skills">
        <div className="about-skill"><p>HTML&CSS</p> <hr style={{width:"80%"}} /></div>
        <div className="about-skill"><p>REACT JS </p> <hr style={{width:"60%"}} /></div>
        <div className="about-skill"><p>JAVA SCRIPT </p> <hr style={{width:"65%"}} /></div>
        <div className="about-skill"><p>TAILWIND CSS</p> <hr style={{width:"60%"}} /></div>
       </div>
       
     </div>
   </div>   
   <div className="about-achievements">
    <div className="about-achievement">
      <h1>0+</h1>
      <p>YEAR OF EXPERIENCE I AM WAITING MY JOB</p>
    </div>
    <hr />
    <div className="about-achievement">
      <h1>10+</h1>
      <p>PROJECTS COMLETED</p>
    </div>
    <hr />
    <div className="about-achievement">
      <h1>0+</h1>
      <p> I' MAKE HAPPY CLIENTS</p>
    </div>
    </div>
     
   </div>
   
  
  )
}

export default About

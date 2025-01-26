import React from 'react'
import './Myprojects.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'


const Myprojects = () => {
  return (
    <div id='myprojects' className='myproects'>
      <div className="myproects-title">
        <h1>My Projects</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="myproject-container">
       {mywork_data.map((work,index)=>{
        return <img key={index} src={work.w_img} alt="" />
       })}
      </div>
      <div className="myproject-showmore">
        <p>Read More </p>
        <img src={arrow_icon} alt="" />
      </div>
    </div>
  )
}

export default Myprojects


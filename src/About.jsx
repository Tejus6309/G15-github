import React from 'react'
import SideBar from './SideBar'

const About = () => {
  return (
    <div style={{backgroundColor:"yellow", color:"black",padding:"20px"}}>
        <h1>THis is About Page</h1>
        <SideBar x={11} text={"i am coming from about page"}/>
    </div>
  )
}

export default About

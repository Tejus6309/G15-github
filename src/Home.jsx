import React from 'react'
import SideBar from './SideBar'

const Home = () => {
    let x = 10;
    let y = "i am declared in Home"
  return (
    <div style={{backgroundColor:"aqua", padding:"10px"}}>
      <h1>This is Home Page</h1>
        <SideBar x={x} text={y}/>

    </div>
  )
}

export default Home

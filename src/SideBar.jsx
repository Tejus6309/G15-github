import React from 'react'

const SideBar = (props) => {
    console.log(props) // {x:10 , text:"i am declared in Home"}
  return (
    <div style={{backgroundColor:"brown", color:"white"}}>
      <h1>This is Side bar</h1>
      <p>{props.x}</p>
      <p>{props.text}</p>
    </div>
  )
}

export default SideBar

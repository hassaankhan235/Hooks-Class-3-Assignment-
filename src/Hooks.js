import React, { useState } from 'react'
import './Hooks.css'

const Hooks = () => {
    const[lit, setlit]   = useState(true)
    var[temp, setTemp] = useState(35)
    
    function toggle() {
        setlit(!lit)
        console.log(` ${lit ? "light" : "dark"} `)
    }
    return(
        <div className= {`room ${lit ? "light" : "dark"}`}>
        <div className="container">
        <h1>Buttons</h1>
        <button onClick = {toggle} > 
        Toogle Light
        </button><br/>
        <button onClick = {() => {  
        setTemp(++temp)
        console.log(temp)}}> Increase Temp </button>
        <br/>
        <button onClick = {() => {
            setTemp(--temp)
            console.log(temp)}
        }> Decrease Temp </button>
        </div>
        <div className= "temp_cont">
        <h1> Temperature</h1></div>
        <h2> The Light is {lit ? "ON": "OFF"} </h2>
        <h2> Current temp is {temp} </h2>
        </div>
    )
}
export default Hooks;
import React, { useState } from 'react';
import './Room.css'


function Room() {
  let [islit, setLit] = useState(true);
  let [Age, setAge] = useState(0)
  let [temp, setTemp] = useState(72)

  let DecideClass = islit? "lit" : "dark";
  return (
    <div className= {`room ${DecideClass}`} >
      The Room is {islit ? "lit" : "dark"} <br />
      {/* <button onClick={()=>{setLit(!islit)}} >Toogle Switch</button> <br /> <br /> */}
      <button onClick={()=>{setLit(true)}} >ON</button>
      <button onClick={()=>{setLit(false)}} >OFF</button> <br /> <br />

      Age: {Age} <br />
      <button onClick={()=>{setAge(++Age)}} >Increase Age</button> <br /><br />

      Temprature: {temp} <br />
      <button onClick= {()=> setTemp(++temp)} > Increase Temprature (+) </button>
      <button onClick= {()=> setTemp(--temp)} > Decrease Temprature (-) </button>
    </div>
  );
}

export default Room;

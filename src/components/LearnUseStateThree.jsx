import React, { useState } from 'react'

const LearnUseStateThree = () => {
    const [okayOne,setOkayOne]=useState("shahzaib");
    const [okayTwo,setOkayTwo]=useState(" Red");
    const [okayThree,setOkayThree]=useState("Cricket")


  return (
    <div>
        <h1>My name is {okayOne}</h1>
        <h2>My favourite Color is {okayTwo}</h2>
        <h3>My Favourite Sport is {okayThree}</h3>
        <button onClick={()=>setOkayOne("Umair")}>Click me</button>
        <button onClick={()=>setOkayTwo("Brown")}>Click me</button>

      
    </div>
  )
}

export default LearnUseStateThree;

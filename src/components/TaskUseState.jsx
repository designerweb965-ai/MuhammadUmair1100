import React, { useState } from 'react'

const TaskUseState = () => {

    const [firstName,setFirstName]=useState("Umair");
    const [lastName,setLastName]=useState("Aslam");
    const [address,setAddress]=useState("Pattoki");
    const [number,setNumber]=useState("03229765564")
  return (
    <div>
      <h1>My name is {firstName}. My father name is {lastName}. I live in {address}. My contact number {number}  </h1>
      <button onClick={()=>setNumber("098777")}>Click me</button>
      <button onClick={()=>setFirstName("Shahzaib")}>Click me</button>
      <button onClick={()=>setLastName("Arif")}>Click me</button>
    </div>
  )
}

export default TaskUseState

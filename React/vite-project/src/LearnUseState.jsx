import React, { useState } from 'react'

const LearnUseState = () => {
    // let name = "jason"

    let [name,setName] = useState("jason");
    let [count,setCount]=useState(1)
  return (
    <div>Phool Ko Aankha Ma
    <p>name is {name}</p>
    <button onClick = {()=>{
        console.log("button is clicked")
    }}>send</button>

    <button onClick = {()=>{
        setName("Ram")
    }}>Change Name</button>

  {/*   <p>Count is {count}</p>
    <button onClick ={()=>{
        setCount(count+1)
    }} */}

    <p>Count is {count}</p>

 
    
    <button onClick = {()=>{
        setCount(count + 1)
    }}>Increment</button>

    <button onClick = {()=>{
        setCount(count - 1)
    }}>Decrement</button>

   
    </div>

  )
}

export default LearnUseState


//creating variable using useState()


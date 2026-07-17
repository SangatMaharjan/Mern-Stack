import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ReadAllProduct = () => {
  let[data,setData] = useState([])
  let getData =async ()=>{
    try {
      let result = await axios({
      url:"http://localhost:8000/product",
      method:"get",
    })
    console.log(result.data.result)
    setData(result.data.result)
    } catch (error) {
      
    }
  }
  useEffect(()=>{
    getData()
  }, [])

  console.log(data)
  return (
    <div>
      {data.map((item,i)=>{
        return (
          <div key={i}>
            <p>name is {item.name}</p>
            <p> price is {item.price}</p>
            <p>quantity is {item.quantity}</p>
            <p>description is {item.description}</p>
            </div>
        )
      })}
    </div>
    /* <div>ReadAllProduct</div> */
  )
}

export default ReadAllProduct

/* 
hit api on page load->we use useEffect hook
api gives data
show data
 */

 //hit api on page load
  //api gives data
  //show data
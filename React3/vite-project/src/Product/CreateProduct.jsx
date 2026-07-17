import React, { useState } from 'react'
import axios from "axios"
import { toast } from 'react-toastify'
const CreateProduct = () => {
    let [name, setName]=useState("")
    let [price, setPrice]=useState("")
    let [quantity, setQuantity]=useState("")
    let [description, setDescription]=useState("")
    const handleSubmit =async (e) =>{
        e.preventDefault();
        let data={
            name:name,
            price:price,
            quantity:quantity,
            description:description,
        }
        console.log(data)
          /* for connect frontend and backend we need to insatall => npm i axios
          send data to backend
          url=> localhost:8000/product 
          */
          try {
            let result =await axios({
            url:"http://localhost:8000/product",
            method:"post",
            data:data
          })
          toast.success("Product created successfully")
          setName("")
          setPrice("")
          setQuantity("")
          setDescription("")
          } catch (error) {
            toast.error(error.response.data.message)
          }
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <div>
                    <label htmlFor="name">Name</label>
                    <input 
                    id="name" 
                    type="text"
                    value={name}
                    onChange={(e)=>{
                        setName(e.target.value)
                    }}
                    ></input>
                </div>
                <div>
                    <label htmlFor="price">Price</label>
                    <input 
                    id="price"
                    type="number"
                    value={price}
                    onChange={(e)=>{
                        setPrice(e.target.value)
                    }}
                    ></input>
                </div>
                <div>
                    <label htmlFor="quantity">Quantity</label>
                    <input 
                    id="quantity"
                    type="number"
                    value={quantity}
                    onChange={(e)=>{
                        setQuantity(e.target.value)
                    }}></input>
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <textarea 
                    id="description"
                    value={description}
                    onChange={(e)=>{
                        setDescription(e.target.value)
                    }}></textarea>
                </div>
            </div>
            <div>
                <button>Create</button>
            </div>
        </form>
    </div>
  )
}
export default CreateProduct

/* 
name 
price
quantity
discription
*/
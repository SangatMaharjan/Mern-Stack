import axios from 'axios'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

const CreateUser = () => {
      let [name, setName]=useState("")
      let [address, setAddress]=useState("")
      let [email, setEmail]=useState("")
      let [password, setPassword]=useState("")
      let [phone, setPhone]=useState("")
      const handleSubmit = async (e) =>{
          e.preventDefault();
          let data={
              name:name,
              address:address,
              email:email,
              password:password,
              phone:phone,
          }
          try {
            let result = await axios({
                url:"http://localhost:8000/user",
                method:"post",
                data:data,
            })
            setName("")
            setEmail("")
            setAddress("")
            setPassword("")
            setPhone("")
            toast.success("User created successfully")
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
                      <label htmlFor="address">Address</label>
                      <input 
                      id="address"
                      type="text"
                      value={address}
                      onChange={(e)=>{
                          setAddress(e.target.value)
                      }}
                      ></input>
                  </div>
                  <div>
                      <label htmlFor="email">Email</label>
                      <input 
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e)=>{
                          setEmail(e.target.value)
                      }}></input>
                  </div>
                  <div>
                      <label htmlFor="password">password</label>
                      <input 
                      id="password"
                      type="text"
                      value={password}
                      onChange={(e)=>{
                          setPassword(e.target.value)
                      }}></input>
                  </div>
                  <div>
                    <label htmlFor="phone">Phone</label>
                    <input id="phone"
                    type="number"
                    value={phone}
                    onChange={(e)=>{
                      setPhone(e.target.value)
                    }}
                    ></input>
                  </div>
              </div>
              <div>
                  <button>Create</button>
              </div>
          </form>
      </div>
    )
  }

export default CreateUser
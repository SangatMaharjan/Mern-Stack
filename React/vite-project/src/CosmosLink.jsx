import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'


const CosmosLink = () => {
  let navigate = useNavigate()
  return (
    <div>
      <NavLink to="/about" className = "navlink">About</NavLink>
      
      <NavLink to="/Contact" className = "navlink">Contact</NavLink>
      
      <NavLink to="/Product" className = "navlink">Product</NavLink>

      <button onClick = {()=>{
        navigate("/Login")
      }}>Login</button>

      
      
      {/* <Navlink to="/contact">Contact</Navlink>
      <Navlink to="/product">Product</Navlink> 
      this is cosmos link */}
      
    </div>
  )
}

export default CosmosLink

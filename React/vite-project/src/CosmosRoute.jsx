import React from 'react'
import Product from './component/Product'
import Job from './component/Job'
import About from './component/About'
import Login from './component/Login'
import { Route, Routes } from 'react-router-dom'

const CosmosRoute = () => {
  return (
    <div>
        CosmosRoute
        <Routes>
            <Route path="/product" element={<Product></Product>}></Route>
            <Route path="/about/:id" element = {<About></About>}></Route>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/job" element={<Job></Job>}></Route>
            <Route path ="/job/:id1/name/:id2" element={<Job></Job>}></Route>


        </Routes>
      
    </div>
  )
}

export default CosmosRoute

/* ..../product => Product 
..../
 */
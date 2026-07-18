import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ReadAllProduct from '../Product/ReadAllProduct'
import ReadSpecificProduct from '../Product/ReadSpecificProduct'
import CreateProduct from '../Product/CreateProduct'
import ReadAllUser from './User/ReadAllUser'
import UpdateProduct from '../Product/UpdateProduct'
import CreateUser from './User/CreateUser'
import ReadSpecificUser from './User/ReadSpecificUser'
import UpdateUser from './User/UpdateUser'
import ReadAllSchool from '../School/ReadAllSchool'
import CreateSchool from '../School/CreateSchool'
import ReadSpecificSchool from '../School/ReadSpecificSchool'
import UpdateSchool from '../School/UpdateSchool'

const CosmosRoute = () => {
  return (
    <div>
        <Routes>
            <Route path="/product" element={<ReadAllProduct></ReadAllProduct>}></Route>
            <Route path="/product/create" element={<CreateProduct></CreateProduct>}></Route>
            <Route path="/product/:id" element={<ReadSpecificProduct></ReadSpecificProduct>}></Route>
            <Route path="/product/update/:id" element={<UpdateProduct></UpdateProduct>}></Route>

            <Route path="/user" element={<ReadAllUser></ReadAllUser>}></Route>
            <Route path="/user/create" element={<CreateUser></CreateUser>}></Route>
            <Route path="/user/:id" element={<ReadSpecificUser></ReadSpecificUser>}></Route>
            <Route path="/user/update/:id" element={<UpdateUser></UpdateUser>}></Route>

            <Route path="/school" element={<ReadAllSchool></ReadAllSchool>}></Route>
            <Route path="/school/create" element={<CreateSchool></CreateSchool>}></Route>
            <Route path="/school/:id" element={<ReadSpecificSchool></ReadSpecificSchool>}></Route>
            <Route path="/school/update/:id" element={<UpdateSchool></UpdateSchool>}></Route>
        </Routes>
    </div>
  )
}

export default CosmosRoute
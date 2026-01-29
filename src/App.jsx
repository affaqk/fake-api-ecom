import React from 'react'
import Navbar from './Navbar'
import { Routes, Route } from "react-router-dom"
import Home from './Home'
import "./App.css"
import ProductDetail from './ProductDetail'
import Signup from './Signup'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/product-detail/:id" element = {<ProductDetail/>}/>
        <Route path = "/signup" element = {<Signup/>}/>
      </Routes>
    </div>
  )
}

export default App

// npm i react-router-dom
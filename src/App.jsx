
import './App.css'
import Workflow from './component/Workflow'
import Hero from './component/Hero'
import Navbar from './component/Navbar'
import Rating from './component/Rating'
import './index.css'
import Products from './Products'
import { useState } from 'react'


function App() {
  let [clickedProduct,setChilckedProduct]=useState([])

  return (
    <>
    <Navbar clickedProduct={clickedProduct} ></Navbar>
    <Hero></Hero>
    <Rating></Rating>
    <Products clickedProduct={clickedProduct} setChilckedProduct={setChilckedProduct}></Products>



    <Workflow></Workflow>
    </>
  )
}

export default App

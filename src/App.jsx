
import './App.css'
import Workflow from './component/Workflow'
import Hero from './component/Hero'
import Navbar from './component/Navbar'
import Rating from './component/Rating'
import './index.css'
import Products from './Products'
import { useState } from 'react'
import StepSec from './component/StepSec'
import Priceing from './Priceing'
import Footer from './Footer'


function App() {
  let [clickedProduct,setChilckedProduct]=useState([])

  return (
    <>
    <Navbar clickedProduct={clickedProduct} ></Navbar>
    <Hero></Hero>
    <Rating></Rating>
    <Products clickedProduct={clickedProduct} setChilckedProduct={setChilckedProduct}></Products>

    <StepSec></StepSec>
    <Priceing></Priceing>



    <Workflow></Workflow>
    <Footer></Footer>
    </>
  )
}

export default App

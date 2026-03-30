import React, { useState } from 'react';
import HeadLine from './component/Common/HeadLine';
import Tabs from './component/Products/Tabs';
import ProductCont from './component/Products/ProductCont';
import Carts from './component/Products/Carts';

const product =async()=>{
    let res =await fetch("/product.json")
    return res.json();
}
let productApi = product()

const Products = () => {

        let [selecBtn,setSelectBtn]= useState("products")

        let [clickedProduct,setChilckedProduct]=useState([])

        console.log(clickedProduct);
    return (
        <div className='container my-32'>
            <div>
           <HeadLine h1="Premium Digital Tools" p="Choose from our curated collection of premium digital products designed to boost your productivity and creativity."></HeadLine>

           <Tabs selecBtn={selecBtn} setSelectBtn={setSelectBtn}></Tabs>
            </div>
            {
                selecBtn === 'products' && <ProductCont productApi={productApi} clickedProduct={clickedProduct} setChilckedProduct={setChilckedProduct} ></ProductCont>
            }

            {
                selecBtn === 'carts' && <Carts></Carts>
            }




           
        </div>
    );
};

export default Products;
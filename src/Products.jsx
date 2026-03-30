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

const Products = ({clickedProduct,setChilckedProduct}) => {

        let [selecBtn,setSelectBtn]= useState("products")

       

        
    return (
        <div className='container my-32'>
            <div>
           <HeadLine h1="Premium Digital Tools" p="Choose from our curated collection of premium digital products designed to boost your productivity and creativity."></HeadLine>

           <Tabs selecBtn={selecBtn} setSelectBtn={setSelectBtn} clickedProduct={clickedProduct}></Tabs>
            </div>
            {
                selecBtn === 'products' && <ProductCont productApi={productApi} clickedProduct={clickedProduct} setChilckedProduct={setChilckedProduct} ></ProductCont>
            }

            {
                selecBtn === 'carts' && <Carts clickedProduct={clickedProduct} setChilckedProduct={setChilckedProduct}></Carts>
            }




           
        </div>
    );
};

export default Products;
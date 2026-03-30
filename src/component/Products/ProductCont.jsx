import React, { use } from 'react';
import Product from './Product';

const ProductCont = ({productApi,clickedProduct,setChilckedProduct}) => {
    let productData = use(productApi)

    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6' >
            {
                productData.map((item)=><Product item={item} clickedProduct={clickedProduct} setChilckedProduct={setChilckedProduct}></Product>)
            }
        </div>
    );
};

export default ProductCont;
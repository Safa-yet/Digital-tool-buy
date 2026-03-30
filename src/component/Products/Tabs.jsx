import React from 'react';

const Tabs = ({setSelectBtn,selecBtn,clickedProduct}) => {



    return (
        <div className='flex justify-center items-center my-8' >
            {/* name of each tab group should be unique */}
<div className="tabs tabs-box  bg-gray-200 p-1.5 rounded-full text-white">
  <input onClick={()=> setSelectBtn("products")} type="radio" name="my_tabs_1" className={`tab w-32  rounded-full  ${selecBtn=="products" &&" linear text-white  shadow-black shadow-lg duration-300" } `} aria-label="Products" defaultChecked />
  <input onClick={()=> setSelectBtn("carts")}   type="radio" name="my_tabs_1" className={`tab w-32  rounded-full  ${selecBtn=="carts" &&" linear text-white shadow-black shadow-lg duration-300"} `} aria-label={`Cart (${clickedProduct.length})`}  />
</div>
        </div>
    );
};

export default Tabs;
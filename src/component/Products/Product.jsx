import { Check, CheckCheck } from 'lucide-react';
import React, { useState } from 'react';
import Button from '../Common/Button';
import { toast } from 'react-toastify';

const Product = ({item,clickedProduct,setChilckedProduct}) => {


    let [buy,setBuy]= useState(true);

    let btnHandle = (e)=>{

        let isFound = clickedProduct.find((i)=>i.name === e.name)
        
        if (isFound){
            toast.error("Product already Clicked")
            return
        }
        setChilckedProduct([...clickedProduct,e])
        toast.success('✔ Added to Cart')
        
        setBuy(false)
    }

    return (
        
        <div className=' px-5 lg:py-7 space-y-3 relative rounded-4xl bg-amber-50 shadow-lg  duration-500 flex-col justify-between flex hover:-translate-y-1.5'>
            <img className='w-10' src={item.icon} alt="" />
            <div>
            <h1 className='text-2xl font-bold'>{item.name}</h1>
            <p className='text-sec my-1'>{item.description}</p>

            </div>
            <h3><span className='text-2xl font-bold'>${item.price}/</span><span className='text-sec text-sm'>{item.period}</span></h3>
            <ul className='space-y-2'>
                {item.features.map(li=>{
                    return(
                        <>
                        <li className='flex gap-1 text-sec '><Check className='text-green-500'  /> {li}</li></>
                    )
                })}
            </ul>
            <button className={`w-full ${buy?"linear text-white": "bg-green-400 text-black"}  btn  rounded-full duration-300`} onClick={()=>btnHandle(item)} >{buy?"Buy Now": "✔ Added to Cart" }</button>
            <div className={`absolute top-5 right-5  py-1.5 px-3 capitalize text-xs rounded-full ${item.tag=='popular'? 'bg-purple-300 text-purple-700': item.tag=='best seller'?'bg-pink-200 text-pink-700': 'bg-green-100 text-green-700'} `}>
                <p>{item.tag}</p>
            </div>
        </div>
    );
};

export default Product;
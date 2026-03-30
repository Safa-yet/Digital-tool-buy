import { Check, CheckCheck } from 'lucide-react';
import React, { useState } from 'react';
import Button from '../Common/Button';

const Product = ({item,clickedProduct,setChilckedProduct}) => {


    let [buy,setBuy]= useState(true);

    let btnHandle = (e)=>{

        // let filterProduct = item.filter(i=>i.name !== e.name);



        setChilckedProduct([...clickedProduct,e])
        

        setBuy(false)
    }

    return (
        
        <div className='py-4 px-5 space-y-2 relative rounded-4xl bg-amber-200 hover:outline-1'>
            <img src={item.icon} alt="" />
            <h1 className='text-2xl font-bold'>{item.name}</h1>
            <p className='text-sec'>{item.description}</p>
            <h3><span className='text-2xl font-bold'>${item.price}/</span>{item.period}</h3>
            <ul>
                {item.features.map(li=>{
                    return(
                        <>
                        <li className='flex gap-1 text-lg'><Check className='text-green-500' /> {li}</li></>
                    )
                })}
            </ul>
            <button className='w-full text-white linear btn btn-lg rounded-full' onClick={()=>btnHandle(item)} >{buy?"Buy Now": "Checked"}</button>
            <div className='absolute top-5 right-5 linear py-1.5 px-3 uppercase text-sm rounded-full'>
                <p>{item.tag}</p>
            </div>
        </div>
    );
};

export default Product;
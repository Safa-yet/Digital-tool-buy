import { Check, CheckCheck } from 'lucide-react';
import React, { useState } from 'react';
import Button from '../Common/Button';

const Product = ({item,clickedProduct,setChilckedProduct}) => {


    let [buy,setBuy]= useState(true);

    let btnHandle = (e)=>{

        let isFound = clickedProduct.find((i)=>i.name === e.name)

        if (isFound){
            alert("already Found")
            return
        }
        setChilckedProduct([...clickedProduct,e])
        setBuy(false)
    }

    return (
        
        <div className=' p-5 space-y-3 relative rounded-4xl bg-amber-50 shadow-2xl hover:outline-1 duration-500'>
            <img className='w-10' src={item.icon} alt="" />
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
            <button className={`w-full ${buy?"linear text-white": "bg-green-400 text-black"}  btn btn-lg rounded-full duration-300`} onClick={()=>btnHandle(item)} >{buy?"Buy Now": "✔ Purchased" }</button>
            <div className={`absolute top-5 right-5  py-1.5 px-3 capitalize text-sm rounded-full ${item.tag=='popular'? 'bg-purple-300 text-purple-700': item.tag=='best seller'?'bg-pink-200 text-pink-700': 'bg-green-100 text-green-700'} `}>
                <p>{item.tag}</p>
            </div>
        </div>
    );
};

export default Product;
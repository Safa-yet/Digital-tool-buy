import React from 'react';

const Rating = () => {
    const stats = [
  { id: 1, number: "50K+", label: "Active Users" },
  { id: 2, number: "120+", label: "Premium Tools" },
  { id: 3, number: "99%", label: "Customer Satisfaction" },
];
    return (
        <div className=' flex flex-col md:flex-row justify-center  linear py-10 gap-8 md:gap-0'>
           {
            stats.map((star)=>{
                return(
                    <>
                    <div className='text-center text-white px-20  md:border-e-2'>
                        <h1 className='text-4xl md:text-5xl font-bold'>{star.number}</h1>
                        <p className=' mt-4'>{star.label}</p>
                    </div>
                    </>
                )
            })
           }

        </div>
    );
};

export default Rating;
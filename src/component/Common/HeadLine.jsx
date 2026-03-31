import React from 'react';

const HeadLine = ({h1,p}) => {
    return (
        <div className='text-center lg:my-12 my-4'>
            <h1 className='text-2xl lg:text-5xl font-extrabold'>{h1}</h1>
            <p className='text-sec lg:mt-6 max-w-90 mx-auto'>{p}</p>
        </div>
    );
};

export default HeadLine;
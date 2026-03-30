import React from 'react';

const HeadLine = ({h1,p}) => {
    return (
        <div className='text-center my-12'>
            <h1 className='text-5xl font-extrabold'>{h1}</h1>
            <p className='text-sec mt-6'>{p}</p>
        </div>
    );
};

export default HeadLine;
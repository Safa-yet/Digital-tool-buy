import React from 'react';

const Button = ({btn="Get Started",className="text-white linear"}) => {
    return (
        <div>
            <button className={`${className} btn  rounded-full  p-4`}>{btn}</button>
        </div>
    );
};

export default Button;